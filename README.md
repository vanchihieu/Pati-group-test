# Sculptique Landing Page - Pixel-Perfect Implementation

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

## 📖 Giới thiệu / Introduction

**[Tiếng Việt]**

Dự án này là bản sao tái tạo hoàn hảo của trang landing page sản phẩm Lymphatic Drainage Capsules của Sculptique™, được xây dựng như một phần của bài test thực tế cho vị trí e-Commerce Developer tại Pati Group Alpha Track.

**[English]**

A pixel-perfect recreation of the Sculptique Lymphatic Drainage Capsules product landing page, built as part of the Pati Group Alpha Track e-Commerce Developer practical assessment.

**Original Site:** [trysculptique.com/products/lymph-cc-select](https://trysculptique.com/products/lymph-cc-select)

## 🎯 Mục tiêu dự án / Project Goals

### Kỹ năng được thể hiện / Skills Demonstrated

- ✅ **Pixel-Perfect UI Implementation** - Tái tạo giao diện chính xác đến từng pixel
- ✅ **Responsive Design** - Tối ưu cho mọi thiết bị (desktop, tablet, mobile)
- ✅ **Interactive Elements** - Các thành phần tương tác mượt mà
- ✅ **Clean Code Architecture** - Cấu trúc code rõ ràng, dễ bảo trì
- ✅ **Performance Optimization** - Tối ưu hiệu năng tải trang
- ✅ **Accessibility Standards** - Tuân thủ chuẩn WCAG cho người khuyết tật

## 🚀 Cách chạy dự án / How to Run

### Phương pháp 1: Mở trực tiếp trên trình duyệt

```bash
# 1. Clone repository
git clone [repository-url]

# 2. Di chuyển vào thư mục dự án
cd sculptique-landing-page

# 3. Mở file index.html bằng trình duyệt
# Cách 1: Double-click file index.html
# Cách 2: Kéo thả file vào trình duyệt
```

### Phương pháp 2: Sử dụng Local Server (Khuyên dùng)

**Python:**

```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

**Node.js:**

```bash
# Cài đặt http-server globally
npm install -g http-server

# Chạy server
http-server -p 8000
```

**PHP:**

```bash
php -S localhost:8000
```

Sau đó truy cập: `http://localhost:8000`

### Phương pháp 3: VS Code Live Server

1. Cài đặt extension "Live Server" trong VS Code
2. Click phải vào file `index.html`
3. Chọn "Open with Live Server"
4. Trình duyệt sẽ tự động mở tại `http://127.0.0.1:5500`

## 🛠️ Công nghệ sử dụng / Tech Stack

### Core Technologies

| Technology               | Version   | Purpose                                 |
| ------------------------ | --------- | --------------------------------------- |
| **HTML5**                | -         | Semantic markup, SEO-friendly structure |
| **CSS3**                 | -         | Custom styling, animations, transitions |
| **Tailwind CSS**         | 3.x (CDN) | Utility-first CSS framework             |
| **JavaScript (Vanilla)** | ES6+      | Interactive features, DOM manipulation  |

### Libraries & CDN Resources

| Library                       | Version | Usage                           |
| ----------------------------- | ------- | ------------------------------- |
| **Font Awesome**              | 6.5.1   | Icon library                    |
| **Google Fonts (Inter)**      | -       | Typography system               |
| **Intersection Observer API** | Native  | Lazy loading, scroll animations |

## 📁 Cấu trúc dự án / Project Structure

```
sculptique-landing-page/
│
├── index.html                 # Main HTML file - Trang chính
├── README.md                  # Documentation - Tài liệu hướng dẫn
│
├── css/
│   └── styles.css            # Custom CSS - Styles tùy chỉnh & animations
│
├── js/
│   └── main.js               # JavaScript logic - Các tính năng tương tác
│
└── assets/
    └── images/               # Local images - Hình ảnh (nếu có)
```

### Chi tiết các file chính / Main Files Overview

- **`index.html`** (1413 lines) - HTML structure với semantic markup
- **`css/styles.css`** - Custom animations, transitions, và responsive overrides
- **`js/main.js`** - Interactive features: menu toggle, cart, accordions, modals

## ✨ Tính năng đã triển khai / Features Implemented

### 🎨 Layout & Design Components

<table>
<tr>
<td width="50%">

**Header & Navigation**

- ✅ Sticky header on scroll
- ✅ Mobile hamburger menu
- ✅ Smooth scroll navigation
- ✅ Cart counter badge

**Hero Section**

- ✅ Product showcase
- ✅ Trust badges
- ✅ CTA buttons

**Pricing Section**

- ✅ Multiple options
- ✅ Selection states
- ✅ Discount badges
- ✅ Best value highlights

</td>
<td width="50%">

**Content Sections**

- ✅ "As Seen In" carousel
- ✅ Symptom/problem grid
- ✅ Educational content
- ✅ Ingredient accordion
- ✅ Customer reviews
- ✅ Video testimonials
- ✅ FAQ accordion

**Footer**

- ✅ Links & navigation
- ✅ Social media
- ✅ Legal information

</td>
</tr>
</table>

### ⚡ Interactive Features

| Feature           | Implementation                    | Status  |
| ----------------- | --------------------------------- | ------- |
| Mobile Menu       | Toggle with smooth animation      | ✅ Done |
| Accordion         | FAQ & Ingredients expand/collapse | ✅ Done |
| Pricing Selection | Click to select package option    | ✅ Done |
| Add to Cart       | Button with loading state         | ✅ Done |
| Cart Counter      | Updates dynamically               | ✅ Done |
| Video Modal       | Popup player (placeholder)        | ✅ Done |
| Lazy Loading      | Images load on scroll             | ✅ Done |
| Scroll Animations | Fade-in effects                   | ✅ Done |
| Scroll Progress   | Top progress indicator            | ✅ Done |
| Hover Effects     | Smooth transitions                | ✅ Done |

### 📱 Responsive Design Approach

**Mobile First Strategy**

| Breakpoint  | Screen Size    | Layout Adjustments                               |
| ----------- | -------------- | ------------------------------------------------ |
| **Mobile**  | 320px - 640px  | Single column, stacked elements, touch-optimized |
| **Tablet**  | 641px - 1024px | 2-column grids, adjusted spacing                 |
| **Desktop** | 1025px+        | Full multi-column layout, hover effects          |

**Key Features:**

- ✅ Flexible grid system
- ✅ Touch-friendly tap targets (min 44x44px)
- ✅ Responsive typography (clamp, rem units)
- ✅ Optimized images for different screen sizes
- ✅ Hamburger menu on mobile/tablet

### 🚀 Performance & Accessibility

**Performance Optimizations:**

| Technique            | Implementation                  | Impact                  |
| -------------------- | ------------------------------- | ----------------------- |
| Lazy Loading         | Images load on viewport entry   | Faster initial load     |
| Debounced Events     | Throttled scroll listeners      | Reduced CPU usage       |
| CSS Animations       | Hardware-accelerated transforms | Smooth 60fps animations |
| Minimal Dependencies | Vanilla JS, no heavy frameworks | Small bundle size       |
| CDN Resources        | Font Awesome, Google Fonts      | Fast delivery           |

**Accessibility Features (WCAG 2.1 AA):**

- ✅ Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- ✅ ARIA labels and roles where necessary
- ✅ Keyboard navigation support (Tab, Enter, Escape)
- ✅ Focus states visible for all interactive elements
- ✅ Skip to content link for screen readers
- ✅ Alt text for images (where applicable)
- ✅ Color contrast ratios meet AA standards
- ✅ Responsive text sizing (no absolute pixels)

## 🌐 Trình duyệt hỗ trợ / Browser Compatibility

Đã được kiểm tra và hoạt động tốt trên:

| Browser           | Version       | Status             | Notes                       |
| ----------------- | ------------- | ------------------ | --------------------------- |
| **Chrome**        | Latest (120+) | ✅ Fully Supported | Primary development browser |
| **Edge**          | Latest (120+) | ✅ Fully Supported | Chromium-based              |
| **Firefox**       | Latest (121+) | ✅ Fully Supported | All features working        |
| **Safari**        | Latest (17+)  | ✅ Fully Supported | Desktop & iOS               |
| **Opera**         | Latest        | ✅ Fully Supported | Chromium-based              |
| **Chrome Mobile** | Latest        | ✅ Fully Supported | Android devices             |
| **Safari Mobile** | Latest        | ✅ Fully Supported | iOS devices                 |

**Minimum Requirements:**

- ES6+ JavaScript support
- CSS Grid & Flexbox
- Intersection Observer API

## 🎨 Design System & Assumptions

### Color Palette

```css
/* Brand Colors */
--primary: #1a1a1a; /* Dark text, buttons */
--secondary: #f8f5f0; /* Light background sections */
--accent: #d4af37; /* Gold accents */
--success: #10b981; /* Trust badges, checkmarks */
--cream: #faf8f5; /* Alternate background */

/* Neutral Scale */
--gray-50: #f9fafb;
--gray-100: #f3f4f6;
--gray-900: #111827;
```

### Typography System

**Font Family:** Inter (Google Fonts)

| Style     | Weight  | Size Range      | Usage           |
| --------- | ------- | --------------- | --------------- |
| Heading 1 | 800-900 | 2.5rem - 4rem   | Hero titles     |
| Heading 2 | 700-800 | 2rem - 3rem     | Section headers |
| Heading 3 | 600-700 | 1.5rem - 2rem   | Subsections     |
| Body      | 400     | 1rem - 1.125rem | Paragraphs      |
| Small     | 300-400 | 0.875rem        | Captions, notes |

### Spacing & Layout

- **Container max-width:** 1280px
- **Grid gap:** 1rem - 2rem (responsive)
- **Padding:** 1rem (mobile) → 2rem (desktop)
- **Border radius:** 0.5rem (standard), 0.75rem (large)

### 📦 Asset Management

**Images:**

- Source: Loaded directly from Sculptique CDN
- Reasoning: Ensures pixel-perfect matching with original
- Production note: Should be downloaded and optimized locally
- Formats: JPG (photos), PNG (logos), WebP (recommended for production)

### ⚠️ Project Assumptions & Limitations

| Aspect           | Assumption                  | Reason                           |
| ---------------- | --------------------------- | -------------------------------- |
| **Backend**      | Not implemented             | Front-end focused assessment     |
| **Cart**         | Simulated with local state  | No real checkout required        |
| **Payment**      | UI only, no integration     | Demonstration purposes           |
| **Videos**       | Placeholder structure       | Actual URLs not provided         |
| **Forms**        | Client-side validation only | No server submission             |
| **Analytics**    | Not implemented             | Would add GA4/GTM in production  |
| **Product Data** | Hardcoded in HTML           | Would fetch from API in real app |

## 🔧 Customization Guide / Hướng dẫn tùy chỉnh

### Thay đổi màu sắc / Changing Colors

Chỉnh sửa Tailwind config trong `index.html`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a", // Màu chính
        secondary: "#f8f5f0", // Màu phụ
        accent: "#d4af37", // Màu nhấn (vàng)
        success: "#10b981", // Màu thành công
        cream: "#faf8f5", // Màu kem
      },
    },
  },
};
```

### Thêm section mới / Adding New Sections

1. **Thêm HTML** trong `index.html`:

```html
<section id="new-section" class="py-16 bg-secondary">
  <div class="container mx-auto px-4">
    <!-- Your content here -->
  </div>
