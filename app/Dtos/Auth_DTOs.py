from pydantic import BaseModel, EmailStr
from app.Enums.EnumTypes import AccountTypeEnum

class RegisterCreate(BaseModel):

    company_name            : str
    commercial_registration : str
    account_type            : AccountTypeEnum
 
    email   : EmailStr
    password: str
 
 
class LoginCreate(BaseModel):
    email   : EmailStr
    password: str
 
 
class TokenResponse(BaseModel):
    access_token: str
    token_type  : str = "bearer"