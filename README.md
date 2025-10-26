# 🌠 Star Folk

A complete **Star Wars Characters Wiki** — built with **FastAPI** (backend) and **Lit + TypeScript + Vite** (frontend).  
Explore profiles of heroes, villains, and legends from a galaxy far, far away.

---

## 🛰️ Star Folk Backend

A simple **FastAPI backend** with a preloaded **SQLite database** containing Star Wars characters.

### 🚀 Setup

```bash
# 1. Clone the repo and move to backend folder
git clone https://github.com/yourusername/star-folk.git
cd star-folk/backend

# 2. Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate      # Windows
# or
source venv/bin/activate   # macOS / Linux

# 3. Install dependencies
pip install -r requirements.txt
```

### 🧠 Initialize the Database

`python -m app.seed_data` 

This creates a local `starwars.db` file with all characters preloaded.

### 🏃 Run the Server

`python -m app.main # or uvicorn app.main:app --reload` 

Then open your browser at:

-   **API Docs** → [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
    
-   **Characters list** → [http://127.0.0.1:8000/characters](http://127.0.0.1:8000/characters)

### ✅ Available Endpoints

**GET**

`/characters`

Retrieve all characters (short info)

**GET**

`/characters/{id}`

Retrieve one character (detailed view)

**GET**

`/characters/featured`

Retrieve featured characters

## 🛰️ Star Folk Frontend

A modern **Lit + TypeScript + Vite** web app that displays Star Wars characters with search, featured highlights, and detailed info cards — all powered by your FastAPI backend.

----------

### 🚀 Setup
```
# 1. Move to the frontend folder
cd ../frontend

# 2. Install dependencies
npm install

# 3. Run the dev server
npm run dev
```


Your app will be available at:  
👉 [http://localhost:5173](http://localhost:5173)