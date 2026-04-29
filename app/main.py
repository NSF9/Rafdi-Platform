from fastapi import FastAPI
from app.config import engine, Base
app = FastAPI()
Base.metadata.create_all(bind=engine)