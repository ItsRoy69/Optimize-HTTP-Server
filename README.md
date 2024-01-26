### HTTP Server README

This README provides detailed instructions for setting up, running, and testing the HTTP server implemented in Node.js using Express.

### Table of Contents

1. [Project Structure](#project-structure)
2. [Prerequisites](#prerequisites)
3. [Running the Application](#running-the-application)
4. [Testing](#testing)
5. [Docker Support](#docker-support)
6. [Additional Notes](#additional-notes)

### Project Structure

The project structure is organized as follows:

- **Dockerfile:** Configuration for building the Docker image.
- **server.js:** Main server implementation using Express.
- **docker-compose.yml:** Docker Compose configuration for container orchestration.
- **/tmp/data:** Directory containing sample data files (e.g., 1.txt, 2.txt).

### Prerequisites

Ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 16 or later)
- [npm](https://www.npmjs.com/) (Node.js package manager)
- [Docker](https://www.docker.com/) (for Docker support)

### Running the Application

Follow these steps to run the HTTP server:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ItsRoy69/Optimize-HTTP-Server.git
   cd Optimize-HTTP-Server
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Server:**

   ```bash
   npm start
   ```

   The server will be running on [http://localhost:8080](http://localhost:8080).

### Testing

Use tools like a web browser or curl to test the server with different scenarios:

1. **Get specific line from a file:**

   ```
   http://localhost:8080/data?n=1&m=1
   ```

   Expected Response:

   ```
   { "text": "0000000000000" }
   ```

   as the files don't have much text than 0000 in just line 1 as I have imported files from 'https://code.google.com/archive/p/jquery-speedtest/downloads' and the lines are stored in one line only

2. **Get entire content of a file:**

   ```
   http://localhost:8080/data?n=1
   ```

   Expected Response:

   ```
   { "text": "00000000000000..." }
   ```

   as the files don't have much text than 0000 as I have imported files from 'https://code.google.com/archive/p/jquery-speedtest/downloads'

### Docker Support

## If you prefer running the server in a Docker container, follow these steps:

1. **Build Docker Image:**

   ```bash
   docker build -t http-server .
   ```

2. **Run Docker Container:**

   ```bash
   docker run -p 8080:8080 --memory=1500m --cpus=2 http-server
   ```

---



1. **OR JUSE USE:**

```
docker-compose up -d
```

---

### Additional Notes

- The server is configured to expose the application on port 8080.
- Ensure that you have the necessary permissions to read files from the `/tmp/data` directory.
