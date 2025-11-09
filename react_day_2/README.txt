Project Name: React User Dashboard
Developer: Rashmita

--------------------------------------------
Project Overview
--------------------------------------------
- This project is a React-based User Dashboard.
- It shows a list of users that come from a backend created using json-server.
- Each user’s name and email are displayed inside a card.
- The data comes dynamically from db.json instead of hardcoding it.
- I used React, Axios, json-server, and CSS to build this.

--------------------------------------------
Technologies Used
--------------------------------------------
- React → frontend framework for building UI.
- Axios → used to fetch data from backend.
- json-server → used as fake backend API.
- CSS → used for layout, colors, and styling.

--------------------------------------------
Folder Structure
--------------------------------------------
src/
  components/
    Header.jsx
    UserList.jsx
    UserCard.jsx
    Footer.jsx
  App.jsx
  App.css
db.json
package.json
vite.config.js

--------------------------------------------
What Each Component Does
--------------------------------------------
- Header.jsx → shows the project title “User Dashboard”.
- UserList.jsx → fetches data from backend and shows all users.
- UserCard.jsx → reusable component that displays each user’s name and email.
- Footer.jsx → shows the copyright text at the bottom.
- App.jsx → joins all components together in one page.

--------------------------------------------
Backend Setup
--------------------------------------------
- The db.json file acts like a database.
- Example data:
  {
    "users": [
      { "id": 1, "name": "Jubin", "email": "jubin@example.com" },
      { "id": 2, "name": "Arijit", "email": "arijit@example.com" },
      { "id": 3, "name": "Anirudh", "email": "anirudh@example.com" }
    ]
  }

- To start backend:
  1. Open terminal in project folder.
  2. Run command: json-server --watch db.json --port 5000
  3. Then open http://localhost:5000/users to see the data.

--------------------------------------------
Frontend Setup
--------------------------------------------
1. Open new terminal in VS Code.
2. Run command: npm install
3. Start the React app: npm run dev
4. Open browser → http://localhost:5173
5. Make sure both frontend and backend terminals are running.

--------------------------------------------
How It Works
--------------------------------------------
- When the page loads, useEffect() runs once.
- Axios sends GET request to backend → gets user data.
- The data is stored in useState() variable called “users”.
- React maps each user object and passes data to UserCard component.
- The UI automatically updates when data changes.

--------------------------------------------
Concepts I Learned
--------------------------------------------
- React components and props.
- State management using useState().
- Fetching data using useEffect().
- Connecting frontend with backend API.
- CSS gradients, borders, hover effects, and shadows.
- Flexbox for centering and layout.
- Composition of multiple components inside App.jsx.

--------------------------------------------
Color Palette Used
--------------------------------------------
- #FF6B71 → coral red (accent color)
- #FFF5DA → soft cream (background)
- #951F41 → dark maroon (header)
- #3A4678 → navy blue (footer and text)

--------------------------------------------
Commands Used
--------------------------------------------
- npm install react-router-dom
- npm install axios
- npm install framer-motion
- npm install -g json-server
- npm run dev → run frontend
- json-server --watch db.json --port 5000 → run backend

--------------------------------------------
Project Outcome
--------------------------------------------
- I learned how to connect React with a backend.
- I understood how state and props help in dynamic data rendering.
- I learned to design a responsive layout using CSS.
- I created a clean dashboard interface with color balance.
- I gained experience in organizing code with components.

--------------------------------------------
Next Steps (Future Ideas)
--------------------------------------------
- Add form to add new users into backend.
- Use React Router for multiple pages.
- Add animations using framer-motion.
- Edit and delete user functionality.

--------------------------------------------
End Note
--------------------------------------------
- This is my React Day 2 project.
- It helped me learn how frontend and backend connect in real projects.
- I now have a better understanding of components, props, and data flow.
