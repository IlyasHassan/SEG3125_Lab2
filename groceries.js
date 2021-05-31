// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
    {
		name: " Orange",
		lactoseFree: true,
		nutFree: true,
        organic: true,
		price: 1.55
	},
	{
		name: " Brocoli",
		lactoseFree: true,
		nutFree: true,
        organic: true,
		price: 1.99
	},
    {
		name: " Oatmeal",
		lactoseFree: true,
		nutFree: true,
        organic: false,
		price: 2.35
	},
    {
		name: " Bread",
		lactoseFree: true,
		nutFree: true,
        organic: true,
		price: 2.99
	},
    {
		name: " Yogurt",
		lactoseFree: false,
		nutFree: true,
        organic: true,
		price: 3.55
	},
    {
		name: " Grapes",
		lactoseFree: true,
		nutFree: true,
        organic: true,
		price: 3.95
	},
    {
		name: " Milk",
		lactoseFree: false,
		nutFree: true,
        organic: true,
		price: 4.25
	},
    {
		name: " Ice Cream",
		lactoseFree: false,
		nutFree: true,
        organic: false,
		price: 5.35
	},
    {
		name: " Cashew",
		lactoseFree: true,
		nutFree: false,
        organic: true,
		price: 5.55
	},
    {
		name: " Almond Milk",
		lactoseFree: true,
		nutFree: false,
        organic: false,
		price: 5.99
	},
	{
		name: " Salmon",
		lactoseFree: true,
		nutFree: true,
        organic: true,
		price: 10.55
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name + " (" + prods[i].price + " $)");
        }
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name + " (" + prods[i].price + " $)");
		}
        else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name + " (" + prods[i].price + " $)");
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name + " (" + prods[i].price + " $)");
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}