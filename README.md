# YC Journey - Startup Accelerator Landing Page

A modern, interactive landing page for YC Journey - a startup accelerator program designed to help entrepreneurs transform their ideas into YC-ready companies.

## 🚀 Features

### ✨ **Interactive UI Components**
- **Cover Component**: Animated text with sparkles and beam effects on hover
- **Resizable Navbar**: Responsive navigation that shrinks on scroll
- **FlipWords Animation**: Smooth vertical text transitions
- **Text Generate Effect**: Typewriter-style text animation with blur effects
- **Infinite Moving Cards**: Continuous testimonial carousel
- **Card Stack**: Interactive testimonial cards with 3D effects
- **Background Animations**: Grid background with spotlight effects

### 🎨 **Design System**
- **Typography**: Inter font family with custom weight utilities
- **Color Scheme**: Purple-focused gradient design with dark theme
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Accessibility**: ARIA labels and semantic HTML structure

### 🛠️ **Tech Stack**
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Aceternity UI** components
- **Lucide React** for icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/yc-journey.git
   cd yc-journey
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Core UI components (shadcn/ui)
│   ├── resizable-navbar-demo.tsx
│   ├── flip-words-demo.tsx
│   ├── text-generate-effect-demo.tsx
│   └── ...
├── pages/               # Page components
│   └── Index.tsx        # Main landing page
├── lib/                 # Utilities and helpers
└── hooks/               # Custom React hooks
```

## 🎯 Components Overview

### **Navbar**
- Responsive design with mobile hamburger menu
- Scroll-responsive behavior (shrinks after 100px scroll)
- YC Journey branding with gradient logo
- Smooth animations and backdrop blur effects

### **Hero Section**
- Animated Cover component with "YC JOURNEY" text
- FlipWords showing rotating taglines
- Text generation effect for description
- Call-to-action buttons with glow effects

### **Features Section**
- Background gradient cards with hover effects
- Icon animations and scale transforms
- Responsive grid layout

### **Testimonials**
- Card stack with 3D rotation effects
- Infinite moving testimonial carousel
- Smooth animations and transitions

## 🎨 Styling & Theming

### **Typography System**
```css
.text-hero          /* Hero titles: clamp(2.5rem, 8vw, 6rem) */
.text-section-title /* Section titles: clamp(2rem, 5vw, 3.5rem) */
.font-light         /* 300 weight */
.font-medium        /* 500 weight */
.font-semibold      /* 600 weight */
.font-bold          /* 700 weight */
.font-extrabold     /* 800 weight */
.font-black         /* 900 weight */
```

### **Color Palette**
- Primary: Purple gradients (`from-purple-500 to-pink-500`)
- Text: White with purple accents
- Background: Dark theme with grid patterns
- Accent: Purple/blue gradients for highlights

## 🔧 Configuration

### **Tailwind Config**
- Inter font family as default
- Custom animation keyframes
- Extended color palette
- Responsive breakpoints

### **Environment**
- TypeScript strict mode enabled
- ESLint configuration
- Vite development server
- Hot module replacement

## 📱 Responsive Design

- **Mobile**: Hamburger menu, stacked layout
- **Tablet**: Optimized spacing and typography
- **Desktop**: Full layout with hover effects
- **Large screens**: Maximum width constraints

## 🚀 Performance

- **Fast loading**: Vite build optimization
- **Lazy loading**: Components loaded on demand
- **Optimized fonts**: Google Fonts with display=swap
- **Minimal bundle**: Tree-shaking enabled

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- **Aceternity UI** for beautiful component library
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for smooth animations
- **Lucide React** for consistent iconography

---

Built with ❤️ for the startup community
# Update trigger
