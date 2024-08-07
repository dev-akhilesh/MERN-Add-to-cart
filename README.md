# Food Delivery Site

## Overview

This project is a food delivery application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and styled using Tailwind CSS. The application allows users to explore food products, add items to a cart The site is responsive and includes a modern design with a mobile-friendly navbar.

## Features

- **Home Page:** Features a hero section, additional cards highlighting various services, and a call-to-action section.
- **Products Page:** Lists available food items with details and an option to add them to the cart.
- **Cart Page:** Displays added items with options to adjust quantities, remove items, and clear the cart.
- **Responsive Design:** Adapts to different screen sizes with a sticky and mobile-friendly navbar.
- **Mobile Menu:** A collapsible menu for mobile devices that allows easy navigation.

## Technologies Used

- **Frontend:**
  - React.js
  - Tailwind CSS
  - React Router
  - Axios

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB

## Getting Started

### Prerequisites

- Node.js and npm (or Yarn)
- MongoDB instance

## Installation

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/dev-akhilesh/MERN-Add-to-cart.git
    cd MERN-Add-to-cart
    ```


2. **Install backend dependencies:**
    Navigate to the backend directory and run:
    ```bash
    cd backend
    npm install
    ```
3. **Install frontend dependencies:**
    Navigate to the frontend directory and run:
    ```bash
    cd frontend
    npm install
    ```

4. **Set up environment variables:**
  Create a .env file in the backend directory with the following variables:
    ```env
    MONGO_PASSWORD = "your_mongo_password"
    ```
5. **Start the development servers:**

   Open two terminals. In the first terminal, navigate to the backend directory and start the backend server:
     ```bash
     cd backend
     npm start
     ```

    In the second terminal, run the frontend development server:
    ```bash
    cd frontend
    npm run dev
    ```
The frontend server will be available at http://localhost:5173/ and the backend server at http://localhost:8080.

## Usage
Home Page: Navigate to the home page to explore featured food items and additional services.
Products Page: View and browse available products. Add items to your cart.
Cart Page: Adjust quantities, remove items, or clear the cart.
