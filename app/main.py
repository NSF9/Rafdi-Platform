from fastapi import FastAPI
from app.config import engine
from app.models.Base_Model import Base,TimestampMixin
from app.api.Auth_Api import router as auth_router
import logging

logging.basicConfig(
    level=logging.DEBUG,
    format="%(levelname)s - %(message)s"
)
from app.models import User, Company, Role, User_Role, Warehouse, Booking, Payment, Notification

app = FastAPI(title="Rafdi Platform")

Base.metadata.create_all(bind=engine) 

app.include_router(auth_router)