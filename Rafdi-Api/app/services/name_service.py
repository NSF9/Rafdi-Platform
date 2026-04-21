# app/services/name_service.py

class NameService:
    def __init__(self, repo):
        self.repo = repo

    def add_name(self, name):
        if not name:
            raise ValueError("Name required")
        self.repo.add_name(name)