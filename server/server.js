const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
const axios = require('axios');

// add your endpoints here

app.get("/", (request, response) => response.json("Root route for translation"))

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));