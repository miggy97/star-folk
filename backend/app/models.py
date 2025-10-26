from sqlalchemy import Column, Integer, String, JSON, Boolean
from .database import Base

class Character(Base):
    __tablename__ = "characters"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    gender = Column(String)
    homeworld = Column(String)
    side = Column(String)
    birth_year = Column(String)
    films = Column(JSON)
    short_description = Column(String)
    description = Column(JSON)      # ✅ structured JSON
    featured = Column(Boolean, default=False)
