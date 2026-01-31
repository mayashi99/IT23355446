             <img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/4d8fe0b6-e03c-4c8c-84ce-ad0d6b66ea30" />
      🎓 IT23355446 - ITPM Assignment 01: Playwright Testing Project
## IT23355446 – Playwright Excel Based Test Automation
### Project Overview

This project is a test automation framework built using Playwright and Node.js.
It executes automated test cases using data stored in an Excel file.

The automation is mainly designed to test the Swift Translator Web Application.
(https://www.swifttranslator.com/).

### Technologies Used

Playwright

Node.js

JavaScript

Excel (Test Data Source)

GitHub (Version Control)

### Project Structure
IT23355446/
│
├── tests/                 # Playwright test files
├── utils/                 # Utility files (Excel reader, helpers)
├── testdata/              # Excel test data files
├── playwright.config.js   # Playwright configuration
├── package.json           # Project dependencies
└── README.md              # Project documentation

## Test Case Naming Convention
Positive Functional Tests: Pos_Fun_XXXX

Negative Functional Tests: Neg_Fun_XXXX

Positive UI Tests: Pos_UI_XXXX

Negative UI Tests: Neg_UI_XXXX

### Test Data

Test data is stored in Excel format.

Example file:

IT23355446-Test_cases.xlsx


Contains:

TestCaseID

Input Data

Expected Result

Test Type (UI / Functional / Negative / Positive)

 ### Installation & Setup
   Clone Repository
git clone https://github.com/mayashi99/IT23355446.git

 Navigate to Project
cd IT23355446

 Install Dependencies
npm install

 Install Playwright Browsers
npx playwright install

## Running Tests

### Run all tests:

npx playwright test

###  Running Test
npx playwright test -g "Pos_Fun_0001" --headed

### Run specific test file:

npx playwright test testfile.spec.js

 Example Test Flow

Read test data from Excel

Open Swift Translator website

Enter input text

Select language

Verify translation result

Log test result

### Reporting

After execution, Playwright generates:

HTML Report

Test Logs

Screenshots (if configured)

### View report:

npx playwright show-report
