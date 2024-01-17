# Chat Application

## Overview

This is a simple chat application with a backend server and a React frontend. The backend is built with Node.js and Express, using Socket.IO for real-time communication. The frontend is developed with React to provide a user interface for joining rooms and sending messages.

## Backend

### Technologies Used

- **Node.js**: A JavaScript runtime for building the server.
- **Express**: A web application framework for Node.js.
- **Socket.IO**: A library for real-time web applications, enabling bidirectional communication between clients and the server.

### Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/chat-application.git
   ```

2. Navigate to the backend directory:

   ```bash
   cd chat-application/backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the server:

   ```bash
   npm start
   ```

   The server will be running at `http://localhost:3001`.

### API Endpoints

- **GET /get_available_rooms**: Get the list of available rooms.
- **POST /join_room**: Join a specific room.
- **POST /send_message**: Send a message to a specific room.

## Frontend

### Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Socket.IO Client**: The client library for Socket.IO to enable real-time communication with the server.

### Setup

1. Navigate to the frontend directory:

   ```bash
   cd chat-application/frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the React app:

   ```bash
   npm start
   ```

   The React app will be accessible at `http://localhost:3000`.

### Usage

- Enter a room name in the input field.
- Click "Join room" to join the specified room.
- Send messages within the joined room using the message input field.

## Contributing

Feel free to contribute to the development of this project. Create a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
