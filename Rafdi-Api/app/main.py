from fastapi import FastAPI
from app.api.name_api import router
from app.config import engine, Base
app = FastAPI()
Base.metadata.create_all(bind=engine)
app.include_router(router)
