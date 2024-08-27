# Chat App Backend

Welcome to the **Chat App Backend** repository! This project provides the backend infrastructure for a real-time chat application, utilizing Node.js, Express, and MongoDB. It supports user authentication, real-time messaging with Socket.io, and integrates various third-party services for enhanced functionality.

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) and npm
- [MongoDB](https://www.mongodb.com/) instance (local or cloud)
- [Postman](https://www.postman.com/) for API testing

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/surendranath-chakraborty
surendranath-chakraborty/chat-app-backend.git
   cd chat-app-backend
   
# 🛠️ Features

Real-Time Communication: Uses Socket.io to handle real-time messaging.
Database Integration: Connects to MongoDB using Mongoose.
User Authentication: Supports authentication using JWT.
CORS and Sessions: Configured with express-session and cors.
Third-Party Integrations: Includes setup for Mailtrap, Razorpay, PayPal, Google SSO, and GitHub SSO.

# 📋 API Endpoints

Base URL
The base URL for all endpoints is http://localhost:8080/api.

Example Endpoints
GET /api/messages: Retrieve chat messages.
POST /api/messages: Send a new chat message.
Testing Endpoints
Open Postman.
Set the HTTP Method (GET, POST, etc.) and input the endpoint URL (e.g., http://localhost:8080/api/messages).
Configure headers and body as required.
Send the request and review the response.

# 🧪 Testing

Use Postman to test the API endpoints. Configure your requests according to the example endpoints provided above.

# 💡 What I Learned

Node.js and Express: Set up a Node.js server with Express, handling routes and middleware.
MongoDB and Mongoose: Connected and interacted with MongoDB using Mongoose for database operations.
Real-Time Communication: Implemented real-time messaging with Socket.io.
Authentication: Managed user authentication and session handling with JWT and express-session.
Integration: Configured third-party services for email, payments, and SSO.
Testing: Used Postman to test and validate API endpoints.

# 🤝 Contributing

Feel free to fork this repository and submit pull requests. For issues or feature requests, please open an issue.

