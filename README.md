<div align=center>

[![ntl-badge]][ntl-link] ![ci] ![views] ![stars] ![forks] ![issues] ![license] ![repo-size]

<div style="display: flex; justify-content: center; gap: 1rem;">
<img src="public/icons/app.svg" style="width: 100px; height: 100px;">

</div>

# CirriNote App

</div>

## Features

- ⚡ **[Vite](https://vitejs.dev/)** - Lightning fast frontend tooling
- ⚛️ **[React 18](https://reactjs.org/)** - A JavaScript library for building user interfaces
- 🎨 **[TailwindCSS](https://tailwindcss.com/)** - A utility-first CSS framework for rapidly building custom designs
- 📦 **[TypeScript](https://www.typescriptlang.org/)** - A typed superset of JavaScript that compiles to plain JavaScript
- 📦 **[TanStack Router](https://tanstack.com/router)** - A fully type-safe React router with built-in data fetching, stale-while revalidate caching and first-class search-param APIs.
- 📦 **[react-router](https://reactrouter.com/)** - Declarative routing for React
- 📦 **[lucide-react](https://lucide.dev/)** - Beautiful & consistent icons
- 📝 **[ESLint](https://eslint.org/)** - The pluggable linting utility for JavaScript and JSX
- ✨ **[Prettier](https://prettier.io/)** - An opinionated code formatter
- 🐶 **[Husky](https://typicode.github.io/husky/#/)** - Git hooks made easy
- 🚫 **[lint-staged](https://github.com/okonet/lint-staged)** - Run linters against staged git files
- 📄 **[commitlint](https://commitlint.js.org/#/)** - Lint commit messages
- 📦 **[bun](https://bun.sh)** - A JavaScript runtime w/ Fast, disk space efficient package manager

## Getting Started

**Install dependencies:**

```bash
bun i || pnpm i || yarn || npm i
```

**Initialize a new git repository _(Optional)_:**

```bash
git init
git add .
git commit --no-verify -m "init"
```

## Available Scripts

In the project directory, you can run:

| **Script**   | **Description**                                                 |
| ------------ | --------------------------------------------------------------- |
| `dev`        | Runs the app in the development mode.                           |
| `build`      | Builds the app for production to the `dist` folder.             |
| `serve`      | Serves the production build from the `dist` folder.             |
| `preview`    | Bundles and serves the production build from the `dist` folder. |
| `type-check` | Runs TypeScript type-checking.                                  |
| `lint`       | Runs ESLint with Prettier.                                      |
| `fmt`        | Formats the code with Prettier.                                 |
| `fmt:check`  | Checks if the code is formatted with Prettier.                  |
| `prepare`    | Installs husky git hooks.                                       |

## After Installation Checklist

- [ ] Update `package.json` with your project details.
- [ ] Update `README.md` with your project details.
- [ ] Update `index.html` to your liking.

## Switching Package Manager

This app uses `yarn`, you can use `pnpm` or `npm`, run `pnpm i`, `npm i` or `yarn` to generate the lock file for the respective package manager.

## Deployments

[![Deploy with Vercel](https://vercel.com/button)]

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
