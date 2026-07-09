const express = require("express");
const router = require("./routes/routes.js");
const manipuladorErros = require("./middlewares/manipuladorErros.js");

const app = express();

app.use(express.json());
router(app);
app.use(manipuladorErros);

module.exports = app;
