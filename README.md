# applause-challenge

## Tech Requirements

In order to run this locally, you will need to be able to create and connect to a local MySQL database.

## Setup Instructions

- Clone this repo and open in VS Code 
- Open a terminal window at root level of directory
- run `npm i` to install dependencies
  - cors
  - dotenv
  - express
  - mysql2
  - sequelize
- open the mysql shell and execute the command `SOURCE db/schema.sql;` to create a new db with the name "bugs_db"
- create a .env file following the .env.EXAMPLE template that includes your personal mysql credentials and the db name which should be "bugs_db"
- run `npm run seeds` to create tables based on the models and seed the database. The seed data includes ~600k bug records so might take a minute
- **NOTE**: if you are running Node v18+, you may have to change your host in the connection file. Change from `localhost` to `127.0.0.1` on line 14 in config/connection.js if you get some sort of connection refused error
- Once tables have been created and the data inserted, run `npm start` to start the server (defaults to PORT 3001 which is where all fetch requests are routed). If you need to change the PORT, also change the baseUrl on line 1 of public/assets/js/script.js.
- Once the server is listening, open the index.html file in your default browser. This html page serves as the UI for this application, and should enable you to query testers based on country and device