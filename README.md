Star Folk Backend

A simple FastAPI backend with a preloaded SQLite database containing Star Wars characters.

🚀 Setup
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

🧠 Initialize the database
python -m app.seed_data


This creates a local starwars.db file with all characters preloaded.

🏃 Run the server
python -m app.main
# or
uvicorn app.main:app --reload


Then open your browser at:

API Docs → http://127.0.0.1:8000/docs

Characters list → http://127.0.0.1:8000/characters

✅ Available Endpoints
Method	Endpoint	Description
GET	/characters	Retrieve all characters (short info)
GET	/characters/{id}	Retrieve one character (detailed view)
GET	/characters/featured	Retrieve featured characters