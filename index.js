const fs = require('fs');

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My GitHub Pages Site</title>
</head>
<body>
    <h1>Hello, GitHub Pages!</h1>
    <p>This is a simple site published using GitHub Actions.</p>
</body>
</html>
`;

fs.writeFileSync('index.html', htmlContent, 'utf8');
console.log('index.html has been generated.');
