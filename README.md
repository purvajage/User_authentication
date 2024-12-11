# User Authentication Project

This project is a simple **user authentication system** built using **Node.js, Express, and MongoDB**. It includes features such as user registration, login, password encryption, and JSON Web Token (JWT) authentication. The application is structured as a microservice that can be easily integrated with other applications.

## Features

- **User Registration**: Allows users to register with email and password.
- **User Login**: Authenticates users with email and password.
- **Password Encryption**: Passwords are securely stored using bcrypt encryption.
- **JWT Authentication**: Issues JWT tokens to authenticate users for accessing protected routes.
- **Unique Users**: Ensures that users cannot register with the same email or mobile number.
- **Two-Factor Authentication (Optional)**: Email-based 2FA for increased security.
- **Password Change Alerts**: Sends an email to remind users to change their password regularly.

## Prerequisites

- **Node.js**: Make sure Node.js is installed. You can download it from [here](https://nodejs.org/).
- **MongoDB**: Use a local MongoDB server or sign up for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud-based database management.
- **Nodemailer**: For email sending functionality (for 2FA, password reminders, etc.).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/user-authentication-nodejs-mongo.git
   cd user-authentication-nodejs-mongo
