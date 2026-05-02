from app.Repo import UserRoleRepo
from app.Repo import Role_Repo
from app.Dtos import UserRoleCreate


class RoleAssignmentService:

    def __init__(self, user_role_repo: UserRoleRepo, role_repo: Role_Repo):
        self.user_role_repo = user_role_repo
        self.role_repo      = role_repo

    def assign_role(self, user_id: int, account_type: str) -> None:
        role = self.role_repo.get_by_name(account_type)
        if role:
            self.user_role_repo.add(UserRoleCreate(
                RolesID = role.RolesID,
                UserID  = user_id,
            ))