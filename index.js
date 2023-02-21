const express = require("express");
const routes = require("./routes")
const sequelize = require('./config/connection');
const cors = require("cors")


// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;
// Requiring our models for syncing

// // Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

app.use(cors())

app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
    });
});