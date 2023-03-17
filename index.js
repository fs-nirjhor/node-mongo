const express = require("express");
const app = express();
const port = 3000;

	const mobile = {name: 'mobile', quantity: 4, price: 12000};
	const laptop = {name: "Dell", quantity: 5, price: 25000};
	const products = [mobile,laptop];
	
app.get("/", (req, res) => {
  res.send(products);
});

app.get("/laptop", (req, res) => {
	res.send(laptop);
}); 

const users = ["Farhan", "Sadik", 'Nirjhor', 'Jhor', 'Shaila', 'Ferdous', 'Labonno'];

app.get("/users/:id", (req, res) => {
	console.log(req.query); 
	//localhost:3000/users/4?sort=name&lang=eng
	const user = users[req.params.id];
	res.send(user);
});

app.listen(port, () => {
  console.log(`Farhan's node express listening on port ${port}`);
});
