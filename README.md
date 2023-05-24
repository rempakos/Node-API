
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
This project is released under the MIT License.



# Getting Started
To use this API, you will need to have Node.js , mongoose & express dependencies installed on your computer.In addition you must have a mongo database configured.Follow the steps below to set up and run the API:

**i)Clone the repository to your local machine.<br>**
**ii)Navigate to the project directory.<br>**
**iii)Install the dependencies by running the command **npm install mongoose,mongoose,dotenv**.<br>**
![tutorial_2](https://github.com/rempakos/Node-API/assets/44623491/fe4c8400-b57a-4db2-b02d-b4c40e225ff1)

<br>
<br>
**Once everything is set up, start the API by running: **npm run serve** or npm run dev if you have cross-env installed.<br>**

![tutorial_1](https://github.com/rempakos/Node-API/assets/44623491/89877d0c-1989-440b-a524-81f12bbe42a2)

From then on you should be able to see your webdatabase hosted locally on port 3000!<br>

![tutorial_3](https://github.com/rempakos/Node-API/assets/44623491/a7a7265a-e3ee-4a8d-95df-3f141fc07c13)<br>

![tutorial_4](https://github.com/rempakos/Node-API/assets/44623491/5a50cd68-10bd-4755-ad30-7af33241ad18)<br>

![tutorial_5](https://github.com/rempakos/Node-API/assets/44623491/ace7b1c6-ba59-4e9f-8f29-b0454d917bea)
<br>


**You can test your database's CRUD operation, using software such as Insomnia or Postman as seen below**<br>

![tutorial_6](https://github.com/rempakos/Node-API/assets/44623491/426177de-6685-49ed-b2db-05aec60ab26c)


