from __future__ import annotations
from typing import TYPE_CHECKING

from app.models.Base_Model import Base, TimestampMixin
from sqlalchemy import ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

if TYPE_CHECKING:
    from app.models.Role_Model import Role
    from app.models.User_Model import User
    
class User_Role(TimestampMixin, Base):
    __tablename__ = "user_roles"
 
    RolesID: Mapped[int] = mapped_column(ForeignKey("roles.RolesID"), primary_key=True)
    UserID : Mapped[int] = mapped_column(ForeignKey("users.UserID"), primary_key=True)
 
    role: Mapped["Role"] = relationship(back_populates="user_roles")
    user: Mapped["User"] = relationship(back_populates="user_roles")