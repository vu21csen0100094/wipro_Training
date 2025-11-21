# Express Form + MongoDB Project

This project is a simple form built using Express.js where user details are submitted and stored inside MongoDB Compass.

## Steps to Create the Project

1. Create a new folder:
   mkdir express-form-mongo
   cd express-form-mongo

2. Initialize npm:
   npm init -y

3. Install required packages:
   npm install express mongoose ejs

4. Create the project structure:
   - server.js
   - views/form.ejs
   - models/User.js

## How MongoDB Was Connected

Inside server.js we connected MongoDB using:
mongoose.connect("mongodb://127.0.0.1:27017/formDB")

This creates a database named "formDB" in MongoDB Compass.

Make sure MongoDB Compass and MongoDB service are running before starting the server.

## How the Form Works

1. User opens the form at http://localhost:4000
2. User fills name, email, phone, etc.
3. Form sends data to /register using POST
4. The server receives data, saves it to MongoDB using Mongoose
5. Displays: "Registration successful for <name>"

## How to Run the Project

1. Start the server:
   node server.js

2. Visit the form:
   http://localhost:4000

3. Submit and check MongoDB Compass for saved data.

