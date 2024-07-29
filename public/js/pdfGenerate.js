const fs = require('fs');
const path = require('path');

// Directory containing the PDF files
const pdfDir = 'public/pdfs';

// Template for the HTML content
const htmlTemplate = (pdfFileName) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pdfFileName} Experiment</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <div class="container">
        <h1>${pdfFileName.replace('.pdf', '')}</h1>
        <iframe src="pdfs/${pdfFileName}" width="50%" height="600px">
            This browser does not support PDFs. Please download the PDF to view it: <a href="pdfs/${pdfFileName}">Download PDF</a>.
        </iframe>
        <br>
        <a href="experiments.html">Back to Experiments</a>
    </div>
    <script src="js/scripts.js"></script>
</body>
</html>
`;

// Read the PDF directory
fs.readdir(pdfDir, (err, files) => {
    if (err) {
        console.error('Error reading the pdfs directory:', err);
        return;
    }

    // Filter out non-PDF files
    const pdfFiles = files.filter(file => path.extname(file).toLowerCase() === '.pdf');

    // Generate an HTML file for each PDF file
    pdfFiles.forEach(pdfFile => {
        console.log(`Generating HTML for ${pdfFile}...`);
        const htmlContent = htmlTemplate(pdfFile);
        const htmlFileName = path.join(`${pdfFile.replace('.pdf', '')}.html`);

        // Write the HTML content to a new file
        fs.writeFile(htmlFileName, htmlContent, (err) => {
            if (err) {
                console.error(`Error writing file ${htmlFileName}:`, err);
            } else {
                console.log(`Generated ${htmlFileName}`);
            }
        });
    });
});