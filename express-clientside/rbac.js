// -------------------------------------------------------------
// ROLE BASED ACCESS CONTROL (RBAC) – CLEAN WORKING VERSION
// -------------------------------------------------------------

const express = require("express");
const app = express();
const PORT = 3000;

// -------------------------------------------------------------
// Step 1: Define users and their assigned roles
// -------------------------------------------------------------
const users = {
    alice:   { role: "admin" },
    bob:     { role: "editor" },
    charlie: { role: "viewer" }
};

// -------------------------------------------------------------
// Step 2: Define the permissions for each role
// -------------------------------------------------------------
const rolesPermissions = {
    admin:  ["read", "write", "delete"],
    editor: ["read", "write"],
    viewer: ["read"]
};

// -------------------------------------------------------------
// Step 3: Middleware to check permissions
// -------------------------------------------------------------
function checkPermission(action) {
    return (req, res, next) => {

        // IMPORTANT: req.get() makes header case-insensitive
        const username = req.get("username");

        // Check if username exists and is valid
        if (!username || !users[username]) {
            return res.status(401).send("Unauthorized: User not found");
        }

        const userRole = users[username].role;
        const allowedActions = rolesPermissions[userRole];

        // If user does not have permission for this action
        if (!allowedActions.includes(action)) {
            return res.status(403).send("Forbidden: You do not have permission to perform this action");
        }

        // User has permission → continue
        next();
    };
}

// -------------------------------------------------------------
// Step 4: Protected Routes
// -------------------------------------------------------------

// READ → admin, editor, viewer
app.get("/read", checkPermission("read"), (req, res) => {
    res.send("This is a read operation");
});

// WRITE → admin, editor
app.post("/write", checkPermission("write"), (req, res) => {
    res.send("This is a write operation");
});

// DELETE → admin
app.delete("/delete", checkPermission("delete"), (req, res) => {
    res.send("This is a delete operation");
});

// -------------------------------------------------------------
// Step 5: Start the Server
// -------------------------------------------------------------
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
