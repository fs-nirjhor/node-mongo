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

app.listen(port, () => {
  console.log(`Farhan's node express listening on port ${port}`);
});
