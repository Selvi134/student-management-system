from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True)
    username = Column(String(100),unique=True)
    email = Column(String(100),unique=True)
    password = Column(String(200))
    role = Column(String(50))

    students = relationship("Student", back_populates="user",uselist=False)


class Student(Base):
    __tablename__ = "students"

    id = Column(Integer, primary_key=True)
    name = Column(String(100))
    age = Column(Integer)
    email = Column(String(100))
    course = Column(String(100))

    user_id = Column(Integer, ForeignKey("users.id"))

    user = relationship("User", back_populates="students")