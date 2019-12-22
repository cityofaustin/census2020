var GoogleSpreadsheet = require('google-spreadsheet');
var creds = require('./.google_sheets.json');

// Create a document object using the ID of the spreadsheet - obtained from its URL.
var doc = new GoogleSpreadsheet('1V2offIBiB77kmK_dfwATdYRHx3TSHJLnATr7bmrrHAI');

const getEvents = function () {
  return new Promise((resolve, reject) => {
    // Authenticate with the Google Spreadsheets API.

    doc.useServiceAccountAuth(creds, function (err) {

      // Get all of the rows from the spreadsheet.
      doc.getRows(1, function (err, rows) {
        if (err) reject(err);

        const approvedEvents = [];
        for (event of rows) {
          if (event.approved === 'y') approvedEvents.push(event);
        }
        resolve(approvedEvents);
      });
    });
  });
}

module.exports = { getEvents };