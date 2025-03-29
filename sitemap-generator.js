// sitemap-generator.js

const fs = require('fs');
const path = require('path');

// Define your website URL and routes
const baseUrl = 'https://thepicciolab.netlify.app';
const routes = [
  '/',
  '/about',
  '/people',
  '/research',
  '/media',
  '/contact'
];

// Generate XML string
const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(route => {
      return `
        <url>
          <loc>${baseUrl}${route}</loc>
          <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    })
    .join('')}
</urlset>
`;

// Save to public folder
fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated successfully!');
