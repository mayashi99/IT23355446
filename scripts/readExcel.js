const xlsx = require("xlsx");
const path = require("path");

function cleanKey(k) {
  return String(k || "").trim().replace(/\s+/g, " ");
}

// Excel header starts at row 5 (0-based index = 4)
const HEADER_ROW_INDEX = 4;

function loadTestCases() {
  const filePath = path.join(
    __dirname,
    "..",
    "data",
    "IT23355446-Test_cases.xlsx"
  );

  const wb = xlsx.readFile(filePath);

  const sheetName = " Test cases"; // ⚠️ leading space confirmed
  const sheet = wb.Sheets[sheetName];
  if (!sheet) throw new Error(`Sheet not found: "${sheetName}"`);

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

  // Only rows with TC ID
  return rows
    .filter((r) => cleanKey(r["TC ID"]) !== "")
    .map((r) => ({
      tcId: cleanKey(r["TC ID"]),
      name: cleanKey(r["Test case name"]),
      type: cleanKey(r["Input length type"]),
      input: String(r["Input"] || "").trim(),
      expected: String(r["Expected output"] || "").trim(),
      status: String(r["Status"] || "").trim(),
    }));
}

module.exports = { loadTestCases };
