from peewee import *

settings = {'host': 'localhost','user': 'root', 'password': 'Aa1002020!'}
db = MySQLDatabase('netDrive', **settings)

class BaseModel(Model):
    class Meta:
        database = db

class Folder(BaseModel):
    name = CharField(max_length = 64, unique = True)

def create_all_tables():
    db.connect()
    db.create_tables([Folder])

if __name__ == '__main__':
    create_all_tables()