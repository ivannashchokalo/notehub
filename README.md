# 📝 NoteHub

## 🌍 Live Demo

Frontend: https://notehub-brown.vercel.app
Backend API: https://notehub-api-dxyp.onrender.com

## 📝 About the Project

**NoteHub** is a productivity web application built with Next.js 16, TypeScript, and App Router.

Users can create, organize, search, and manage their personal notes. The project demonstrates authentication, protected routes, dynamic routing, modal pages, and modern state management.

---

## ✨ Features

* 🔐 Authentication (Sign Up / Sign In / Logout)
* 📝 Create, view and delete notes
* 🔍 Search notes with debouncing
* 🏷️ Filter notes by category
* 🖼️ Upload profile avatar
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
* 📤 React Dropzone
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
PATCH /users/me
PATCH /users/me/avatar
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

https://notehub-brown.vercel.app

### Backend API

https://notehub-api-dxyp.onrender.com

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
git clone git@github.com:ivannashchokalo/notehub.git

cd notehub

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

## 🧪 Demo Account

Use these credentials to explore the application with pre-created notes.

```text
Email: **user@gmail.com**
Password: **12345678**
```

---

## 👩‍💻 Author

**Ivanna Shchokalo**

* 💼 Junior Full-Stack Developer
* ⚛️ React & Next.js Developer
* 🟢 Node.js & Express Developer

🔗 GitHub: https://github.com/ivannashchokalo
