from fastapi import FastAPI
from app.database import engine
from app import models
from app.routers import auth
from app import oauth2
from app.routers import student
from fastapi import Depends
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()



origins = [
    "http://localhost:3000",
    "https://ubiquitous-gnome-35f9f5.netlify.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

app.include_router(auth.router)
app.include_router(student.router)


@app.get("/")
def root():
    return {"message": "Student Management System API"}

@app.get("/profile")
def profile(current_user: models.User = Depends(oauth2.get_current_user)):

    return {
        "message": "You are logged in",
        "username": current_user.username,
        "role": current_user.role
    }

#venv\Scripts\activate

print("AUTH ROUTER LOADED")