# 📝 NoteHub

## 📝 About the Project

**NoteHub** is a productivity web application built with Next.js 16, TypeScript, and App Router.

Users can create, organize, search, and manage their personal tasks and records. The project demonstrates authentication, protected routes, dynamic routing, modal pages, and modern state management.

---

## ✨ Features

* 🔐 Authentication (Sign Up / Sign In / Logout)
* 📝 Create and delete notes
* 🔍 Search notes with debouncing
* 🏷️ Filter notes by category
* 📄 Dynamic note details pages
* 👤 User profile page
* 🪟 Modal note preview
* 📑 Pagination
* ✅ Form validation
* ❌ Error handling
* ⚡ Loading states

---

## 🛠️ Technologies & Tools

* ⚛️ React 19
* ▲ Next.js 16
* 🔷 TypeScript
* ⚡ TanStack Query
* 🌐 Axios
* 📋 Formik
* ✅ Yup
* 🗂️ Zustand
* 🍪 Cookies
* 📄 React Paginate
* ⏳ use-debounce

---

## 🚀 Next.js Features

* 📦 App Router
* 📄 Dynamic Routes
* 🪟 Parallel & Intercepting Routes
* 🔐 Route Protection
* 🔄 Client & Server Components
* ⚡ Server Actions

---

## 🌐 Backend API

### Used Endpoints

```bash
POST /auth/register
POST /auth/login
POST /auth/logout

GET /notes
GET /notes/{id}
POST /notes
DELETE /notes/{id}

GET /users/me
```

---

## 🧱 Project Structure

```bash
app/
 ┣ (auth routes)/
 ┣ (private routes)/
 ┃ ┣ notes/
 ┃ ┗ profile/
 ┣ @modal/
 ┗ api/
```

---

## 🚀 Deployment

### Frontend

```bash
https://your-notehub-app.vercel.app
```

### Backend API

```bash
https://nodejs-hw-5-crhj.onrender.com
```

---

## 🔐 Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000
```

---

## ⚙️ Installation

```bash
git clone git@github.com:ivannashchokalo/task-flow.git

cd note-hub

npm install

npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## 📜 Available Scripts

| Command         | Description            |
| --------------- | ---------------------- |
| `npm run dev`   | Run development server |
| `npm run build` | Build project          |
| `npm run start` | Start production build |

---

## 👩‍💻 Author

**Ivanna Shchokalo**

* 💼 Junior Full-Stack Developer
* ⚛️ React & Next.js Developer
* 🟢 Node.js & Express Developer

GitHub:
👉 https://github.com/ivannashchokalo
