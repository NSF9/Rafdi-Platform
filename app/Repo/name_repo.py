# app/Repo/name_repo.py

from app.models.name import Name

class NameRepo:
    def __init__(self, db):
        self.db = db

    def add_name(self, name):
        new_name = Name(name=name)
        self.db.add(new_name)
        self.db.commit()
        print("COMMITTED ✅")