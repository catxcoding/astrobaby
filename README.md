# ASTROBABY: A MERN Stack Single-Page Application

Welcome to ASTROBABY, an innovative e-commerce platform designed specifically for expecting parents, family, and friends. Our unique approach integrates astrology into the shopping experience, offering personalized product recommendations based on the astrological signs of upcoming newborns. From clothing and toys to nursery decorations, ASTROBABY ensures that every gift you choose aligns with the stars.

## Project Overview

ASTROBABY is built with the modern MERN stack - MongoDB, Express.js, React, and Node.js, featuring a GraphQL API for efficient data handling. This single-page application (SPA) is designed to be intuitive, responsive, and user-centric, ensuring a seamless shopping experience from browsing to checkout.

## Key Features

-   **Astrology-Based Product Recommendations**: Curate products based on astrological signs for a personalized touch.
-   **User Authentication**: Secure login and user account management with JWT.
-   **Dynamic Shopping Cart**: Users can add, update, and remove products from their cart.
-   **Stripe Integration**: A secure and straightforward checkout process powered by Stripe.
-   **Favorites & Registry**: Users can save favorites and create a registry, ideal for gift planning.
-   **Responsive Design**: A polished UI that's responsive across all devices.

## Technologies Used

-   Frontend: React
-   Backend: Node.js, Express.js
-   Database: MongoDB with Mongoose ODM
-   API: GraphQL for queries and mutations
-   Authentication: JWT
-   Payment Processing: Stripe
-   Deployment: Heroku

## Links

-   [GitHub Repository](https://github.com/codingxcat/ASTROBABY)
-   [Deployed Application on Heroku](https://astrobaby.herokuapp.com/)

## Collaborators

-   Cat
-   Jackie
-   Alan
-   Andres

## Getting Started

### Prerequisites

Ensure you have the following installed:

-   Node.js
-   npm
-   MongoDB

### Installation

1. **Clone the repository**

```bash
   git clone https://github.com/<your-username>/ASTROBABY.git
   cd ASTROBABY
```

2. **Install Backend Dependencies**

```bash
    cd server
    npm install
```

3. **Install Frontend Dependencies**

```bash
    cd ../client
    npm install
```

4. **Configure environment variables**
    - In the server directory, create a .env file with the following contents:

```bash
    MONGO_URI=<Your_MongoDB_URI>
    JWT_SECRET=<Your_JWT_Secret>
    STRIPE_SECRET_KEY=<Your_Stripe_Secret_Key>
```

### Running the Application

1. **Start the backend server**

```bash
    cd server
    npm start
```

2. **Launch the frontend application**

```bash
   npm run dev
```

## Deployment

ASTROBABY is deployed on Heroku. TBD

## License

ASTROBABY is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for details.

## Resources

-   Tutoring
