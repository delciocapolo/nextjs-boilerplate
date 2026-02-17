# 🧱 Boilerplates

> A curated collection of full-stack boilerplates to kickstart your next project.

![License](https://img.shields.io/github/license/your-username/boilerplates?style=flat-square)
![Stars](https://img.shields.io/github/stars/your-username/boilerplates?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/your-username/boilerplates?style=flat-square)
![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen?style=flat-square)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-blue?style=flat-square)

---

## 📚 Table of Contents

- [Overview](#-overview)
- [Boilerplates](#-boilerplates)
- [How to Use](#-how-to-use)
- [Repository Structure](#-repository-structure)
- [Stack Conventions](#-stack-conventions)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🔍 Overview

This repository is a personal collection of opinionated, ready-to-use **full-stack boilerplates**.

Each boilerplate lives in its **own branch** — the `main` branch is intentionally kept as an index only. This keeps every template self-contained, independently versioned, and easy to clone in isolation.

The goal is to save setup time and keep consistency across projects by having well-thought-out starting points that follow modern best practices.

---

## 🗂 Boilerplates

Each row links directly to its branch. Click the branch name to browse the code or follow the [How to Use](#-how-to-use) section to clone it locally.

| Branch | Stack | Description | Status |
|--------|-------|-------------|--------|
| [`react/nextjs`](https://github.com/delciocapolo/nextjs-boilerplate/tree/react/nextjs) | Next.js | App Router setup ready | ✅ Ready |
| [`react/monorepo-nx`](https://github.com/delciocapolo/nextjs-boilerplate/tree/react/monorepo-nx) | Monorepo NX · React Vite · MUI · Axios · Tailwind | Full monorepo stack with typed end-to-end| 🚧 WIP |

> **Legend:** ✅ Ready — stable and usable · 🚧 WIP — work in progress · 🔜 Planned

---

## 🚀 How to Use

Since each boilerplate is on its own branch, you have two options:

### Option A — Clone only the branch you need

This is the recommended approach. You get just the boilerplate, with no extra history or unrelated branches.

```bash
git clone --single-branch --branch boilerplate/next-prisma-auth \
  https://github.com/your-username/boilerplates.git my-project

cd my-project
npm install
cp .env.example .env
npm run dev
```

### Option B — Clone everything and switch branches

Useful if you want to browse or compare multiple boilerplates locally.

```bash
git clone https://github.com/your-username/boilerplates.git
cd boilerplates

# List all available boilerplates
git branch -r | grep boilerplate/

# Switch to the one you want
git checkout boilerplate/next-prisma-auth
```

> After cloning, check the `README.md` inside the branch for stack-specific setup instructions, including environment variables and any required services.

---

## 🌿 Repository Structure

This repo follows a **one branch per boilerplate** convention:

```
main                          ← You are here (index only)
react/nexths                  ← Next.js
react/monorepo-nx             ← Monorepo Nx
```

Every boilerplate branch is structured consistently:

```
/
├── src/
├── .env.example     ← all required env vars, documented
├── .eslintrc        ← linting config
├── .prettierrc      ← formatting config
└── README.md        ← stack details, setup steps, architecture notes
```

---

## ⚙️ Stack Conventions

To keep things coherent across boilerplates, the following conventions are generally followed:

- **Language:** TypeScript everywhere (frontend and backend)
- **Formatting:** Prettier + ESLint pre-configured
- **Styling:** Tailwind CSS (frontend projects)
- **Testing:** Vitest or Jest depending on the project
- **Git hooks:** Husky + lint-staged for pre-commit checks
- **Environment:** `.env.example` always present and up to date

---

## 🤝 Contributing

Contributions are welcome! If you have a boilerplate to add or improvements to an existing one, feel free to open a PR.

### Adding a new boilerplate

```bash
# Create a new orphan branch — no shared history with main
git checkout --orphan boilerplate/your-stack-name

# Build your boilerplate, then commit
git add .
git commit -m "feat: add [your-stack-name] boilerplate"
git push origin boilerplate/your-stack-name

# Open a PR against main to get it listed in the index 🚀
```

> Using `--orphan` ensures each boilerplate starts with a clean, independent history.

### Guidelines

- Branch name must follow the pattern `boilerplate/<name>`.
- Must include a `README.md` and a `.env.example`.
- Code should be **clean, minimal, and production-aware** — avoid bloat.
- Open a PR against `main` to update the index table once the branch is ready.

---

## 📄 License

[MIT](./LICENSE) — free to use, modify and distribute. Attribution appreciated but not required.

---

<p align="center">Made with ☕ and too many <code>npm install</code>s</p>