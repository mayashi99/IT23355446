const xlsx = require("xlsx");
const path = require("path");

function cleanKey(k) {
  return String(k || "").trim().replace(/\s+/g, " ");
}

function loadTestCases() {
  const filePath = path.join(__dirname, "..", "data", "IT23355446-Test_cases.xlsx");
  const wb = xlsx.readFile(filePath);

  const sheetName = " Test cases"; // leading space in your file
  const sheet = wb.Sheets[sheetName];
  if (!sheet) throw new Error(`Sheet not found: "${sheetName}"`);

  // Real header row starts after Notes section (Excel row 5 => index 4)

  let rows = xlsx.utils.sheet_to_json(sheet, {
    range: HEADER_ROW_INDEX,
    defval: "",
  });

  // Normalize header keys
  rows = rows.map((row) => {
    const normalized = {};
    for (const key of Object.keys(row)) {
      normalized[cleanKey(key)] = row[key];
    }
    return normalized;
  });

  // Only actual test case rows (TC ID present)
  return rows
    .filter((r) => cleanKey(r["TC ID"]) !== "")
    .map((r) => ({
      tcId: cleanKey(r["TC ID"]),
      name: cleanKey(r["Test case name"]),
      type: cleanKey(r["Input length type"]),
      input: String(r["Input"] || "").trim(),
      expected: String(r["Expected output"] || "").trim(), // Excel expected output exists 
      status: String(r["Status"] || "").trim(), // correct column name 
    }));
}

module.exports = { loadTestCases };