import fs from 'node:fs';
const routes = ['consultoria', 'visitantes', 'comunidad'];
const html = fs.readFileSync('dist/index.html', 'utf8');
for (const route of routes) {
  fs.mkdirSync(`dist/${route}`, {recursive:true});
  fs.writeFileSync(`dist/${route}/index.html`, html);
}
fs.writeFileSync('dist/404.html', html);
fs.writeFileSync('dist/.nojekyll', '');
if (process.argv.includes('--preview')) fs.rmSync('dist/CNAME', {force:true});
fs.writeFileSync('dist/sitemap.xml', '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + ['', ...routes].map(route => `<url><loc>https://www.elviaje.cl/${route ? route + '/' : ''}</loc></url>`).join('') + '</urlset>\n');
console.log('Generadas las cuatro páginas, el sitemap y el fallback de GitHub Pages.');
