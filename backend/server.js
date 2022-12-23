const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv").config();
const { readdirSync } = require("fs");
const app = express();

app.use(cors());
app.use(express.json());

//routes
readdirSync("./routes").map((r) => app.use("/", require(`./routes/${r}`)));

//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
