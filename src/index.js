require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const routerApi = require("./routes");
const app = express();

app.set("port", process.env.SERVER_PORT || 4000);

app.use(morgan("dev"));
app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routerApi(app);

app.listen(app.get("port"), () => {
  console.log(`Server run in server ${app.get("port")}`);
});
