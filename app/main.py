from fastapi import FastAPI
from app.config import engine
from app.models.Base_Model import Base
from app.api.Auth_Api import router as auth_router

from app.models import User, Company, Role, User_Role, Warehouse, Booking, Payment, Notification

app = FastAPI(title="Rafdi Platform")

Base.metadata.create_all(bind=engine) 

app.include_router(auth_router)