# JSON Resume - Bootstrap 5 Professional Theme

A modern, professional theme for [JSON Resume](https://jsonresume.org) built with Bootstrap 5. Features a sticky sidebar with profile information and a clean, responsive layout.

## Features

- 🎨 **Modern Bootstrap 5 Design** - Clean and professional appearance
- 📱 **Fully Responsive** - Looks great on all devices
- 🎯 **Sticky Sidebar** - Profile, contact, and skills always visible
- 🌈 **Gradient Sidebar** - Eye-catching purple gradient design
- 📄 **Complete Sections** - Supports all JSON Resume schema sections
- 🖨️ **Print-Friendly** - Optimized styles for printing
- ⚡ **Performance** - Lightweight and fast-loading

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create your `resume.json` file following the [JSON Resume schema](https://jsonresume.org/schema/)

3. Test the theme locally:
```bash
node test.js
```

4. Open `resume.html` in your browser

## Usage with Resume CLI

If you have the [resume-cli](https://github.com/jsonresume/resume-cli) installed:

```bash
# Preview the theme
resume serve --theme .

# Export to HTML
resume export resume.html --theme .
```

## Customization

### Colors
Edit the CSS variables in `style.css`:

```css
:root {
    --sidebar-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --primary-color: #667eea;
    --secondary-color: #764ba2;
}
```

### Sections
The theme supports all standard JSON Resume sections:
- Basics (Profile, Contact, Social)
- Work Experience
- Volunteer
- Education
- Awards
- Certificates
- Publications
- Skills
- Languages
- Interests
- References
- Projects

## Structure

```
jsonresume-theme-bootstrap5-professional/
├── index.js        # Theme render function
├── resume.hbs      # Handlebars template
├── style.css       # Theme styles
├── package.json    # Dependencies
├── resume.json     # Sample resume data
├── test.js         # Test script
└── README.md       # This file
```

## Sample Resume

A comprehensive `resume.json` example is included to demonstrate all supported sections and features.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## Credits

Built with:
- [Bootstrap 5](https://getbootstrap.com)
- [Bootstrap Icons](https://icons.getbootstrap.com)
- [Handlebars](https://handlebarsjs.com)
- [JSON Resume](https://jsonresume.org)