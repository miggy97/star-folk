from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from .database import SessionLocal, engine
from .models import Base, Character

app = FastAPI(title="Star Wars Characters API")

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
        }
        for c in characters
    ]

# --- 2. Get character detail
@app.get("/characters/{character_id}")
def get_character(character_id: int, db: Session = Depends(get_db)):
    character = db.query(Character).filter(Character.id == character_id).first()
    if not character:
        raise HTTPException(status_code=404, detail="Character not found")
    return character

# --- 3. Featured characters
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

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="127.0.0.1", port=8000, reload=True)
