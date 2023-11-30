CINEMA STUDIO

![](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)
![](https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![](https://badges.aleen42.com/src/vitejs.svg)

Pour la réalisation de cette application web, j'ai utilisé :

   - React 18.2 (+ react-dom & react-router-dom)
   - Vite
   - Typescript
   - Tailwindcss
   - Cypress

Pour la lancer, la procédure est la suivante :

   - `npm i` ou `yarn install`
   - `npx tailwindcss -i ./src/index.css -o ./dist/index.css --watch`
   - créer un fichier `.env.local` (voir `.env.example`)
   - `npm run dev` ou `yarn dev`
   - `http://localhost:5173/`

Si l'on souhaite lancer des tests avec Cypress :

   - `npx cypress open` ou `yarn run cypress open`

Documents utiles :

   - [React 18](https://reactjs.org/)
   - [TypeScript](https://www.typescriptlang.org/)
   - [Vite](https://vitejs.dev/)
   - [Cypress](https://docs.cypress.io/guides/overview/why-cypress)