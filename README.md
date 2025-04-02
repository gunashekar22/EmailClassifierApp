# EmailClassifierApp

## Overview
EmailClassifierApp is a web application that detects whether an email is **spam** or **ham** (not spam) using a machine learning model. The project consists of a **FastAPI backend** for email classification and a **React frontend** for a user-friendly interface.

The model used for classification is **Multinomial Naive Bayes**, optimized for text classification tasks. The application allows users to input email text and receive a classification result in real-time.

## Features
- Classifies emails as spam or ham with high accuracy.
- Simple and intuitive React-based frontend.
- FastAPI backend for efficient API handling.
- Pre-trained Multinomial Naive Bayes model.

## Project Structure
```
EmailClassifierApp/
├── backend/
│   ├── main.py           # FastAPI backend code
│   ├── model.pkl         # Pre-trained model and vectorizer
│   ├── requirements.txt  # Backend dependencies
├── frontend/
│   ├── src/
│   │   ├── App.jsx       # Main React app
│   │   ├── EmailClassifier.jsx  # Component for classification
│   │   ├── App.css       # Global styles
│   │   └── styles/
│   │       └── EmailClassifier.css  # Component styles
│   ├── public/
│   └── package.json      # Frontend dependencies
├── .gitignore            # Git ignore file
└── README.md             # Project documentation
```

## Model Details
- **Algorithm**: Multinomial Naive Bayes
- **Training**: The model was trained on a dataset of labeled emails (spam and ham) using a vectorizer to convert text into numerical features. The pre-trained model and vectorizer are saved in `model.pkl`.

## Prerequisites
Ensure you have the following installed:
- **Python 3.8+** (for the backend)
- **Node.js 16+** (for the frontend)
- **Git** (for version control)

## Installation and Setup

### 1. Clone the Repository
```sh
git clone https://github.com/<your-username>/EmailClassifierApp.git
cd EmailClassifierApp
```

### 2. Backend Setup
```sh
cd backend
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```
Backend will be available at `http://localhost:8000`.

### 3. Frontend Setup
```sh
cd frontend
npm install
npm run dev
```
Frontend will be available at `http://localhost:5173`.

## Usage
1. Open the frontend (`http://localhost:5173`).
2. Enter an email text and classify it.
3. View the result: **spam** or **ham**.

## Example
- **Spam Email**:
  ```
  Congratulations!!! You’ve won a $1000 gift card!!! Click here to claim.
  ```
  **Expected Output**: `spam`
  ![Screenshot 2025-04-02 155714](https://github.com/user-attachments/assets/362b6ffd-a4de-42b9-afd3-8250d38dd291)


- **Ham Email**:
  ```
  Hi Sarah, I hope you’re doing well! Want to grab coffee this weekend?
  ```
  **Expected Output**: `ham`
  ![Screenshot 2025-04-02 155516](https://github.com/user-attachments/assets/e98ae597-5bcc-4bf9-bdf4-54078332bd14)


