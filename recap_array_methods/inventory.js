const inventory = [
	{
		id: 1,
		name: "Sneakoscope",
		description:
			"A small, round object that whistles when it detects sneakiness nearby.",
		quantity: 100,
		price: 10.99,
	},
	{
		id: 2,
		name: "Remembrall",
		description: "A glass ball that turns red when you've forgotten something.",
		quantity: 50,
		price: 24.99,
	},
	{
		id: 3,
		name: "Invisibility Cloak",
		description: "A magical cloak that renders the wearer invisible.",
		quantity: 20,
		price: 15.5,
	},
	{
		id: 4,
		name: "Felix Felicis",
		description: "A magical potion that brings good luck to the drinker.",
		quantity: 75,
		price: 5.25,
	},
	{
		id: 5,
		name: "Portkey",
		description:
			"An enchanted object that transports anyone touching it to a specific location.",
		quantity: 30,
		price: 8.75,
	},
	{
		id: 6,
		name: "Time-Turner",
		description: "A magical device used for time travel.",
		quantity: 40,
		price: 19.99,
	},
	{
		id: 7,
		name: "Pensieve",
		description: "A stone basin used for viewing memories.",
		quantity: 60,
		price: 12.49,
	},
	{
		id: 8,
		name: "Extendable Ears",
		description:
			"Magical ears that allow the user to eavesdrop on conversations from a distance.",
		quantity: 90,
		price: 7.99,
	},
	{
		id: 9,
		name: "Portus",
		description: "A charm that can turn an ordinary object into a Portkey.",
		quantity: 25,
		price: 29.99,
	},
	{
		id: 10,
		name: "Omnioculars",
		description:
			"Magical binoculars that enhance the viewing experience of Quidditch matches.",
		quantity: 55,
		price: 11.25,
	},
];

// Racap Array Methods
// Using .forEach() --> Printing the names of each inventory item
const printInventoryList = (key) => {
	console.log(`${key} of inventory items`);
	inventory.forEach((item, index) => {
		console.log(`${index + 1}: ${Object.values(item[key]).join("")}`);
	});
};
// printInventoryList("name");

const randomCouponCode = () => {
	return Math.random().toString(16).slice(2, 8).toUpperCase();
};

// Using .forEach() --> Adding a new key-value pair to each inventory item
const addKeyValue = (key, value) => {
	// console.log("typeof value", typeof value);
	if (typeof value !== "function") {
		inventory.forEach((item) => (item[key] = value));
	}
	if (typeof value === "function") {
		inventory.forEach((item) => (item[key] = value()));
	}
};

// addKeyValue("isAvailable", true);
addKeyValue("couponCode", randomCouponCode);

// console.log(inventory);

// Using .map() --> Extracting prices of each inventory item
const itemPrices = inventory.map((item) => item.price);
// console.log("Prices of inventory items:", itemPrices);

// Using .map() --> Calulating discount based on prices and insert discount into each inventory item
const discountPercent = () => {
	return inventory.map((item) => {
		if (item.price <= 10) {
			return (item.discount = 0);
		}
		if (item.price <= 20) {
			return (item.discount = 0.1);
		}
		if (item.price > 20) {
			return (item.discount = 0.2);
		}
	});
};
const discounts = discountPercent();

// console.log(discounts);
// console.log(inventory);

// Using .map() --> Calulating promotion price based on prices and discounts and insert promotion price into each inventory item
const promotionPrice = () => {
	return inventory.map((item) => {
		return (item.promotionPrice = +(item.price * (1 - item.discount)).toFixed(
			2
		));
	});
};
promotionPrice();
// console.log(inventory);

// Using .find() --> Finding an item by its ID
const itemIdToFind = 3;
let foundItem = inventory.find((item) => item.id === itemIdToFind);
// console.log("Item found by ID:", foundItem);

// Using .find() --> Finding an items that price > 10
foundItem = inventory.find((item) => item.price > 10.99);
// console.log("Items found by price > 10.99", foundItem);

// Using .filter() --> Filtering items with prices greater than a threshold
const priceThreshold = 15;
const expensiveItems = inventory.filter((item) => item.price > priceThreshold);
// console.log("Expensive items (price > $15):", expensiveItems);

// Using .reduce() --> Calculating total value of all items
const totalValue = inventory.reduce(
	(acc, item) => acc + item.price * item.quantity,
	0
);

// Formatting the total value as currency
const formattedTotalValue = new Intl.NumberFormat("en-US", {
	style: "currency",
	currency: "USD",
}).format(totalValue);

console.log("Total value of all items:", formattedTotalValue);

// console.log(inventory);
