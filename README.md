# Despliegue a GitHub Pages

Pequeñas instrucciones para publicar este proyecto en GitHub Pages usando el workflow de GitHub Actions incluido.

Requisitos
- Node.js y npm instalados
- Repositorio en GitHub (remote configurado)

Pasos (rápidos)

1. Verifica `vite.config.js`

	- Asegúrate de que `base` tenga el nombre correcto del repositorio. Por ejemplo, si tu repo se llama `macboboversionpc`:

	  ```js
	  base: '/macboboversionpc/',
	  ```

	- Si vas a publicar en un sitio de usuario/organización (`username.github.io`) usa `base: '/'`.

2. Confirma que la rama principal es `main` (el workflow está configurado para `main`).

	- Si usas otra rama, edita `.github/workflows/gh-pages.yml` y cambia el trigger.

3. Empuja tu código a GitHub

	```powershell
	git add .
	git commit -m "Prepare for GitHub Pages"
	git push origin main
	```

4. Espera que la Action se ejecute

	- Ve a la pestaña Actions en GitHub y revisa el workflow "Deploy to GitHub Pages".
	- Si todo va bien, la Action publicará `./dist` en la rama `gh-pages`.

5. URL del sitio

	- El sitio estará disponible en `https://<TU_USUARIO>.github.io/macboboversionpc/` (puede tardar unos minutos).

Despliegue local (opcional)

Si prefieres desplegar desde tu máquina sin Actions, puedes usar `gh-pages`:

```powershell
npm install --save-dev gh-pages
npm run build
npx gh-pages -d dist
```

Problemas comunes
- 404 tras publicar: revisa `vite.config.js` -> `base`.
- Workflow no se dispara: verifica que empujaste a la rama correcta (`main`).
- Error en Action: revisa los logs en Actions para ver el paso que falló (instalación, build, deploy).

Si quieres, puedo:
- ajustar el workflow para otra rama (ej. `master`),
- añadir caching npm al workflow para acelerar builds,
- o volver a añadir scripts `deploy` si prefieres desplegar localmente.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
