// Site Configuration - Change all settings from here
const SITE_CONFIG = {
  // Website Information
  siteName: "InstaGuru",
  siteDescription: "Get real followers, subscribers & OTT subscriptions at the lowest prices. Trusted by thousands for Instagram, YouTube, Facebook and more.",
  siteKeywords: "social media marketing, instagram followers, youtube subscribers, facebook likes, social media services",
  siteUrl: "https://instaguru.com",
  
  // Contact Information
  supportEmail: "help@instaguru.in",
  supportPhone: "+91 82102 20189",
  whatsappNumber: "918210220189", // Without + sign for WhatsApp links
  
  // Payment Configuration
  upiId: "insta999guru@ibl",
  minimumAmount: 50,
  maximumAmount: 2500,
  
  // Analytics
  googleAnalyticsId: "G-C7CC3P7X8Z",
  
  // Banners (add or remove banner URLs as needed)
  banners: [
    {
      id: 1,
      src: "/banner/banner-1.webp",
      alt: "Banner 1",
      width: 1000,
      height: 367
    },
    {
      id: 2,
      src: "/banner/banner-2.webp",
      alt: "Banner 2",
      width: 1000,
      height: 367
    },
    {
      id: 3,
      src: "/banner/banner-3.webp",
      alt: "Banner 3",
      width: 1000,
      height: 367
    }
  ],
  
  // Logo
  logoPath: "/ic/logo.svg",
  
  // Default wallet amount for new users
  welcomeBonus: 10,
  
  // Referral system
  referralBonus: 10,
  
  // Social sharing message template
  referralMessage: (link) => `🔥 Get real followers, subscribers & OTT subscriptions at the lowest prices!

🎁 Use my referral link to join ${SITE_CONFIG.siteName} and get ₹${SITE_CONFIG.referralBonus} bonus instantly! 🤑  
👇 Click now and grab the deal:
${link}`
};

export default SITE_CONFIG;