from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.DTOs.Auth_DTOs import RegisterCreate
from app.DTOs.User_DTOs import UserResponse
from app.Repo import UserRepo, CompanyRepo
from app.services.user_service import UserService
from app.config import get_db

router = APIRouter(prefix="/auth", tags=["Auth"])


def get_user_service(db: Session = Depends(get_db)) -> UserService:
    return UserService(
        user_repo    = UserRepo(db),
        company_repo = CompanyRepo(db),
    )

@router.post("/register", response_model=UserResponse)
def register(
    data   : RegisterCreate,
    service: UserService = Depends(get_user_service)
):
    try:
        return service.register(data)
    
    except ValueError as e:
        
        raise HTTPException(status_code=400, detail=str(e))