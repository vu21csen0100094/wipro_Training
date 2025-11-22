// -------------------------------------------------------------
// Here we will implement Login API that returns JWT token
// -------------------------------------------------------------
//
// Step 1: Basic Express server setup
// Step 2: Create a dummy user (hardcoded username & password)
// Step 3: Create a login route that accepts username & password
// Step 4: Validate the credentials
// Step 5: If valid → generate JWT token using secret key
// Step 6: If invalid → return error message
//
// -------------------------------------------------------------

const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// -------------------------------------------------------------
// This secret key is used to SIGN the JWT token.
// It converts user info into a secure token string.
// NOTE: In real apps, keep secret keys in environment variables.
// -------------------------------------------------------------
const SECRET_Key = 'My_secret_key2123';

// Parse JSON request body
app.use(bodyParser.json());

// -------------------------------------------------------------
// Step 2: Create a dummy user
// Only these credentials will generate JWT token
// -------------------------------------------------------------
const dummyUser = {
    username: 'testuser',
    password: 'Login@123'
};

// -------------------------------------------------------------
// Step 3: Create login route
// -------------------------------------------------------------
app.post('/login', (req, res) => {
    
    const { username, password } = req.body;

    // ---------------------------------------------------------
    // Step 4: Validate user credentials
    // ---------------------------------------------------------
    if (username === dummyUser.username && password === dummyUser.password) {
        
        // -----------------------------------------------------
        // Step 5: Generate JWT token using jwt.sign()
        // This token will expire in 1 hour
        // -----------------------------------------------------
        const token = jwt.sign(
            { username: dummyUser.username },  // payload
            SECRET_Key,                       // secret key
            { expiresIn: '1h' }               // token expiry
        );

        return res.json({ token });  // send token to client
    }

    // ---------------------------------------------------------
    // Step 6: Wrong username or password
    // ---------------------------------------------------------
    res.status(401).json({ error: 'Invalid credentials' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
