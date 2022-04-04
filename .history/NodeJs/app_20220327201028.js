//imports
require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const multer = require("multer");
const cors = require("cors");


//* => middleware
app.use(cors());
app.use(express.json());

//* MongoDB
require("./MongoDB_conn");
const PORT = process.env.PORT || 4000;