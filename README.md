# GifsApp

Aplicación web desarrollada con **Angular 22** para buscar y visualizar GIFs utilizando la API de Giphy.  
El proyecto tiene fines educativos y está pensado para practicar los conceptos fundamentales de Angular: componentes, servicios, enrutamiento, manejo de estado con signals, llamadas HTTP, formularios reactivos y almacenamiento local.

## 🚀 Características principales

- **GIFs en tendencia** – Muestra una lista de GIFs populares obtenidos desde Giphy.
- **Búsqueda de GIFs** – Permite buscar GIFs por palabra clave mediante la API de Giphy.
- **Historial de búsquedas** – Cada término buscado se guarda automáticamente en el LocalStorage y se muestra en el menú lateral como enlace de navegación.
- **Navegación SPA con rutas anidadas** – Uso del router de Angular con carga perezosa (lazy loading) de módulos.
- **Sidebar lateral fijo** – Menú con opciones de navegación y listado dinámico del historial.
- **Diseño responsive** – Construido con Tailwind CSS 4.
- **Mapeo de datos** – Transformación de la respuesta de Giphy a un modelo propio (`Gif`).
- **Pruebas unitarias** – Configuración lista para ejecutar tests con Vitest.

## 🧱 Tecnologías utilizadas

- [Angular 22](https://angular.dev/)
- [TypeScript 6.0](https://www.typescriptlang.org/)
- [RxJS 7.8](https://rxjs.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vitest 4](https://vitest.dev/) (testing)
- [Font Awesome 7.3](https://fontawesome.com/) (iconos)
- [Giphy API](https://developers.giphy.com/)

## 📋 Requisitos previos

- [Node.js](https://nodejs.org/) (versión 18 o superior recomendada)
- npm (incluido con Node.js) – el proyecto usa npm 12, pero cualquier versión moderna debería funcionar.

## 🔧 Puesta en marcha

1. **Clona este repositorio**

   ```bash
   git clone https://github.com/tu-usuario/gifs-app.git
   cd gifs-app
   ```

2. **Instala las dependencias**

   ```bash
   npm install
   ```

3. **Configura la clave de API de Giphy (opcional)**
   Si deseas usar tu propia clave, edita `src/environments/environment.ts` (y su versión `development`):

   ```ts
   export const environment = {
     ...
     giphyApiKey: 'TU_API_KEY',
     giphyUrlBase: 'https://api.giphy.com/v1'
   };
   ```

   Puedes obtener una clave gratuita en [Giphy Developers](https://developers.giphy.com/).

4. **Ejecuta el servidor de desarrollo**
   ```bash
   ng serve
   ```
   Abre el navegador en `http://localhost:4200/`.

## 📦 Compilación para producción

```bash
ng build
```

Los archivos compilados se almacenarán en la carpeta `dist/`.

## 🧪 Pruebas unitarias

```bash
ng test
```

Se ejecutarán las pruebas usando **Vitest**. La configuración se encuentra en `tsconfig.spec.json`.

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── gifs/
│   │   ├── components/        # Componentes reutilizables (gifs-list, side-menu, etc.)
│   │   ├── interfaces/        # Interfaces de datos (Gif, GiphyResponse)
│   │   ├── mapper/            # Transformación de respuestas API
│   │   ├── pages/             # Componentes de página (dashboard, search, trending, history)
│   │   └── services/          # Servicio para comunicación con Giphy y gestión del historial
│   ├── app.component.*        # Componente raíz (usa router-outlet)
│   ├── app.config.ts          # Configuración global de la aplicación
│   └── app.routes.ts          # Definición de rutas con lazy loading
├── environments/              # Variables de entorno (API key, URL base)
├── index.html                 # Punto de entrada HTML
├── main.ts                    # Bootstrap de la aplicación
└── styles.css                 # Estilos globales (importa Tailwind)
```

## 📖 Cómo contribuir

Si deseas contribuir, puedes hacer un fork del repositorio y enviar un Pull Request.  
Este proyecto es principalmente educativo, pero toda mejora o corrección es bienvenida.

## 📄 Licencia

Este proyecto está licenciado bajo la licencia MIT.  
Puedes ver el texto completo en el archivo [LICENSE](LICENSE) o leer un resumen a continuación:

```
MIT License

Copyright (c) 2025 GifsApp

Se concede permiso por la presente, libre de cargos, a cualquier persona que obtenga una copia de este software y los archivos de documentación asociados (el "Software"), para utilizar el Software sin restricción, incluyendo sin limitación los derechos de usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender copias del Software, y para permitir a las personas a las que se les proporcione el Software hacer lo mismo, sujeto a las siguientes condiciones:

El aviso de copyright anterior y este aviso de permiso se incluirán en todas las copias o partes sustanciales del Software.

EL SOFTWARE SE PROPORCIONA "TAL CUAL", SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN, IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS AUTORES O TITULARES DE LOS DERECHOS DE AUTOR SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN, DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O DE OTRO TIPO, QUE SURJA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U OTRO TIPO DE ACCIONES EN EL SOFTWARE.
```

---

Hecho con ❤️ para seguir aprendiendo Angular.
