
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

GET /events - Retrieve all events and filter
GET /events/:id - Retrieve an event by ID
POST /events - Create a new event
PUT /events/:id - Update an event by ID
DELETE /events/:id - Delete an event by ID
DELETE /events - Delete multiple events based on filters
PUT /events - Update multiple events based on filters

**Contribution**
Contributions to this project are welcome. Please fork the repository and make a pull request with your changes.

**License**
_Null_

**Getting Started**
To use this API, you will need to have Node.js installed and your MongoDB must be configured correctly in their website. Follow the steps below to set up and run the API:

i)Clone the repository to your local machine.<br>
ii)Navigate to the project directory.<br>
iii)Install the npm dependencies by running the command **npm install mongoose,express,dotenv**.<br>
![tutorial_2](https://github.com/rempakos/Node-API/assets/44623491/244c1e42-810b-4fd2-833e-d686dbf0b653)

Once everything is set up, start the API by running **npm run serve**.<br>
![tutorial_1](https://github.com/rempakos/Node-API/assets/44623491/a39b085f-cc28-446a-926f-f5d85662310e)

Thats it your server should be up and running in your local host on port 3000!<br>
![tutorial_3](https://github.com/rempakos/Node-API/assets/44623491/7550c77b-6c49-4a20-a1a7-ba2db400894b)
![tutorial_4](https://github.com/rempakos/Node-API/assets/44623491/e0100e17-0a0b-4c19-9655-a3b6b87a4654)
![tutorial_5](https://github.com/rempakos/Node-API/assets/44623491/a95899e3-bf12-4326-9891-63a059dd0162)

You can test the functionality of your crud operations in software such as insomnia as seen below.
![tutorial_6](https://github.com/rempakos/Node-API/assets/44623491/8edfbed7-e785-422c-8849-5c8a48e64c7e)


# Done!
