const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

// Register Handlebars helpers
Handlebars.registerHelper('formatDate', function(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
});

Handlebars.registerHelper('dateRange', function(startDate, endDate) {
    const start = startDate ? Handlebars.helpers.formatDate(startDate) : '';
    const end = endDate ? Handlebars.helpers.formatDate(endDate) : 'Present';
    return start + ' - ' + end;
});

Handlebars.registerHelper('socialIcon', function(network) {
    const icons = {
        'linkedin': 'bi-linkedin',
        'github': 'bi-github',
        'twitter': 'bi-twitter-x',
        'facebook': 'bi-facebook',
        'instagram': 'bi-instagram',
        'youtube': 'bi-youtube',
        'pinterest': 'bi-pinterest',
        'reddit': 'bi-reddit',
        'stackoverflow': 'bi-stack-overflow',
        'gitlab': 'bi-gitlab',
        'medium': 'bi-medium',
        'dev': 'bi-code-slash',
        'dribbble': 'bi-dribbble',
        'behance': 'bi-behance',
        'codepen': 'bi-code-square',
        'email': 'bi-envelope-fill',
        'website': 'bi-globe'
    };
    
    const network_lower = network.toLowerCase();
    return icons[network_lower] || 'bi-link-45deg';
});

Handlebars.registerHelper('toLowerCase', function(str) {
    return str ? str.toLowerCase() : '';
});

Handlebars.registerHelper('phoneFormat', function(phone) {
    if (!phone) return '';
    // Remove all non-digits
    const cleaned = phone.replace(/\D/g, '');
    // Format as (XXX) XXX-XXXX if US number
    if (cleaned.length === 10) {
        return `(${cleaned.slice(0,3)}) ${cleaned.slice(3,6)}-${cleaned.slice(6)}`;
    }
    return phone;
});

function render(resume) {
    // Load CSS file
    const css = fs.readFileSync(path.join(__dirname, 'style.css'), 'utf-8');
    
    // Load template
    const template = fs.readFileSync(path.join(__dirname, 'resume.hbs'), 'utf-8');
    
    // Compile template
    const compiledTemplate = Handlebars.compile(template);
    
    // Render HTML with resume data
    return compiledTemplate({
        css: css,
        resume: resume
    });
}

module.exports = {
    render: render
};