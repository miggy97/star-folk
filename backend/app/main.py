from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from .database import SessionLocal, engine
from .models import Base, Character
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(title="Star Wars Characters API")

# ✅ Allow requests from your frontend (I know this is not correct for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- 1. List all characters (light info)
@app.get("/characters")
def get_characters(db: Session = Depends(get_db)):
    characters = db.query(Character).all()
    return [
        {
            "id": c.id,
            "name": c.name,
            "short_description": c.short_description,
            "side": c.side,
            "birth_year": c.birth_year,
        }
        for c in characters
    ]

# --- 2. Featured characters
@app.get("/characters/featured")
def get_featured_characters(db: Session = Depends(get_db)):
    featured = db.query(Character).filter(Character.featured == True).all()
    return [
        {
            "id": c.id,
            "name": c.name,
            "side": c.side,
        }
        for c in featured
    ]

# --- 3. Get character detail
@app.get("/characters/{character_id}")
def get_character(character_id: int, db: Session = Depends(get_db)):
    character = db.query(Character).filter(Character.id == character_id).first()
    if not character:
        raise HTTPException(status_code=404, detail="Character not found")
    return character


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="127.0.0.1", port=8000, reload=True)
