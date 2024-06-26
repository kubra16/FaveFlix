# FaveFlix

## Introduction

FaveFlix is a web application that allows users to search for movies, create personalized movie lists, and share them with others. This project is built using the MERN stack (MongoDB, Express, React, Node.js) and uses the OMDB API for fetching movie data.

## Features

- User authentication (Sign Up/Sign In)
- Movie search functionality
- Create, view, and manage movie lists
- Public and private list options

## Installation

### Prerequisites

- Node.js
- MongoDB

### Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/kubra16/FaveFlix.git
   cd faveflix
   ```

2. **Backend Setup:**

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file with the following variables:
     ```
     MONGO_URI=your_mongo_database_uri
     JWT_SECRET=your_jwt_secret
     OMDB_API_KEY=your_omdb_api_key
     ```
   - Start the backend server:
     ```bash
     npm start
     ```

3. **Frontend Setup:**

   - Navigate to the frontend directory:
     ```bash
     cd client
     ```
   - Install dependencies:
     ```bash
     npm install
     ```
   - Create a `.env` file with the following variable:
     ```
     REACT_APP_BASE_URL=http://localhost:5000/
     ```
   - Start the frontend development server:
     ```bash
     npm start
     ```

4. **Access the application:**
   - Open your browser and go to `http://localhost:3000`
