Joi : 
- Validation based on schema.
- Easy to define nested object structures 
- Good for complex validation 
Steps for implementation : 
Step 1: npm install joi
Step 2: Create a schema 
Step 3: Validate request.body
Step 4: Pass or Reject request

Steps for implementation : 
Step 1: npm Install express-validator
Step 2: Add validation checks eg ( check(“email”).is Email())
Step 3: Use middleware validationResult to extract errors.
 
Best practices : 
Group validation rules  in a separate file.
Send unified error messages to front end
Avoid sending raw library error messages.

validation-demo/
│
├── package.json
├── server.js                # Main server file
│
├── routes/
│   └── userRoutes.js        # Signup route using Joi + Express-Validator
│
├── joi/
│   ├── schema.js            # Joi schema definitions
│   └── joiMiddleware.js     # Joi validation middleware
│
├── express-validator/
│   ├── userValidation.js    # Validation rules (check())
│   └── validateResult.js    # Extract validation errors
│
└── controllers/
    └── userController.js    # Logic if validation passes