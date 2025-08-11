# JSON Resume - Bootstrap 5 Professional Theme

A sophisticated, professional theme for [JSON Resume](https://jsonresume.org) built with Bootstrap 5. Features a modern sticky sidebar layout with a clean, corporate-friendly design perfect for senior-level positions.

## 🎨 Features

- **🏢 Professional Design** - Corporate-friendly navy and blue color scheme
- **📱 Fully Responsive** - Optimized for all devices and screen sizes
- **📌 Sticky Sidebar** - Profile information, contact details, and social links always visible
- **👔 Multi-Role Support** - Display multiple positions within the same company with timeline visualization
- **🎯 Skills Organization** - Categorized skills section with proficiency levels
- **🖨️ Print-Optimized** - Professional appearance in both digital and print formats
- **♿ Accessible** - High contrast ratios and screen reader friendly
- **🔧 ATS-Friendly** - Clean structure and typography for Applicant Tracking Systems
- **🌐 Modern Typography** - Inter font family for excellent readability

## 📸 Preview

The theme includes:
- **Sidebar**: Profile image, contact information, social links, languages, and interests
- **Main Content**: Professional summary, work experience, education, projects, skills, certifications, and more
- **Multi-Role Timeline**: Visual progression for multiple roles at the same company
- **Skills Categories**: Organized by expertise area with proficiency badges

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/jsonresume-theme-bootstrap5-professional.git
cd jsonresume-theme-bootstrap5-professional

# Install dependencies
npm install
```

### Usage

1. **Create your resume data**: Edit `resume.json` following the [JSON Resume schema](https://jsonresume.org/schema/)

2. **Test locally**:
   ```bash
   node test.js
   ```
   This generates `resume.html` which you can open in your browser.

3. **Use with Resume CLI** (if installed):
   ```bash
   # Preview the theme
   resume serve --theme .
   
   # Export to HTML
   resume export resume.html --theme .
   ```

## 💼 Multi-Role Company Support

This theme supports displaying multiple roles within the same company:

```json
{
  "work": [
    {
      "name": "Company Name",
      "url": "https://company.com",
      "roles": [
        {
          "position": "Senior Developer",
          "startDate": "2020-01-01",
          "summary": "Current role description...",
          "highlights": ["Achievement 1", "Achievement 2"]
        },
        {
          "position": "Developer",
          "startDate": "2018-01-01",
          "endDate": "2019-12-31",
          "summary": "Previous role description...",
          "highlights": ["Achievement 1", "Achievement 2"]
        }
      ]
    }
  ]
}
```

## 🎨 Customization

### Color Scheme
Edit the CSS variables in `style.css`:

```css
:root {
    --sidebar-bg: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
    --primary-color: #2c3e50;
    --secondary-color: #34495e;
    --accent-color: #3498db;
    --text-dark: #2c3e50;
    --bg-light: #f8f9fa;
}
```

### Sections Supported
- ✅ **Basics** - Profile, contact, social media
- ✅ **Work Experience** - Single or multi-role support
- ✅ **Volunteer Experience** - Community involvement
- ✅ **Education** - Academic background
- ✅ **Awards** - Recognition and achievements
- ✅ **Certifications** - Professional certifications
- ✅ **Publications** - Articles, papers, blogs
- ✅ **Skills** - Categorized with proficiency levels
- ✅ **Languages** - Language proficiencies
- ✅ **Interests** - Personal interests and hobbies
- ✅ **References** - Professional references
- ✅ **Projects** - Personal and professional projects

## 📁 Project Structure

```
jsonresume-theme-bootstrap5-professional/
├── index.js          # Theme render function with Handlebars helpers
├── resume.hbs        # Handlebars template with Bootstrap 5 structure
├── style.css         # Professional CSS styling
├── package.json      # Theme configuration and dependencies
├── resume.json       # Sample resume data
├── test.js           # Local testing script
├── .gitignore        # Git ignore file
└── README.md         # This documentation
```

## 🛠️ Development

### Key Files

- **`index.js`**: Contains the render function and Handlebars helpers for date formatting, social icons, etc.
- **`resume.hbs`**: Main template with Bootstrap 5 grid layout and responsive design
- **`style.css`**: Professional styling with CSS custom properties for easy customization
- **`resume.json`**: Sample data demonstrating all supported sections

### Handlebars Helpers

The theme includes several custom helpers:
- `formatDate`: Formats dates as "Jan 2020"
- `dateRange`: Creates date ranges like "Jan 2020 - Present"
- `socialIcon`: Maps social networks to Bootstrap icons
- `phoneFormat`: Formats phone numbers consistently

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE11 (basic support)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+ (4-column sidebar, full layout)
- **Tablet**: 768px-1199px (3-column sidebar, stacked on mobile)
- **Mobile**: <768px (Single column, sidebar becomes header)

## 🖨️ Print Styles

The theme includes optimized print styles:
- Removes shadows and gradients
- Adjusts colors for better print contrast
- Optimizes layout for standard paper sizes
- Maintains professional appearance

## 📈 Performance

- **Lightweight**: Minimal custom CSS
- **Fast Loading**: Uses system fonts as fallbacks
- **CDN Assets**: Bootstrap and icons loaded from CDN
- **Optimized Images**: Responsive image handling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details.

## 🙏 Credits

Built with:
- [Bootstrap 5](https://getbootstrap.com) - UI framework
- [Bootstrap Icons](https://icons.getbootstrap.com) - Icon library
- [Handlebars](https://handlebarsjs.com) - Templating engine
- [Inter Font](https://fonts.google.com/specimen/Inter) - Typography
- [JSON Resume](https://jsonresume.org) - Resume standard

## 📞 Support

If you encounter any issues or have questions:
1. Check the [JSON Resume documentation](https://jsonresume.org/getting-started/)
2. Review the sample `resume.json` for proper formatting
3. Submit an issue on GitHub

---

**Made with ❤️ for the JSON Resume community**