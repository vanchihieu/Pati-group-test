# Sculptique Landing Page - Pixel-Perfect Clone

A pixel-perfect clone of the Sculptique Lymphatic Drainage Capsules product landing page, built as part of the Pati Group Alpha Track e-Commerce Developer practical test.

## 🎯 Project Overview

This project is a faithful recreation of the live e-commerce landing page at [trysculptique.com/products/lymph-cc-select](https://trysculptique.com/products/lymph-cc-select), demonstrating proficiency in:

- **Pixel-accurate UI implementation**
- **Responsive design** across desktop, tablet, and mobile devices
- **Interactive elements** and smooth animations
- **Clean, maintainable code structure**
- **Performance optimization**

## 🚀 How to Run the Project

### Method 1: Direct Browser Open

1. Clone or download this repository
2. Navigate to the project folder
3. Open `index.html` in your web browser
4. That's it! No build process required.

### Method 2: Local Web Server (Recommended)

For the best experience, use a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Method 3: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

## 🛠️ Tech Stack

### Core Technologies

- **HTML5** - Semantic markup for accessibility and SEO
- **CSS3** - Custom styles with modern features
- **Tailwind CSS** (via CDN) - Utility-first CSS framework for rapid styling
- **Vanilla JavaScript** - No frameworks, pure JS for maximum performance

### Libraries & Tools

- **Font Awesome 6.5.1** - Icon library
- **Google Fonts (Inter)** - Typography
- **Intersection Observer API** - Lazy loading and scroll animations

## 📁 Project Structure

```
sculptique-landing-page/
│
├── index.html              # Main HTML file
├── README.md               # This file
│
├── css/
│   └── styles.css         # Custom CSS styles and animations
│
├── js/
│   └── main.js            # Interactive features and functionality
│
└── assets/
    └── images/            # Local images (if any)
```

## ✨ Features Implemented

### Layout & Design

- ✅ Pixel-accurate header with sticky navigation
- ✅ Hero section with product showcase
- ✅ Responsive pricing options with selection states
- ✅ "As Seen In" infinite scrolling logo carousel
- ✅ Problem/symptoms grid with hover effects
- ✅ Educational content sections
- ✅ Ingredient accordion with expand/collapse
- ✅ Customer reviews with ratings
- ✅ Video testimonials gallery
- ✅ FAQ accordion
- ✅ Trust badges and guarantees
- ✅ Multiple CTA buttons
- ✅ Responsive footer

### Interactive Elements

- ✅ Mobile hamburger menu
- ✅ Sticky header on scroll
- ✅ Smooth scroll navigation
- ✅ Accordion functionality (FAQ, Ingredients)
- ✅ Pricing option selection
- ✅ Add to cart with loading states
- ✅ Shopping cart counter
- ✅ Video modal/popup
- ✅ Lazy loading images
- ✅ Fade-in animations on scroll
- ✅ Scroll progress indicator
- ✅ Hover effects and transitions

### Responsive Design

- ✅ **Mobile First** approach (320px - 640px)
- ✅ **Tablet** optimization (641px - 1024px)
- ✅ **Desktop** full layout (1025px+)
- ✅ Touch-friendly interactions
- ✅ Optimized typography scaling
- ✅ Flexible grid systems

### Performance & Accessibility

- ✅ Lazy loading for images
- ✅ Semantic HTML5 elements
- ✅ ARIA labels where appropriate
- ✅ Keyboard navigation support
- ✅ Focus states for accessibility
- ✅ Skip to content link
- ✅ Optimized CSS animations
- ✅ Debounced/throttled scroll events

## 📱 Browser Compatibility

Tested and works on:

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Design Decisions & Assumptions

### Color Scheme

- Primary: `#1a1a1a` (Dark text and buttons)
- Secondary: `#f8f5f0` (Light background sections)
- Accent: `#d4af37` (Gold accents)
- Success: `#10b981` (Trust badges, checkmarks)
- Cream: `#faf8f5` (Alternate background)

### Typography

- Font Family: Inter (via Google Fonts)
- Weights used: 300, 400, 500, 600, 700, 800, 900
- Responsive scaling for headings

### Images

- All images are loaded directly from the original Sculptique CDN
- This ensures pixel-perfect matching with the original
- For production, these should be downloaded and optimized locally

### Assumptions

1. **Backend logic not required** - This is a static front-end only
2. **Cart functionality** - Simulated with local state (no real checkout)
3. **Video embeds** - Placeholder structure (actual video URLs not provided)
4. **Forms** - Client-side validation only (no server submission)
5. **Product variants** - Single product with quantity options
6. **Analytics** - Not implemented (would add GA4/GTM in production)

## 🔧 Customization

### Changing Colors

Edit the Tailwind config in `index.html`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a", // Your primary color
        secondary: "#f8f5f0", // Your secondary color
        // ... etc
      },
    },
  },
};
```

### Adding New Sections

1. Add HTML structure in `index.html`
2. Add custom styles in `css/styles.css`
3. Add interactivity in `js/main.js`

## 📝 Development Notes

### AI Tools Used

This project was developed with assistance from AI tools (GitHub Copilot, Claude) for:

- Rapid prototyping and structure
- Code optimization and best practices
- Accessibility improvements
- Cross-browser compatibility checks

All AI-generated code was reviewed, tested, and refined to ensure quality and understanding.

### What I Learned

- Pixel-perfect implementation techniques
- Advanced CSS Grid and Flexbox layouts
- Intersection Observer API for performance
- Tailwind CSS utility-first approach
- Accessibility best practices
- Mobile-first responsive design patterns

## 🚧 Future Enhancements

If this were a production project, I would add:

- [ ] Backend integration with API
- [ ] Real shopping cart with localStorage/sessionStorage
- [ ] Product variant selection (size, quantity)
- [ ] Email capture forms with validation
- [ ] Analytics integration (GA4, GTM)
- [ ] A/B testing capability
- [ ] SEO optimization (meta tags, structured data)
- [ ] Image optimization and WebP format
- [ ] Service worker for offline capability
- [ ] Internationalization (i18n) support

## 📧 Contact

**Developer:** [Your Name]  
**Email:** [Your Email]  
**GitHub:** [Your GitHub]  
**Portfolio:** [Your Portfolio URL]

## 📄 License

This is a test project for educational and evaluation purposes only.  
Original design and content © Sculptique™

---

**Note:** This is a front-end clone created for the Pati Group Alpha Track practical test. It is not affiliated with or endorsed by Sculptique™.
