const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config(); //this config method write all the variables in the env file to the process.env and then we can call each variable in anywhere we want

app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", tasks);
app.use();

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("Server listening on port 3000");
    });
  } catch (error) {
    console.log(error);
  }
};

start();
