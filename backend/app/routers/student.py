from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from fastapi import HTTPException, status

from .. import models, schemas, database, oauth2

router = APIRouter(
    prefix = "/students",
    tags = ["Students"]
)

@router.post("/")
def create_student(
    student: schemas.StudentCreate,
    db: Session = Depends(database.get_db),
    current_user: models.User = Depends(oauth2.get_current_user)

):
    if current_user.role != "admin":
        raise HTTPException(
            status_code = status.HTTP_403_FORBIDDEN,
            detail = "Only admins can create students"
        )
    
    new_student = models.Student(
        name = student.name,
        age = student.age,
        email = student.email,
        course = student.course,
        user_id = current_user.id
    )

    db.add(new_student)
    db.commit()
    db.refresh(new_student)

    return new_student

@router.get("/")
def get_students(
    db: Session = Depends(database.get_db),
    current_user: models.User = Depends(oauth2.get_current_user)

):
    students = db.query(models.Student).all()
    return students

@router.get("/{id}")
def get_student(
    id: int,
    db: Session = Depends(database.get_db),
    current_user: models.User = Depends(oauth2.get_current_user)
):
    student = db.query(models.Student).filter(models.Student.id == id).first()

    if not student:
        return {"message": "Student not found"}
    
    return student
    

@router.put("/{id}")
def update_student(
    id: int,
    student: schemas.StudentCreate,
    db: Session = Depends(database.get_db),
    current_user: models.User = Depends(oauth2.get_current_user)

):
    
    if current_user.role != "admin":
        raise HTTPException(
            status_code = status.HTTP_403_FORBIDDEN,
            detail = "Only admin can update students"
        )
    
    student_query = db.query(models.Student).filter(models.Student.id == id)
    student_db = student_query.first()

    if student_db is None:
      return {"message": "student not found"}

    student_query.update(student.dict(), synchronize_session = False)


    db.commit()
    return {"message": "Student updated successfully"}

@router.delete("/{id}")
def delete_student(
    id: int,
    db: Session = Depends(database.get_db),
    current_user: models.User = Depends(oauth2.get_current_user)
):
    if current_user.role != "admin":
        raise HTTPException(
            status_code = status.HTTP_403_FORBIDDEN,
            detail = "only admin can delete students"
        )

    student_query = db.query(models.Student).filter(models.Student.id == id)
    student_db = student_query.first()

    if  student_db is None:
        return {"message": "Student not found"}
    
    student_query.delete(synchronize_session = False)
    db.commit()

    return {"message" : "Student deleted successfully"}


