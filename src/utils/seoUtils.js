import SITE_CONFIG from '../config/siteConfig';

// Utility function to update document title and meta tags
export const updateSEO = (title, description, keywords) => {
  // Update title
  document.title = title || `${SITE_CONFIG.siteName} - Social Media Marketing Services`;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', description || SITE_CONFIG.siteDescription);
  }
  
  // Update meta keywords
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) {
    metaKeywords.setAttribute('content', keywords || SITE_CONFIG.siteKeywords);
  }
  
  // Update Open Graph title
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) {
    ogTitle.setAttribute('content', title || `${SITE_CONFIG.siteName} - Social Media Marketing Services`);
  }
  
  // Update Open Graph description
  const ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) {
    ogDescription.setAttribute('content', description || SITE_CONFIG.siteDescription);
  }
  
  // Update Open Graph URL
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) {
    ogUrl.setAttribute('content', SITE_CONFIG.siteUrl);
  }
};

// Function to create dynamic HTML with config values
export const createDynamicHTML = () => {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="${SITE_CONFIG.logoPath}" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <!-- SEO Meta Tags -->
  <title>${SITE_CONFIG.siteName} - Social Media Marketing Services</title>
  <meta name="description" content="${SITE_CONFIG.siteDescription}" />
  <meta name="keywords" content="${SITE_CONFIG.siteKeywords}" />
  
  <!-- Open Graph Tags -->
  <meta property="og:title" content="${SITE_CONFIG.siteName} - Social Media Marketing Services" />
  <meta property="og:description" content="${SITE_CONFIG.siteDescription}" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="${SITE_CONFIG.siteUrl}" />
  
  <!-- Preload Critical Assets -->
  <link rel="preload" href="${SITE_CONFIG.logoPath}" as="image" />
  ${SITE_CONFIG.banners.map(banner => 
    `<link rel="preload" href="${banner.src}" as="image" ${banner.id === 1 ? 'fetchpriority="high"' : ''} />`
  ).join('\n  ')}
  
  <!-- Preconnect to External Resources -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://images.pexels.com" />
  <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${SITE_CONFIG.googleAnalyticsId}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${SITE_CONFIG.googleAnalyticsId}');
</script>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>`;
};