
# 🌐 Usman Farooq's Portfolio

A modern, responsive, and professional developer portfolio built using **React**, **Vite**, **Tailwind CSS**, and more. It showcases full-stack projects, skills, tools, and experience.



---

## ✅ Prerequisites

Before running the project, make sure you have the following installed:

- [Node.js (v16 or higher)](https://nodejs.org/)
  ```bash
  node --version
  npm --version
  ```

- [pnpm](https://pnpm.io/)
  ```bash
  npm install -g pnpm
  ```

---

## 🚀 Getting Started

### 1. 📦 Clone or Download the Project

```bash
git clone https://github.com/usmanfarooq317/Usman-Portfolio.git
cd Usman-Portfolio
```

Or download the `usman-portfolio-complete.zip` and extract it.

---

### 2. 📁 Navigate to the Project Directory

Replace with your actual path:

```bash
# Windows
cd C:\Users\YourName\Desktop\usman-portfolio

# Mac/Linux
cd ~/Desktop/usman-portfolio
```

---

### 3. 📥 Install Dependencies

```bash
pnpm install
```

---

### 4. 💻 Run the Development Server

```bash
pnpm run dev
```

Visit the output URL in your terminal (usually: [http://localhost:5173](http://localhost:5173)).

---

## 🧾 Available Scripts

| Command           | Description                        |
|------------------|------------------------------------|
| `pnpm run dev`   | Start development server           |
| `pnpm run build` | Create production-ready build      |
| `pnpm run preview` | Preview production build locally |

---

## 📁 Project Structure

```
usman-portfolio/
├── public/                 # Static assets (images, icons)
├── src/
│   ├── components/
│   │   ├── layout/         # Header, Footer, Layout
│   │   └── ui/             # UI components
│   ├── pages/              # Route pages
│   │   ├── SimpleHome.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Tools.jsx
│   │   ├── Experience.jsx
│   │   └── Contact.jsx
│   ├── App.jsx             # Main app layout
│   └── main.jsx            # Entry point
├── package.json            # Dependencies & scripts
└── vite.config.js          # Build tool configuration
```

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, Framer Motion
- **Bundler:** Vite
- **Package Manager:** pnpm
- **Deployment:** Vercel

---

## 🧪 Troubleshooting

### 1. `pnpm: command not found`
- Install pnpm: `npm install -g pnpm`
- Restart terminal

### 2. Port 5173 already in use
- Vite will auto-assign next available port (check terminal)

### 3. Dependency errors
- Delete `node_modules` and `pnpm-lock.yaml`
- Reinstall: `pnpm install`

### 4. Images not displaying
- Ensure images are placed in `/public`
- Use image paths like `/yourimage.png` (not `/public/yourimage.png`)

---

## 🛠 Making Changes

- Edit files inside `/src/` to customize
- Save files to auto-reload in development
- Place any new static images in `/public`

---

## 📦 Build for Production

```bash
pnpm run build
```

Build output will be created in the `/dist` folder.

To preview:

```bash
pnpm run preview
```

---

## 🙋‍♂️ Author

**Usman Farooq**

- 📧 Email: [usmanfarooq317@gmail.com](mailto:usmanfarooq317@gmail.com)
- 💼 Portfolio: [https://usmanfarooq-portfolio.netlify.app](https://usmanfarooq-portfolio.netlify.app)
- 💻 GitHub: [@usmanfarooq317](https://github.com/usmanfarooq317)

---

## 📄 License

This project is open-source under the **ISC License**.

---

> 💡 _Feel free to fork, clone, and customize this template for your own portfolio._  
> Happy building! 🚀
