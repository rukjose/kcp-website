# Kigali Citizens Polyclinic Website

A modern, responsive website for Kigali Citizens Polyclinic (KCP) located in Remera, Kigali, Rwanda. This website showcases medical services, provides information about the clinic, and enables easy appointment booking.

## 🏥 About

Kigali Citizens Polyclinic offers comprehensive healthcare services across multiple specialties including:
- Internal Medicine
- Pediatrics
- Gynecology & Obstetrics
- Dental Services
- General Surgery
- ENT (Ear, Nose, Throat)
- Radiology & Imaging
- Laboratory Services

## 📁 Project Structure

```
kcp/
├── index.html          # Main HTML file (clean, semantic structure)
├── css/
│   └── styles.css     # Custom CSS (animations, variables, utilities)
├── js/
│   └── main.js        # JavaScript for interactions (mobile menu, smooth scroll)
├── images/            # Image assets folder (currently using CDN)
├── README.md          # Project documentation
└── home.html          # Original file (backup - can be removed)
```

## 🎨 Design Features

### Color Scheme
- **Primary Color**: `#4B0082` (Purple) - Professional, trustworthy
- **Accent Color**: `#32CD32` (Lime Green) - Fresh, health-focused
- **Supporting Colors**: Various shades of green and purple for depth

### Typography
- **Headings**: Roboto (Google Fonts)
- **Body Text**: Lato (Google Fonts)
- Clean, readable, modern font pairing

### Animations
- Floating medical icons
- Fade-in-up transitions
- Smooth zoom effects
- Pulse animations
- Gradient shifts

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A web server (for local development: Live Server, Python SimpleHTTPServer, etc.)

### Installation

1. **Clone or download the project**
   ```bash
   cd /path/to/kcp
   ```

2. **Open with a local server**
   
   **Option A: Using Python**
   ```bash
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser

   **Option B: Using Node.js http-server**
   ```bash
   npx http-server -p 8000
   ```

   **Option C: Using VS Code Live Server**
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

3. **Access the website**
   - Open your browser and navigate to the appropriate URL
   - The site should load with all styles and functionality

## 🔧 Customization

### Updating Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
  --accent-color: #32CD32;        /* Primary green */
  --primary-color: #4B0082;       /* Primary purple */
  --dark-text-color: #333333;     /* Main text */
  /* ... more variables */
}
```

### Updating Content
- Edit `index.html` to change text, images, and structure
- All content is semantic HTML5 with Tailwind CSS classes

### Adding Images
1. Place images in the `images/` folder
2. Update image `src` attributes in `index.html`
3. Currently using Cloudflare CDN for images

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Features:
- Mobile-first approach
- Hamburger menu for mobile devices
- Flexible grid layouts
- Touch-friendly buttons and links

## 🔗 External Dependencies

### CDN Resources
- **Tailwind CSS**: `https://cdn.tailwindcss.com`
- **Font Awesome**: `https://kit.fontawesome.com/8e98006f77.js`
- **Google Fonts**: Roboto & Lato families

### Notes
- All external resources are loaded via CDN
- For production, consider downloading and hosting locally
- This reduces external dependencies and improves load times

## 📞 Contact Information

**Kigali Citizens Polyclinic**
- **Address**: KG 176 St, 4, Remera, Gasabo, Kigali, Rwanda
- **Phone**: 078 842 5041 / 079 923 180
- **Appointment Booking**: https://www.ubuzima.digital/

## 🛠️ Development

### File Organization
- **HTML**: Semantic, accessible markup
- **CSS**: Modular, reusable styles with CSS variables
- **JavaScript**: Vanilla JS, no framework dependencies

### Best Practices Implemented
- ✅ Semantic HTML5
- ✅ Mobile-first responsive design
- ✅ Accessible navigation
- ✅ Optimized animations
- ✅ Clean, maintainable code
- ✅ SEO-friendly meta tags
- ✅ Fast loading times

## 📝 License

© 2026 Kigali Citizens Polyclinic Ltd. All rights reserved.

## 🔄 Version History

### v2.0.0 - Current (Reorganized)
- Separated HTML, CSS, and JavaScript into distinct files
- Removed embedded styles and third-party code
- Created modular, maintainable structure
- Added comprehensive documentation

### v1.0.0 - Original
- Single-file HTML with embedded styles
- All-in-one structure

---

**Need Help?** Contact the development team or refer to the inline code comments for detailed explanations.
