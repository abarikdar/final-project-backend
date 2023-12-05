const express = require("express");
const app = express();
const port = 8000;
const cors = require('cors');

const db = require("./database/db"); 

const indexRouter = require("./routes/index");

app.use(cors());

app.use(express.json());

app.use("/", indexRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

db.sync().then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
}).catch(error => {
    console.error('Unable to connect to the database:', error);
});
