# 🏋️ Projeto Academia

## 📌 Descrição

O **Projeto Academia** é uma aplicação web desenvolvida para auxiliar na organização e gestão de treinos de alunos em academias. A plataforma permite o registro completo de dados dos alunos, acompanhamento de avaliações físicas e a criação de treinos personalizados de forma prática e eficiente.

Além disso, o sistema conta com um recurso de **gamificação**, que incentiva os alunos a manterem consistência e disciplina nos treinos, tornando a experiência mais motivadora, interativa e envolvente.

## 🎯 Problema que resolve

O projeto busca reduzir significativamente o uso de fichas em papel nas academias, promovendo uma gestão mais organizada, sustentável e acessível das informações dos alunos.

## 🚀 Tecnologias utilizadas

* HTML
* CSS
* JavaScript
* TypeScript

### 📚 Bibliotecas e frameworks

* React
* JSON (para manipulação de dados)

## ⚙️ Como executar o projeto

### 📦 Instalação

```bash
npm install
```

### ▶️ Execução

```bash
npm run dev
```

## ✨ Funcionalidades

* Cadastro de alunos
* Registro de avaliações físicas
* Criação e organização de treinos personalizados
* Acompanhamento de desempenho dos alunos
* Sistema de gamificação para aumentar o engajamento

## 📌 Status do projeto

🚧 Em desenvolvimento






# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> fa02486 (subindo o projeto novamente)
