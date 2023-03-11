require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routerApi = require("./routes");
const app = express();

app.set("port", process.env.SERVER_PORT || 4000);

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

routerApi(app);

app.listen(app.get("port"), () => {
  console.log(`Server run in server ${app.get("port")}`);
});
