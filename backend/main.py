from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle

with open("model.pkl", "rb") as f:
  model, vectorizer = pickle.load(f)

app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:5173"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

class EmailInput(BaseModel):
  text: str

@app.post("/classify")
async def classify_email(email: EmailInput):
  X_count = vectorizer.transform([email.text])
  prediction = model.predict(X_count)
  classification = "spam" if prediction[0] == 1 else "ham"
  return {"classification": classification}
