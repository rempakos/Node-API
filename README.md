
# Node-API

# nodejs-mongodb-crud-api
This is a RESTful CRUD API developed with Node.js, MongoDB, Express, and Mongoose. The API provides endpoints for creating, reading, updating, and deleting data in a MongoDB database. It follows the principles of Representational State Transfer (REST) and allows clients to interact with the server using standard HTTP methods.

**Features**

Create new records in the database
Retrieve records based on specified criteria
Update existing records in the database
Delete records from the database
Technologies Used

Node.js: A JavaScript runtime for server-side development
MongoDB: A NoSQL database for storing data
Express: A web application framework for Node.js
Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js
Getting Started
To use this API, you will need to have Node.js and MongoDB installed on your computer. Clone the repository and navigate to the project directory. Install the dependencies by running **npm install**. Make sure your MongoDB server is running. You can configure the database connection in the project's configuration file. Once everything is set up, start the API by running npm start or node app.js.

**Endpoints**
The API exposes the following endpoints:

GET /api/records - Retrieve all records<br>
GET /api/records/:id - Retrieve a specific record by ID<br>
POST /api/records - Create a new record<br>
PUT /api/records/:id - Update a specific record by ID<br>
DELETE /api/records/:id - Delete a specific record by ID<br>

**Contribution**
Contributions to this project are welcome. Please fork the repository and make a pull request with your changes.

**License**
_Null_

# Done!