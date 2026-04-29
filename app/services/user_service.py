from typing import Optional
import base64
import os
 
from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.pbkdf2 import PBKDF2HMAC
 
from app.Repo import user_repo, Companey_Repo
from app.DTOs.User_DTOs import UserResponse, UserUpdate
from app.DTOs.Auth_DTOs import RegisterCreate
 
 
class UserService:
 
    def __init__(self, user_repo: user_repo, company_repo: Companey_Repo):
        self.user_repo    = user_repo
        self.company_repo = company_repo

    def register(self, data: RegisterCreate) -> UserResponse:
        try:
            company = self.company_repo.add(data)

            password_hash = self._hash_password(data.password)
            user = self.user_repo.add(data, password_hash, company.CompanyID)

            return UserResponse.model_validate(user)

        except Exception as e:
            self.user_repo.db.rollback()
            raise ValueError(str(e))
    
    def _hash_password(self, password: str) -> str:
        salt = os.urandom(16)
        kdf  = PBKDF2HMAC(
            algorithm  = hashes.SHA256(),
            length     = 32,
            salt       = salt,
            iterations = 480000,
        )
        key = base64.urlsafe_b64encode(kdf.derive(password.encode()))
        return f"{base64.urlsafe_b64encode(salt).decode()}${key.decode()}"