const fs = require('fs');
const path = require('path');
const theme = require('./index.js');
const resumeSchema = require('@jsonresume/schema');

// Load the sample resume
const resumeData = JSON.parse(fs.readFileSync(path.join(__dirname, 'resume.json'), 'utf-8'));

// Render and save the resume (async)
(async () => {
    try {
        const html = await theme.render(resumeData);
        resumeSchema.validate(resumeData, function (err, report) {
            if (err) {
                console.error("The resume was invalid:", err);
                return;
            }
            console.log("Resume validated successfully:", report);
        },
            function (err) {
                console.error("The resume was invalid:", err);
            }
        );
        fs.writeFileSync(path.join(__dirname, 'resume.html'), html);
        console.log('✅ Resume rendered successfully!');
        console.log('📄 Output saved to resume.html');
        console.log('🌐 Open resume.html in your browser to view the result');
    } catch (err) {
        console.error('❌ Error rendering resume:', err);
    }
})();