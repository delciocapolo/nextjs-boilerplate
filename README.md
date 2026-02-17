# React Monorepo with NX

> Full-stack monorepo setup using NX and React, with Vite, Vitest, and Playwright pre-configured.

---

## 📚 Table of Contents

- [Creating Apps & Libraries](#-creating-apps--libraries)
  - [Frontend App](#frontend-app)
  - [Library](#library)
- [NX Daemon](#-nx-daemon)
  - [Kill the process](#kill-the-process)
  - [List running processes](#list-running-processes)
  - [Reset the daemon](#reset-the-daemon)

---

## 📦 Creating Apps & Libraries

All generation commands should be run from the **root of the project**.

### Frontend App

```bash
npx nx g @nx/react:app app_name \
  --directory=apps/app_name \
  --bundler=vite \
  --routing=true \
  --style=css \
  --unitTestRunner=vitest \
  --e2eTestRunner=playwright
```

| Flag | Value | Description |
|------|-------|-------------|
| `--directory` | `apps/app_name` | Output directory |
| `--bundler` | `vite` | Build tool |
| `--routing` | `true` | Enables React Router |
| `--style` | `css` | CSS styling strategy |
| `--unitTestRunner` | `vitest` | Unit test runner |
| `--e2eTestRunner` | `playwright` | End-to-end test runner |

### Library

```bash
npx nx g @nx/js:lib lib_name \
  --directory=libs/lib_name \
  --name-and-directory-format=as-provided
```

---

## 🔧 NX Daemon

### Kill the process

If the NX process is stuck or unresponsive, kill it with:

```bash
pkill -f "nx serve"
```

### List running processes

To inspect what NX processes are currently running:

```bash
ps aux | grep "nx serve"
```

### Reset the daemon

To fully reset the NX daemon and clear its cache:

```bash
npx nx reset
```

---

> 💡 For the full list of NX generators and options, refer to the [NX documentation](https://nx.dev/nx-api).