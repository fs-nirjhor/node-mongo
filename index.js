const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World By FS Nirjhor");
});

app.listen(port, () => {
  console.log(`Farhan's Example app listening on port ${port}`);
});
