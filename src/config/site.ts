export const siteConfig = {
  name: "YC Journey",
  description: "Transform your startup idea into a YC-ready company with our proven accelerator program.",
  url: "https://ycjourney.com",
  ogImage: "https://ycjourney.com/og-image.jpg",
  keywords: [
    "startup accelerator",
    "Y Combinator",
    "entrepreneurship",
    "startup program",
    "business acceleration",
    "venture capital",
    "startup mentorship",
    "YC preparation"
  ],
  creator: "YC Journey Team",
  
  // Navigation
  navigation: {
    main: [
      { name: "Program", href: "/program" },
      { name: "Mentors", href: "/mentors" },
      { name: "Success Stories", href: "/success-stories" },
      { name: "Pricing", href: "/pricing" },
    ],
    footer: {
      company: [
        { name: "About", href: "/about" },
        { name: "Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
      ],
      support: [
        { name: "Help Center", href: "/help" },
        { name: "Contact", href: "/contact" },
        { name: "Status", href: "/status" },
        { name: "Terms", href: "/terms" },
      ],
      resources: [
        { name: "Blog", href: "/blog" },
        { name: "Newsletter", href: "/newsletter" },
        { name: "Events", href: "/events" },
        { name: "Community", href: "/community" },
      ],
    },
  },

  // Social Media
  social: {
    twitter: "https://twitter.com/ycjourney",
    linkedin: "https://linkedin.com/company/ycjourney",
    github: "https://github.com/yourusername/ycjourney",
    email: "hello@ycjourney.com",
  },

  // Analytics
  analytics: {
    googleAnalyticsId: process.env.VITE_GOOGLE_ANALYTICS_ID,
    mixpanelToken: process.env.VITE_MIXPANEL_TOKEN,
  },

  // Features
  features: {
    newsletter: true,
    blog: true,
    analytics: false, // Set to true when ready
    darkMode: true,
  },
}; 