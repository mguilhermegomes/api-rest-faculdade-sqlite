const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const path = require("path");
const router = require("./routes/routes.js");
const manipuladorPaginaNaoEncontrada = require("./middlewares/manipuladorPaginaNaoEncontrada.js");
const manipuladorErros = require("./middlewares/manipuladorErros.js");

const app = express();
app.use(express.json());

const swaggerDocument = YAML.load(path.join(__dirname, "../swagger.yaml"));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

router(app);
app.use(manipuladorPaginaNaoEncontrada);
app.use(manipuladorErros);

module.exports = app;
