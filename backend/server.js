const express = require("express");
const cors = require("cors");

const { readdirSync } = require("fs");

const app = express();

readdirSync("./routes").map((r) => app.use("/", require(`./routes/${r}`)));

app.use(cors());

app.listen(8000, () => {
  console.log("server is listening...");
});
