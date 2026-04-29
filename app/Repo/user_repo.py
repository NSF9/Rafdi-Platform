from abc import ABC, abstractmethod
class user_repo(ABC):
        
        @abstractmethod
        def add(self, obj):
            pass
        
        @abstractmethod
        def update(self):
              pass
        
        @abstractmethod
        def get_by_id(self,userid):
              pass
        
        @abstractmethod
        def get_all(self):
              pass