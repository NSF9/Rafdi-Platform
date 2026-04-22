# app/api/name_api.py

from fastapi import APIRouter
from pydantic import BaseModel
from app.services.name_service import NameService
from app.Repo.name_repo import NameRepo
from app.config import SessionLocal

router = APIRouter()

class NameRequest(BaseModel):
    name: str

@router.post("/names")
def add_name(req: NameRequest):
    try:
        db = SessionLocal()
        repo = NameRepo(db)
        service = NameService(repo)

        service.add_name(req.name)

        db.close()
        return {"Hello": "a"}

    except Exception as e:
        return {"error": str(e)}