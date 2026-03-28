# Performance Marketing Portfolio

A modern, responsive portfolio website showcasing 3+ years of performance marketing expertise.

## Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Interactive Case Studies**: Filterable project showcase with real metrics and results
- **Smooth Animations**: Modern animations and transitions for enhanced user experience
- **Performance Optimized**: Fast loading with minimal dependencies
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## Sections

1. **Hero Section**: Eye-catching introduction with key performance metrics
2. **About**: Professional background and expertise overview
3. **Skills**: Platform proficiencies and technical capabilities
4. **Case Studies**: Detailed project showcases with measurable results
5. **Contact**: Multi-channel contact options with integrated form

## Technologies Used

- HTML5
- CSS3 (with custom properties and modern layouts)
- Vanilla JavaScript (no frameworks required)
- Font Awesome Icons

## Customization Guide

### 1. Update Personal Information

Edit `index.html`:
- Replace placeholder text in the Hero section with your name/tagline
- Update the About section with your actual bio
- Modify contact information (email, phone, LinkedIn)

### 2. Update Statistics

In the Hero section, change the `data-target` attributes:
```html
<span class="stat-number" data-target="250">0</span> <!-- Your ROAS -->
```

### 3. Add Your Case Studies

Edit the case study cards in `index.html`:
- Change project names and descriptions
- Update metrics (ROAS, CPA, CTR, etc.)
- Modify platform badges
- Update category attributes for filtering

### 4. Customize Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #6366f1;  /* Change to your brand color */
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
}
```

### 5. Add Your Photo

Replace the icon placeholder in the About section:
```html
<div class="about-image">
    <img src="your-photo.jpg" alt="Your Name">
</div>
```

### 6. Connect Contact Form

Integrate with a backend service (optional):
- Use FormSpree, Netlify Forms, or custom backend
- Update the form submission handler in `script.js`

## Deployment Options

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings > Pages
3. Select main branch and /root folder
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Create account at netlify.com
2. Drag and drop your project folder
3. Site deploys automatically

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts for deployment

## Local Development

Simply open `index.html` in your web browser. No build process required!

For live reloading during development, you can use:
- VS Code Live Server extension
- Python: `python -m http.server 8000`
- Node.js: `npx serve`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. Optimize images (use WebP format, compress files)
2. Add lazy loading for images
3. Minify CSS and JS for production
4. Enable caching if using custom server
5. Consider adding a CDN for static assets

## Future Enhancements

- [ ] Add blog section for marketing insights
- [ ] Integrate with Google Analytics
- [ ] Add dark/light mode toggle
- [ ] Create downloadable PDF resume/case studies
- [ ] Add testimonials carousel
- [ ] Integrate with CRM for lead capture
- [ ] Add live chat widget

## License

Feel free to use this template for your own portfolio. Attribution appreciated but not required.

## Support

For questions or issues, please open an issue on GitHub or contact via email.

---

**Built with ❤️ for Performance Marketers**
