from typing import Optional
from sqlalchemy.orm import Session
 
from app.Repo.Base_Repo import BaseRepo
from app.models import Role
from app.Dtos import RoleCreate, RoleUpdate

class RoleRepo(BaseRepo[Role]):
 
    def __init__(self, db: Session):
        super().__init__(db)
 
    def get_by_id(self, id: int) -> Optional[Role]:
        return self.db.query(Role).filter(Role.RolesID == id).first()
 
    def get_by_name(self, name: str) -> Optional[Role]:
        return self.db.query(Role).filter(Role.RoleName == name).first()
 
    def get_all(self) -> list[Role]:
        return self.db.query(Role).all()
 
    def add(self, obj: RoleCreate) -> Role:
        role = Role(RoleName=obj.RoleName)
        self.db.add(role)
        self.db.flush()
        self.db.refresh(role)
        return role
 
    def update(self, id: int, obj: RoleUpdate) -> Optional[Role]:
        role = self.get_by_id(id)

        if not role:
            return None
        
        if obj.RoleName:
            role.RoleName = obj.RoleName
            
        self.db.commit()
        self.db.refresh(role)
        return role
 
    def delete(self, id: int) -> None:
        role = self.get_by_id(id)
        if role:
            self.db.delete(role)
            self.db.commit()