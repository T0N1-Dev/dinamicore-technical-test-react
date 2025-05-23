# Dynamicore Technical Test

This project is a technical test built with **React**, **TypeScript**, and **Vite**.

## Principal Functionality

This project demonstrates a simple User Management interface with two main features:

- **User List**: Displays a list of users sorted alphabetically by name. Each user entry shows the user's name and age in a clean, card-style layout.
- **User Form**: Provides a form to input a user's name and email. The form includes validation (required fields) and displays error messages for missing input. Upon successful submission, a confirmation message is shown with the submitted data.

Both features are styled for clarity and usability, and the codebase uses custom React hooks for form state management, validation, and sorting logic.

## Getting Started

To run the project locally:

```bash
npm install
npm run dev
```

## Project Structure

- `src/` — Main source code (components, pages, etc.)
- `public/` — Static assets
- `vite.config.ts` — Vite configuration
- `tsconfig.json` — TypeScript configuration

## Linting and Code Quality

This project uses **ESLint** for code linting and **Prettier** for code formatting.

### Running Lint

```bash
npm run lint
```

### Recommended ESLint Configuration

For production-ready code, enable type-aware lint rules in your `eslint.config.js`:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // Optionally, use stricter or stylistic rules:
    // ...tseslint.configs.strictTypeChecked,
    // ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

### React-Specific Lint Rules

You can enhance linting with [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom):

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

## Useful Links

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

---

Feel free to update this README with project-specific details as you develop your solution.
