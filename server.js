require("dotenv").config();
const app = require("./src/app.js");

const PORT = process.env.DEV_PORT;

app.listen(PORT, () => {
  console.log("servidor escutando!");
});