// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
    {
		name: " Orange (1.00 $)",
		lactoseFree: true,
		nutFree: true,
        organic: true,
		price: 1.00
	},
	{
		name: " Brocoli (1.99 $)",
		lactoseFree: true,
		nutFree: true,
        organic: true,
		price: 1.99
	},
    {
		name: " Oatmeal (2.00 $)",
		lactoseFree: true,
		nutFree: true,
        organic: false,
		price: 2.00
	},
    {
		name: " Bread (2.35 $)",
		lactoseFree: true,
		nutFree: true,
        organic: true,
		price: 2.35
	},
    {
		name: " Yogurt (3.00 $)",
		lactoseFree: false,
		nutFree: true,
        organic: true,
		price: 3.00
	},
    {
		name: " Grapes (3.00 $)",
		lactoseFree: true,
		nutFree: true,
        organic: true,
		price: 3.00
	},
    {
		name: " Milk (4.00 $)",
		lactoseFree: false,
		nutFree: true,
        organic: true,
		price: 4.00
	},
    {
		name: " Ice Cream (5.00 $)",
		lactoseFree: false,
		nutFree: true,
        organic: false,
		price: 5.00
	},
    {
		name: " Cashew (5.00 $)",
		lactoseFree: true,
		nutFree: false,
        organic: true,
		price: 5.00
	},
    {
		name: " Almond Milk (5.00 $)",
		lactoseFree: true,
		nutFree: false,
        organic: false,
		price: 5.00
	},
	{
		name: " Salmon (10.00 $)",
		lactoseFree: true,
		nutFree: true,
        organic: true,
		price: 10.00
	},
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "LactoseFree") && (prods[i].lactoseFree == true)){
			product_names.push(prods[i].name + prods[i].price + "$");
		}
		else if ((restriction == "NutFree") && (prods[i].nutFree == true)){
			product_names.push(prods[i].name);
		}
        else if ((restriction == "Organic") && (prods[i].organic == true)){
			product_names.push(prods[i].name);
		}
		else if (restriction == "None"){
			product_names.push(prods[i].name);
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