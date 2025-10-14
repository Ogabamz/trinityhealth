// 1. Go to script.google.com
// 2. Create a new project.
// 3. Paste this code into the editor.
// 4. Click "Deploy" -> "New deployment".
// 5. For "Select type", choose "Web app".
// 6. In the "Description" field, type "Heart Health Scorecard Logger".
// 7. For "Who has access", select "Anyone".
// 8. Click "Deploy".
// 9. Authorize the script to access your Google Sheets.
// 10. Copy the web app URL.
// 11. In your results.html file, uncomment the fetch call and paste the URL.

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const sheet = SpreadsheetApp.openById('1s1cF9QmJ5oQGPrLAVRubaRzHyM_E_dcAvD8AxiTinu0').getSheetByName('Sheet1');

    // Create header row if the sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Full Name',
        'Email',
        'WhatsApp',
        'Final Score',
        'Total Points',
        'Score Percentage',
        'Risk Level',
        'Risk Factors',
        'Qualification Score',
        'Is Highly Qualified',
        'Buying Intent',
        'Primary Goal',
        'Main Obstacle',
        'Time to Complete (s)',
        'Completed Full Assessment',
        'Clicked WhatsApp',
        'Visited Blog',
        'Recommendation Type',
        'Source URL',
        'User Agent',
        'Referrer',
        'Q1', 'Q2', 'Q3', 'Q4', 'Q5', 'Q6', 'Q7', 'Q8', 'Q9', 'Q10',
        'Q11', 'Q12', 'Q13', 'Q14', 'Q15'
      ]);
    }

    const row = [
      data.timestamp,
      data.fullName,
      data.email,
      data.whatsapp,
      data.finalScore,
      data.totalPoints,
      data.finalScore, // Percentage
      data.riskLevel,
      data.riskFactorsIdentified,
      data.qualificationScore,
      data.isHighlyQualified,
      data.buyingIntent,
      data.primaryGoal,
      data.mainObstacle,
      data.timeToComplete,
      data.completedFullAssessment,
      data.clickedWhatsApp,
      data.visitedBlog,
      data.recommendationType,
      data.sourceURL,
      data.userAgent,
      data.referrer,
      data.q1_answer, data.q2_answer, data.q3_answer, data.q4_answer, data.q5_answer,
      data.q6_answer, data.q7_answer, data.q8_answer, data.q9_answer, data.q10_answer,
      data.q11_answer, data.q12_answer, data.q13_answer, data.q14_answer, data.q15_answer
    ];

    sheet.appendRow(row);

    return ContentService.createTextOutput(JSON.stringify({ status: 'success' })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() })).setMimeType(ContentService.MimeType.JSON);
  }
}