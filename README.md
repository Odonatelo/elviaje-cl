# El Viaje — versión estática para GitHub Pages

Preparación de migración revisada el 9 de noviembre de 2026. No se han modificado DNS ni servicios de Google.

## Construir

Node.js 20 o posterior. Ejecutar `npm ci` y `npm run build`.
Publicar el contenido de `dist/` en la rama de GitHub Pages de un repositorio separado del de Interpretación del Patrimonio.

Las rutas `/`, `/consultoria/`, `/visitantes/` y `/comunidad/` tienen su propio archivo HTML. Se conservan WhatsApp, YouTube y las fuentes externas. No se incluye Express, Cloud Run, GCS, claves, pagos ni autenticación; las cuatro páginas públicas revisadas no los utilizan.

## Conectar el dominio después de verificar el despliegue

1. En Settings → Pages del nuevo repositorio, configurar `www.elviaje.cl` como Custom domain.
2. En Cloudflare, que ya administra los DNS de elviaje.cl, cambiar solo el CNAME de `www` de `el-viaje-por-chile.web.app` a `odonatelo.github.io` y revisar también el dominio raíz y las redirecciones existentes. Conservar MX, TXT y otros subdominios. No sustituir los servidores de NIC Chile.
3. Esperar validación del DNS, certificado y HTTPS, y comprobar las cuatro rutas y sus imágenes.
4. Solo después revisar si los servicios de Google pueden retirarse; pueden ser compartidos por otros proyectos.

YouTube y Google Fonts siguen siendo servicios externos. Migrar el alojamiento no elimina esas dependencias.