</section>
```

2. **Thêm styles tùy chỉnh** trong `css/styles.css`:

```css
#new-section {
  /* Custom styles */
}
```

3. **Thêm JavaScript** trong `js/main.js`:

```javascript
// Interactive features
document.getElementById("new-section").addEventListener("click", function () {
  // Your logic
});
```

### Cấu hình Font

Thay đổi font family trong `index.html`:

```html
<link
  href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;600;700&display=swap"
  rel="stylesheet"
/>
```

Cập nhật Tailwind config:

```javascript
fontFamily: {
  sans: ['Your Font', 'sans-serif'],
}
```

## � Kinh nghiệm & Bài học / Development Notes & Learning

### 📚 Kiến thức học được / Key Learnings

**Technical Skills:**

- ✅ Pixel-perfect implementation từ reference design
- ✅ Advanced CSS Grid và Flexbox layouts
- ✅ Intersection Observer API cho lazy loading
- ✅ Tailwind CSS utility-first methodology
- ✅ Vanilla JavaScript DOM manipulation
- ✅ Mobile-first responsive design patterns

**Best Practices:**

- ✅ Semantic HTML structure
- ✅ Accessibility (WCAG standards)
- ✅ Performance optimization techniques
- ✅ Code organization và maintainability
- ✅ Browser compatibility testing
- ✅ Git workflow và version control

### 🎯 Challenges & Solutions

| Challenge              | Solution                          | Learning                        |
| ---------------------- | --------------------------------- | ------------------------------- |
| Sticky header behavior | Pure CSS + minimal JS             | position: sticky considerations |
| Smooth scroll          | CSS scroll-behavior + JS fallback | Progressive enhancement         |
| Carousel infinite loop | Transform + transition timing     | Animation performance           |
| Mobile menu animation  | CSS transitions + JS toggle       | Smooth UX patterns              |
| Lazy loading images    | Intersection Observer             | Modern browser APIs             |

## 🚧 Cải tiến tương lai / Future Enhancements

Nếu đây là dự án production thực tế, tôi sẽ bổ sung:

### Phase 1: Core Features

- [ ] Backend API integration (REST/GraphQL)
- [ ] Real shopping cart with localStorage persistence
- [ ] Product variant selection (size, color, quantity)
- [ ] Email capture forms với backend validation
- [ ] Payment gateway integration (Stripe, PayPal)

### Phase 2: Advanced Features

- [ ] User authentication & accounts
- [ ] Order tracking system
- [ ] Wishlist functionality
- [ ] Product reviews & ratings system
- [ ] Live chat support widget

### Phase 3: Optimization & Analytics

- [ ] Analytics integration (GA4, GTM, Meta Pixel)
- [ ] A/B testing capability (Google Optimize)
- [ ] SEO optimization (meta tags, structured data, sitemap)
- [ ] Image optimization (WebP, AVIF formats)
- [ ] Service worker for offline capability
- [ ] Progressive Web App (PWA) features

### Phase 4: Scalability

- [ ] Internationalization (i18n) support
- [ ] Multi-currency support
- [ ] CDN integration for assets
- [ ] Server-side rendering (SSR) with Next.js
- [ ] Automated testing (Jest, Cypress)
- [ ] CI/CD pipeline (GitHub Actions)

## � Performance Metrics

### Lighthouse Scores (Target)

| Metric         | Score | Status       |
| -------------- | ----- | ------------ |
| Performance    | 90+   | 🟢 Excellent |
| Accessibility  | 95+   | 🟢 Excellent |
| Best Practices | 90+   | 🟢 Excellent |
| SEO            | 90+   | 🟢 Excellent |

### Load Time Metrics

- **First Contentful Paint (FCP):** < 1.8s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Time to Interactive (TTI):** < 3.8s
- **Total Bundle Size:** ~50KB (excluding images)

## 📸 Screenshots

### Desktop View

_Full-width layout với multi-column grid_

### Tablet View

_Responsive 2-column layout_

### Mobile View

_Single column, touch-optimized interface_


---

<div align="center">

**Made with ❤️ for Pati Group Alpha Track Assessment**

_This is a front-end implementation created as part of an e-Commerce Developer practical test._  
_Not affiliated with or endorsed by Sculptique™._

---

### ⭐ Project Stats

![HTML](https://img.shields.io/badge/HTML-1413_lines-orange)
![CSS](https://img.shields.io/badge/CSS-Custom_Animations-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_First-green)

**Last Updated:** January 2026

</div>
