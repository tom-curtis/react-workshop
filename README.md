# 🎓 React Workshop — Mini React Lab

A hands-on React learning environment covering the fundamentals through building real components, forms, lists, stateful UI, and finally a full Todo App. Designed for **~2 hours of guided workshop time**, plus optional stretch goals.

This repo contains:

* A slide-less **interactive workbook**
* **6 self-contained React exercises**
* A final **Todo App challenge**
* An optional **mock Express API** for stretch goals
* A lightweight UI powered by **HeroUI** + **Tailwind CSS**

Everything is bundled into a clean dev environment so participants can focus on learning.

---

## 🚀 Getting Started

Install dependencies:

```bash
pnpm install
```

You made need to install [Pnpm](https://pnpm.io/) to run this project.
```bash
npm i -g pnpm
```

Run the dev environment (React + Vite):

```bash
pnpm dev
```

This launches the workbook UI at:

```
http://localhost:5173
```

---

# 📘 Workbook

The workbook lives inside the app itself and walks the student through:

1. **Components & JSX**
2. **State & Events**
3. **Conditional Rendering**
4. **Forms & Validation**
5. **Lists & Derived State**
6. **Side Effects & `useEffect`**

Each concept includes demos and explanations. Participants then open the matching exercise using the **Exercises menu** in the interface.

---

# 🧩 Exercises

Each exercise opens inside a modal and includes a minimal skeleton + high-level TODO list so students implement the solution themselves.

### ✔ **Exercise 1: Recipe Gallery**

Components, props, mapping over lists.

### ✔ **Exercise 2: Mood Tracker**

State + conditional rendering + simple composition.

### ✔ **Exercise 3: Event Registration Form**

Controlled inputs + validation + submission summary.

### ✔ **Exercise 4: Product Filter**

List filtering, derived state, conditional empty states.

### ✔ **Exercise 5: User Preferences**

`useEffect`, localStorage persistence, theme-aware UI.

### ✔ **Exercise 6: Notifications Center**

Stateful lists, conditional rendering, optional timers with `useEffect`.

---

# 🏆 Final Challenge — Todo App

After completing the first 6 exercises, participants build a **Todo App from scratch**, combining everything they’ve learned:

* Components
* State
* Forms
* Lists
* Local persistence or API calls
* Conditional rendering
* Effects

A stretch goal allows connecting the app to a mock backend.

---

# 🔌 Optional Stretch Goal — Mock Todo API (Express)

A simple mock REST API is available inside:

```
/mock/server.cjs
```

It supports:

* `GET /todos`
* `POST /todos`
* `PATCH /todos/:id`
* `DELETE /todos/:id`

Run it with:

```bash
pnpm api
```

Or run API + frontend together (if configured):

The API uses **CORS** to allow calls from Vite’s dev server.

Students can:

* Load todos with `useEffect`
* Create todos using `POST`
* Toggle completion using `PATCH`
* Delete using `DELETE`

---

# 🎨 UI Frameworks

This project uses:

* **HeroUI (@heroui/react)** — components and theme tokens
* **Tailwind CSS** — utility-first styling, with dark mode support

Dark mode is handled using Tailwind’s `dark:` variants.
Inline SVGs can use HeroUI color tokens:

```tsx
className="fill-default-900 dark:fill-default-100"
```

# 🧪 Requirements

* Basic JavaScript
* Comfortable with HTML & CSS
* No prior React experience required

Vite handles bundling, HMR, and local dev.

