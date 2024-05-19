let products = [];
let productId = 1;
const defaultImageUrl = "./images/default-product.jpg";

function addProduct() {
	// Use querySelector to get the input values (input value is a string)
	const productName = document.querySelector("#productName").value;
	const productDescription = document.querySelector(
		"#productDescription"
	).value;
	const quantity = document.querySelector("#quantity").value;
	const unitPrice = document.querySelector("#unitPrice").value;
	const image = document.querySelector("#image").value || defaultImageUrl;

	// Create a new product object
	const product = {
		id: productId++,
		name: productName,
		description: productDescription,
		quantity: parseInt(quantity, 10),
		unitPrice: parseFloat(unitPrice).toFixed(2),
		image: image,
	};

	// Add the product to the products array
	products.push(product);

	// Render the product
	renderProduct(product);

	// Clear the form after saving
	document.querySelector("#productForm").reset();
}

function renderProduct(product) {
	const productList = document.querySelector("#productList");

	// Create product container
	const productItem = document.createElement("div");
	productItem.className =
		"p-4 bg-white rounded-lg shadow-md flex items-center space-x-4";

	// Create checkbox element
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.className = "form-checkbox h-5 w-5 accent-pink-600 ";
	checkbox.addEventListener("change", updateTotalValue);

	// Create image element
	const img = document.createElement("img");
	img.src = product.image;
	img.alt = product.name;
	img.className = "w-16 h-16 object-cover rounded-lg";

	// Create product details container
	const productDetails = document.createElement("div");
	productDetails.className = "flex-1";

	// Create product name element
	const productName = document.createElement("h3");
	productName.className = "text-lg font-semibold";
	productName.textContent = product.name;

	// Create product description element
	const productDescription = document.createElement("p");
	productDescription.className = "text-gray-500";
	productDescription.textContent = product.description;

	// Create product quantity element
	const productQuantity = document.createElement("p");
	productQuantity.className = "text-gray-500";
	productQuantity.textContent = `Quantity: ${product.quantity}`;

	// Create product unit price element
	const productUnitPrice = document.createElement("p");
	productUnitPrice.className = "text-gray-500";
	productUnitPrice.textContent = `Unit Price: $${product.unitPrice}`;

	// Append product details to the product details container
	productDetails.appendChild(productName);
	productDetails.appendChild(productDescription);
	productDetails.appendChild(productQuantity);
	productDetails.appendChild(productUnitPrice);

	// Append checkbox, image, and product details to the product item container
	productItem.appendChild(checkbox);
	productItem.appendChild(img);
	productItem.appendChild(productDetails);

	// Append product item to the product list
	productList.appendChild(productItem);
}

function updateTotalValue() {
	let totalValue = 0;

	// Get all product items
	const productItems = document.querySelectorAll("#productList > div");

	// Iterate over product items to calculate total value for selected products
	productItems.forEach((item) => {
		const checkbox = item.querySelector('input[type="checkbox"]');
		if (checkbox.checked) {
			const quantity = parseInt(
				item
					.querySelector("p:nth-child(3)")
					.textContent.replace("Quantity: ", ""),
				 10
			);
	
			const unitPrice = parseFloat(
				item
					.querySelector("p:nth-child(4)")
				 .textContent.replace("Unit Price: $", "")
			);
			totalValue += quantity * unitPrice;
		}
	});

	// Formatting the total value as currency
	const formattedTotalValue = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(totalValue);

	// Update the total value in the inventory total value container
	document.querySelector("#totalValue").textContent = formattedTotalValue;
}

// document.addEventListener("DOMContentLoaded", () => {
// 	// Check if there are existing products in the array
// 	if (products.length > 0) {
// 		products.forEach((product) => {
// 			renderProduct(product);
// 		});
// 	}
// });
