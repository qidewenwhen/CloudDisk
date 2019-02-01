from peewee import *

settings = {'host': 'localhost','user': 'root', 'password': 'Aa1002020!'}
db = MySQLDatabase('test', **settings)

class User(Model):
    name = CharField()

    class Meta:
        database = db

def create_all_tables():
    db.connect()
    db.create_tables([User])

if __name__ == '__main__':
    create_all_tables()
    user1 = User.create(name = "TOM")
    user1.save()
    users = User.select()
    for user in users:
        print(user.name)
    
    tom = User.select().where(User.name == "TOM").get()
    tom.name = 'Tommy'
    tom.save()
    print("--------------")
    users = User.select()
    for user in users:
        print(user.name)
    tom.delete().execute()
    print("--------------")
    users = User.select()
    for user in users:
        print(user.name)