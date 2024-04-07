// Entertainment app Backend System for user account creating and login
 
Project Name

Welcome to the entertainment backend System API

Overview

This project provides a simple API for user authentication and authorization. It includes endpoints for user login, user signup with encrypted passwords, and user logout functionality.


Endpoints
/api/login


Method: POST

Description: Endpoint for user login.
Request Body:
email: The email of the user.
password: The password of the user.
Response:
If login successful, returns a JSON Web Token (JWT) which should be included in subsequent requests for authentication.
/api/signup

Method: POST

Description: Endpoint for user signup.
Request Body:
name : The username of the user
email: The email of the user
password: The password of the user. (Encrypted using bcryptjs)
Response:
If signup successful, returns a success message.
/api/logout

Method: DELETE

Description: Endpoint for user logout.
Request Header:
Authorization: Bearer <JWT>
(JWT obtained during login)
Response:
If logout successful, returns a success message.

/
Method: GET

Description: Default or home path.

Technologies Used

Node.js

Express.js

bcryptjs

mongoose

JSON Web Tokens (JWT)


Contact

For any inquiries, please contact jatin3961jk@gmail.com.

