# app/models/name.py
from sqlalchemy import Column, Integer, String
from app.config import Base

class Name(Base):
    __tablename__ = "names"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100))