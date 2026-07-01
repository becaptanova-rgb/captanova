/**
 * CAPTANOVA ACADEMY — Google Apps Script
 * =========================================
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets → Extensions → Apps Script
 * 2. Paste this entire script
 * 3. Click Deploy → New Deployment → Web App
 * 4. Execute as: Me | Access: Anyone
 * 5. Copy the Web App URL into your .env.local as GOOGLE_SHEETS_WEBHOOK_URL
 *
 * The sheet will auto-create two tabs: "Leads" and "Purchases"
 */

const SHEET_NAME_LEADS = "Leads";
const SHEET_NAME_PURCHASES = "Purchases";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (data.type === "purchase") {
      // ── Handle purchase ────────────────────────────────────────────────
      let sheet = ss.getSheetByName(SHEET_NAME_PURCHASES);
      if (!sheet) {
        sheet = ss.insertSheet(SHEET_NAME_PURCHASES);
        sheet.appendRow([
          "Timestamp", "Name", "Email", "Program", "Order ID", "Payment ID"
        ]);
        sheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#D4AF37");
      }
      sheet.appendRow([
        data.timestamp || new Date().toISOString(),
        data.name,
        data.email,
        data.programName,
        data.orderId,
        data.paymentId,
      ]);
    } else {
      // ── Handle lead ────────────────────────────────────────────────────
      let sheet = ss.getSheetByName(SHEET_NAME_LEADS);
      if (!sheet) {
        sheet = ss.insertSheet(SHEET_NAME_LEADS);
        sheet.appendRow([
          "Timestamp", "Name", "Email", "Phone", "Source", "Quiz Profile"
        ]);
        sheet.getRange(1, 1, 1, 6).setFontWeight("bold").setBackground("#1a1a2e")
          .setFontColor("#D4AF37");
      }
      sheet.appendRow([
        data.timestamp || new Date().toISOString(),
        data.name,
        data.email,
        data.phone || "",
        data.source || "website",
        data.quizProfile || "",
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "Captanova Sheets API is running ✓" }))
    .setMimeType(ContentService.MimeType.JSON);
}
