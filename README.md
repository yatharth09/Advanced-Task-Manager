# 📝 Advanced Task Manager App  
A modern, responsive, and optimized Task Manager application built using **React**, featuring drag-and-drop support, theming, custom hooks, and advanced performance techniques.

---

## 🚀 Live Demo  
👉 **[View on Vercel](https://advanced-task-manager-three.vercel.app/)**  


---

## 📌 Project Overview  
This project implements an **Advanced Task Manager** with complete CRUD operations, React optimization patterns, beautiful UI, and local storage persistence.

It was built as part of an assignment that tests:  
✔ React fundamentals  
✔ State management with Context  
✔ Custom hooks  
✔ React optimization  
✔ CSS theming  
✔ Drag-and-drop implementation  

---

## ✨ Features

### ✅ **Core Features**
- ➕ Add new tasks  
- ✔ Mark tasks as completed  
- ❌ Delete tasks  
- 🔎 Filter tasks: **All | Active | Completed**  
- 💾 Persist tasks using **Local Storage**

---

### 🧠 **React-Specific Features**
- 🪝 Custom Hook: `useLocalStorage`  
- 🌐 Context API for global state management  
- ⚡ Performance optimization using:
  - `React.memo`
  - `useCallback`
  - `useMemo`
- ⚠️ Input validation (prevents adding empty tasks)

---

### 🎨 **CSS & UI Features**
- 🌗 **Dark Mode / Light Mode Toggle**
- 🎞 Smooth animations for adding/removing tasks
- 📱 Fully responsive layout (mobile-first)
- 🟦 Modern Material-inspired UI styling
- ↕ **Drag and Drop Sorting** (using `@hello-pangea/dnd`)  
  *(A maintained fork of react-beautiful-dnd for React 18)*

---

## 🏗️ Tech Stack

| Layer | Technologies |
|------|--------------|
| **Frontend** | React 18, JavaScript, JSX |
| **State Management** | Context API |
| **Styling** | CSS, Custom Theming |
| **Storage** | LocalStorage |
| **Drag & Drop** | @hello-pangea/dnd |
| **Tools** | Vite / CRA (depending on setup) |

---

## 📁 Folder Structure

```
src/
│
├── components/
│ ├── TaskList.js
│ ├── TaskItem.js
│ └── ThemeToggle.js
│
├── context/
│ └── DataContext.js
│
├── hooks/
│ └── useLocalStorageHook.js
│
├── styles/
│ └── App.css
│
├── App.js
└── index.js
```




---

## ⚡ Performance Optimizations Applied

### ✔ `useMemo`  
Used to memoize:
- Filtered task list  
- Remaining tasks count  
- Context value object  

### ✔ `useCallback`  
Wrapped handlers like:  
- task creation  
- task deletion  
- toggle completion  
- drag and drop reorder  

### ✔ `React.memo`  
Applied to components rendering list items to prevent unnecessary re-renders.

---

## 🧪 Validation Rules
- You **cannot** add an empty task  
- You **cannot** add whitespace-only tasks  
- Shows a validation message for invalid input

---

## ↕ Drag & Drop
Implemented using:

```bash
npm install @hello-pangea/dnd
```


## Theme Support 
A toggle button switches between:

-Dark Mode (default)

-Light Mode

Theme persists in local storage.




