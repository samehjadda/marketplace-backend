# Market place - backend

## Backend

The backend server is set up using Hapi.js, a rich framework for building applications and services. It utilizes an array of routes to handle various endpoints in the application, encapsulating logic for handling different requests.

The server uses a MySQL database for storing and retrieving data, and utilizes the mysql library to facilitate this interaction. The database operations are abstracted into functions such as connect, query, and end, to maintain a clean and readable codebase.

## Firebase Authentication

For user management, Firebase Authentication has been integrated into the system. This allows users to securely sign in and sign out, and protects user data from unauthorized access.

## Babel

Babel is used to transpile the ES6+ JavaScript code to ensure compatibility with older JavaScript engines. Babel presets and plugins have been configured to ensure the transpiled code is optimized and runs smoothly.

## Error Handling

The server also includes robust error handling features. The process listens for unhandledRejection and SIGINT events, ensuring any unhandled promise rejections or manual shutdowns are handled gracefully. In the case of an error, the server logs the error and terminates the process. For a manual shutdown, it stops the server and disconnects the database connection.

This is a project that leverages a range of modern web technologies to deliver a secure, robust, and efficient marketplace application.

## Technologies Used

The project employs a range of technologies:<br>

* Node.js and Babel: For modern JavaScript syntax and backend logic. <br>
* Firebase Authentication: For user authentication and secure access. <br>
* MySQL: For robust data storage and management.

## Images
Check my market place frontend repo for images
