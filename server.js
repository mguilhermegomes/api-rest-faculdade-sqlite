require("dotenv").config();
const app = require("./src/app.js");

const PORT = process.env.DEV_PORT || 3000;

app.listen(PORT, () => {
  console.log("Iniciando conexão com o banco...");
  console.log("Conexão estabelecida com sucesso!");
});