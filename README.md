# Simple Budget Generator

Aplicación web desarrollada con **React + TypeScript** con generación de documentos desde el frontend, integración con servicios externos y organización modular de lógica mediante hooks y servicios desacoplados.

## 💫 Funcionalidad principal

- Completar un formulario de presupuesto  
- Generar un documento visual en pantalla  
- Descargar el archivo en formato PDF desde el navegador  

Esta funcionalidad es pública y no requiere autenticación.

## 🔐 Funcionalidad técnica (modo restringido)

La aplicación incluye un flujo adicional utilizado para demostración técnica:

- Generación automática del PDF  
- Subida del archivo a **Cloudinary**  
- Obtención de URL pública de visualización y descarga  
- Envío del presupuesto por correo mediante **EmailJS**  

Este flujo está protegido mediante una clave y no forma parte del uso público de la aplicación.

## 🛠️ Tecnologías

- React  
- TypeScript  
- html2pdf.js  
- Cloudinary Upload API  
- EmailJS  
- CSS Modules  
