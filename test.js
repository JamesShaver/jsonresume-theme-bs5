const fs = require('fs');
const path = require('path');
const theme = require('./index.js');

// Load the sample resume
const resumeData = JSON.parse(fs.readFileSync(path.join(__dirname, 'resume.json'), 'utf-8'));

// Render the resume
const html = theme.render(resumeData);

// Save the output
fs.writeFileSync(path.join(__dirname, 'resume.html'), html);

console.log('✅ Resume rendered successfully!');
console.log('📄 Output saved to resume.html');
console.log('🌐 Open resume.html in your browser to view the result');