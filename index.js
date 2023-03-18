const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(cors());
// parse application/json
app.use(bodyParser.json());

const mobile = { name: "Xiaomi", price: 12000 };
const laptop = { name: "Dell", price: 25000 };
const products = [mobile, laptop];

app.get("/", (req, res) => {
  res.send(products);
});

app.get("/laptop", (req, res) => {
  res.send(laptop);
});

const users = [
  "Farhan",
  "Sadik",
  "Nirjhor",
  "Jhor",
  "Shaila",
  "Ferdous",
  "Labonno",
];

app.get("/users/:id", (req, res) => {
   // console.log("query", req.query);
  //localhost:3000/users/4?sort=name&lang=eng
  const id = req.params.id;
  const user = users[id];
  res.send({id, user});
});

app.post("/addUser", (req, res) => {
	// save to database 
	console.log("post", req.body);
	const user = req.body ;
	user.id = 5 ;
	res.send(user);
});

app.listen(port, () => {
  console.log(`Farhan's node listening on port ${port}`);
});
