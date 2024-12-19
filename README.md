
# Netflix Clone Backend API

This is a complete backend API for a Netflix Clone built with Node.js and Express.js. It provides all the necessary routes and endpoints for user authentication, movie management, search functionality, and more. The API includes JWT-based authentication, role-based access control, and CRUD operations for Users, Movies, Lists, and Search History. 


 - Deploy on Render: https://netflix-clone-x8t5.onrender.com
____________________________________________________




## Tech Stack

- Node.js (Server-side runtime)
- Express.js (Web framework)
- MongoDB (NoSQL database)
- JWT (jsonwebtoken) (For authentication)
- Bcrypt.js (For password hashing)



## Features

- User Authentication: Register, Login, Get All Users.
- Movies: Create, Read, Update, Delete movies.
- Lists: Manage user lists (like watchlists) with full CRUD operations.
- Search: Search for movies, TV shows, and people from the TMDB API.
- Search History: Track user search history and allow them to delete items from it.
___________________________________________________


## Setup

1. Clone the Repository

```bash
 https://github.com/VaghaniAxita/Netflix_Clone
```

2. Navigate to the Project Directory:

```bash
  cd backend  
```

3. Run the server:
```bash
  nodemon
```




# Routes

### User Authentication Routes
  
  **Register  User**

- Route:POST /api/auth/register
- Description: Register a new user
- Request Body:
```bash
  {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "123456"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
 {
    "message": "User registered successfully",
}
```

**User Login**

- Route: POST /api/auth/login
- Description:Login a user and receive a JWT token.
- Request Body:
```bash
 {
  "email": "john@example.com",
  "password": "123456"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 {
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3NjJkNDE1MTJlZGY0ZjU1M2ZiNTViMyIsImlhdCI6MTczNDUzMDExOSwiZXhwIjoxNzM3MTIyMTE5fQ.GuvWtrmShK-1v7hOfBmPvL1T74g3BT2varjMnStFEeg",
 "user": {
    "_id": "63f8fce8f35f2d00128d7baf",
    "username": "john_doe",
    "email": "john@gmail.com",
    "isAdmin": false
  }
 }
```

**Get All User**

- Route: GET /api/auth/users
- Description:Get a list of all registered users.
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
 [
  {
    "_id": "63f8fce8f35f2d00128d7baf",
    "username": "john_doe",
    "email": "john@gmail.com",
    "isAdmin": false
  },
  {
    "_id": "63f8fce8f35f2d00128d7bbf",
    "username": "jane_doe",
    "email": "jane@gmail.com",
    "isAdmin": true
  }
]
```
### Movie Routes

**Create a new movie**

- Route:POST /api/movies/
- Request Body:  
```bash
{
  "title": "Inception",
  "description": "A mind-bending thriller",
  "image": "image_url.jpg",
  "trailer": "trailer_url.mp4",
  "genre": "Sci-Fi",
  "year": "2010"
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
{
  "message": "Movie created successfully!",
  "movie": {
    "_id": "63f8fce8f35f2d00128d7baf",
    "title": "Inception",
    "description": "A mind-bending thriller",
    "genre": "Sci-Fi",
    "year": "2010"
  }
}
```

**Get All Movies**

- Route:GET /api/movies/
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
[
  {
    "_id": "63f8fce8f35f2d00128d7baf",
    "title": "Inception",
    "genre": "Sci-Fi",
    "year": "2010"
  },
  {
    "_id": "63f8fce8f35f2d00128d7bbf",
    "title": "Interstellar",
    "genre": "Sci-Fi",
    "year": "2014"
  }
]
```

**Get Specific Movie**

- Route:GET /api/movies/:id
- Request Body:
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "_id": "63f8fce8f35f2d00128d7baf",
  "title": "Inception",
  "genre": "Sci-Fi",
  "year": "2010"
}
```
**Update Existing Movie**

- Route:PUT /api/movies/:id
- Request Body:
```bash
 {
  "title": "Inception Updated",
  "genre": "Sci-Fi Thriller"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "message": "Movie updated successfully!"
}
```
**Delete Movie**

- Route:DELETE /api/movies/:id
- Request Body:
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "message": "Movie deleted successfully!"
}
```

###  List Routes

**Create New List**

- Route:POST /api/lists/
- Request Body:  
```bash
{
  "title": "My Favorite Movies",
  "content": ["Inception", "Interstellar", "The Matrix"]
}
```
- Sample Response:
  - Status: 201 Created
   - Body:
```bash
{
  "message": "List created successfully!"
}
```

**Get All Lists**

- Route:GET /api/lists/
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
[
  {
    "_id": "63f8fce8f35f2d00128d7baf",
    "title": "My Favorite Movies",
    "content": ["Inception", "Interstellar", "The Matrix"]
  }
]
```

**Get Specific List**

- Route:GET /api/lists/:id
- Request Body:
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "_id": "63f8fce8f35f2d00128d7baf",
  "title": "My Favorite Movies",
  "content": ["Inception", "Interstellar", "The Matrix"]
}
```
**Update List**

- Route:PUT /api/lists/:id
- Request Body:
```bash
 {
  "title": "My New Favorite Movies"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "message": "List updated successfully!"
}
```
**Delete List**

- Route: DELETE /api/lists/:id
- Request Body:
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "message": "List deleted successfully!"
}
```

### Search Routes

**Search Movie**

- Route:GET /api/search/movie/:query
- Sample Response:
  - Status: 200 Created
   - Body:
```bash
{
  "results": [
    {
      "id": 123,
      "title": "Inception",
      "poster_path": "/poster.jpg"
    }
  ]
}
```

**Search TV Show**

- Route:GET /api/search/tv/:query
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "results": [
    {
      "id": 456,
      "name": "Breaking Bad",
      "poster_path": "/poster.jpg"
    }
  ]
}
```

**Get Search History**

- Route: GET /api/search/history
- Request Body:
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
[
  {
    "id": 123,
    "title": "Inception",
    "searchType": "movie"
  },
  {
    "id": 456,
    "title": "Breaking Bad",
    "searchType": "tv"
  }
]
```
**Delete an Item from Search History**

- Route:DELETE /api/search/history/:id
- Request Body:
```bash
{
  "message": "Item removed from search history"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "message": "List updated successfully!"
}
```

### User Routes

**Get user by ID**

- Route:GET /api/users/:id
- Sample Response:
  - Status: 200 Created
   - Body:
```bash
{
  "_id": "63f8fce8f35f2d00128d7baf",
  "username": "john_doe",
  "email": "john@gmail.com",
  "isAdmin": false
}
```

**Update a User**

- Route:PUT /api/users/:id
- Request Body:
```bash
{
  "username": "john_updated"
}
```
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "message": "User updated successfully!"
}
```

**Delete User**

- Route: DELETE /api/users/:id
- Sample Response:
  - Status: 200 OK
   - Body:
```bash
{
  "message": "User deleted successfully!"
}
```




