# 🚗 Vehicle Hamburg 🗺️📍🇩🇪

A modern, interactive map-based vehicle browser built with Next.js 15, TailwindCSS, TypeScript, and Leaflet — showcasing cars across Hamburg, Germany.

## 🖼️ UI Preview

![Splash Screen](https://github.com/frau-azadeh/sunflowerdev/blob/main/splash%20screen.png)

![Vehicles Humburg](https://github.com/frau-azadeh/sunflowerdev/blob/main/vehicles.png)

![Vehicle Details](https://github.com/frau-azadeh/sunflowerdev/blob/main/vehicle-details.png)

![Error 404](https://github.com/frau-azadeh/sunflowerdev/blob/main/404.png)

[🔗 Live Demo](https://vehicle-hamburg.vercel.app)

[📂 GitHub Repo](https://github.com/frau-azadeh/vehicle-hamburg)

---

## 📋 Core Features

| 🔧 Feature                          | 💬 Description                                              |
| ----------------------------------- | ----------------------------------------------------------- |
| 🚀 **Next.js 15 App Router**        | Built using the latest file-based routing paradigm (`app/`) |
| 🧪 **Mock API Integration**         | Simulated JSON data used to mimic real-world API responses  |
| 🗺️ **Leaflet Maps**                 | Displays vehicles on an interactive, zoomable Hamburg map   |
| 🎨 **TailwindCSS + `var()`**        | Responsive UI with custom CSS variables for future theming  |
| ⚛️ **React 19 + JSX Runtime**       | Modern rendering with concurrent features                   |
| 👨‍💻 **TypeScript**                   | Strict types across components, hooks, and mock data        |
| 🧼 **Prettier + ESLint**            | Enforced code consistency and formatting                    |
| 🧪 **Jest + React Testing Library** | Full test suite with DOM mocking and isolated unit tests    |
| 🍞 **react-hot-toast**              | Elegant toast notifications for real-time user feedback     |

---

## 🧠 About the Stack

### 🧭 Next.js 15 (App Router)

- ✅ `app/` folder architecture

- ✅ File-based routing with nested layouts

- ✅ Built-in SEO & performance optimization

### 🎨 TailwindCSS + `var()`

- ✅ Uses **CSS variables** for consistent theming

- ✅ Fully responsive grid & layout utilities

- ✅ Global styles via `globals.css`

### 🧪 Mock API

- ✅ Vehicle data is fetched from a **local mock JSON** via `useVehicles()` hook

- ✅ Prepares app for later switch to real APIs with minimal refactoring

### 💬 TypeScript

- ✅ Strict typing (`noImplicitAny`, `strictNullChecks`)

- ✅ Strong types for vehicle schema, components, and hooks

---

## 🏗️ Folder Structure

```
vehicle-hamburg/
├── public/                 # Static assets (e.g., favicon, images)
├── src/                    # Main source code
│   ├── app/                # Next.js App Router pages & layouts
│   │   ├── layout.tsx      # Root layout wrapper
│   │   ├── page.tsx        # Homepage
│   │   └── vehicles/       # Vehicles listing route
│   │       └── page.tsx    # Vehicles page entry point
│   ├── data/               # Mock data used in the app
│   │   └── vehicles.json   # Simulated vehicle API data
│   ├── features/           # Modular feature folders
│   │   ├── hooks/          # Custom React hooks
│   │   │   └── useVehicles.ts  # Fetch and manage vehicle data
│   │   └── vehicles/       # Vehicle components & types
│   │       ├── index.tsx   # Main vehicle list UI
│   │       └── types.ts    # TypeScript interfaces & types
├── styles/                 # Global styles (if any)
├── tests/                  # Unit & component tests
├── .env.local              # Environment variables (local use)
├── jest.config.js          # Jest test configuration
├── tailwind.config.ts      # TailwindCSS setup (includes custom var() tokens)
├── tsconfig.json           # TypeScript compiler configuration
├── next.config.ts          # Next.js configuration
└── README.md               # Project documentation
```

---

## 🛠️ Installation & Scripts

# 1. Clone the repository

        git clone https://github.com/frau-azadeh/vehicle-hamburg.git

# 2. Enter the project directory

        cd vehicle-hamburg

# 3. Install dependencies

        npm install

## 🚀 Available Scripts

| 📦 Command               | 🔍 Description                                          |
| ------------------------ | ------------------------------------------------------- |
| `npm run dev`            | Start the development server at `http://localhost:3000` |
| `npm run build`          | Create an optimized production build                    |
| `npm start`              | Start the production server                             |
| `npm test`               | Run all unit tests using **Jest**                       |
| `npm run lint`           | Lint the codebase using **ESLint**                      |
| `npm run prettier:fix`   | Auto-format the codebase using **Prettier**             |
| `npm run prettier:check` | Check formatting issues without changing files          |

## 🧠 Project Management Snapshot

> Task board view managed in GitHub Projects

![GitHub Project Board](https://github.com/frau-azadeh/sunflowerdev/blob/main/backlog.png)

> Example of a fully tracked unit testing issue with todos, labels, and pull request linkage

![Unit Testing Issue](https://github.com/frau-azadeh/sunflowerdev/blob/main/unit%20test.png)

### 📋 Project Management

I used GitHub Projects to manage development tasks, plan milestones, and track progress across the entire lifecycle of the project.

| 💼 Workflow Stage  | Tasks Managed                                                               |
| ------------------ | --------------------------------------------------------------------------- |
| 🧠 **Backlog**     | Planned upcoming tasks like documentation, enhancements, and bug reports    |
| 🚦 **In Progress** | Actively developed features like `CI/CD`, testing, and routing improvements |
| 🔍 **In Review**   | Peer-reviewed code, open PRs, and integrated issue discussions              |
| ✅ **Done**        | Completed units such as `Unit Testing`, `Test Utils`, and feature setups    |

---

## 📁 Git & Version Control

This project follows **conventional commit standards**, using prefixes like `feat`, `chore`, `docs`, and `test` to keep a clean, readable commit history.

---

## 🌻 About Me

I’m **Azadeh Sharifi Soltani**, a frontend developer focused on building polished, scalable applications using modern tools like **React, TypeScript, and Next.js**.

> 📬 I’m open to frontend opportunities — feel free to reach out!

[LinkedIn](https://www.linkedin.com/in/azadeh-sharifi-soltani/)

[GitHub](https://github.com/frau-azadeh)

[Website](https://sunflower-dev.com)
