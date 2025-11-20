
# TravelEasy – React Travel Booking Front-End

This project is a **Travel Booking Front-End Application** built using **React**.
It contains a homepage, packages page, and booking form.
It also uses **json-server** as a fake backend to store travel packages and booking details.

---

##  Features Implemented

### 1. Homepage

* Beautiful hero section with background image
* Navbar for navigation
* About travel company
* Why Choose Us section
* Top Destinations displayed using reusable components

### 2. Packages Page

* Data fetched from **json-server**
* Axios used for API calls
* Packages displayed using dynamic cards
* Wishlist button included

### 3. Booking Form

* Built using **Formik**
* Validated using **Yup**
* Dropdown shows package list from json-server
* Axios POST request saves booking to `db.json`
* Clean pastel UI theme

### 4. Routing

* Implemented using **react-router-dom**
* Working pages: `/`, `/packages`, `/book`, `/contact`

### 5. PWA Support

* Includes manifest.json
* App can run offline
* Service worker registered

### 6. Custom Pastel UI Theme

* All UI colors from one color palette
* Custom CSS
* Hover effects, animation, sticky navbar

---

## Technologies Used

| Technology       | Purpose                             |
| ---------------- | ----------------------------------- |
| **React**        | Front-end framework                 |
| **React Router** | Navigation between pages            |
| **Axios**        | Fetching and posting data           |
| **Formik**       | Handling form state                 |
| **Yup**          | Form validation                     |
| **json-server**  | Fake backend / API                  |
| **CSS**          | Custom pastel UI                    |
| **PWA**          | Offline support + app-like features |

---

## Folder Structure (Simple)

```
src/
  components/
  pages/
  assets/
  styles/
  App.js
  index.js
db.json
```

---

## How to Install

###  Install all dependencies

```
npm install
```

###  Start React project

```
npm start
```

###  Start json-server

```
npx json-server --watch db.json --port 5000
```

---

## How json-server Works

* `GET http://localhost:5000/packages` → Shows list of travel packages
* `POST http://localhost:5000/bookings` → Saves booking form data

---

## **"project Explaination"**

**My project is a Travel Booking front-end application developed using React.
It has multiple pages like the homepage, packages page, and booking form.
The data for packages and bookings is handled using json-server, which works as a fake backend.
I used Axios to fetch and submit data.
The booking form is built using Formik and validated using Yup.
The UI is made with a custom pastel theme using pure CSS.
Routing is handled by react-router-dom, and the project also supports PWA features like offline mode."**

---

## **What React Components are used?**


* Functional components
* Props to pass data to child components
* State management using hooks
* useEffect for API calls
* React Router for navigation
* Reusable card components
* Custom CSS styling
* Formik + Yup for form handling

---

## **Data fetch**

**I used Axios to fetch data from json-server.
Packages are loaded using a GET request, and bookings are saved using a POST request.
Data dynamically updates on the page without reloading.**

---

## **Booking Form**

**The booking form uses Formik to manage the form state and Yup for validation.
The package dropdown is dynamically loaded from json-server.
When the user submits the form, the booking is posted into the db.json file.**

---

## **json-server**

**json-server is a lightweight backend for testing APIs.
It lets us store data in db.json and automatically creates REST APIs without writing backend code.**

---

