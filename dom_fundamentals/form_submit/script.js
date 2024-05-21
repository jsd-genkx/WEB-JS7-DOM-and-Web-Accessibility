document.getElementById("form").addEventListener("submit", function (event) {
	event.preventDefault();
	const imageFileEl = document.getElementById("imageFile");
	const imageFile = imageFileEl.files[0];
	const imageCaption = document.getElementById("imageCaption").value.trim();
	const errorMessage = document.getElementById("errorMessage");

	if (!imageFile) {
		errorMessage.textContent =
			"Please select an image file (.jpeg, .jpg or .png).";
		return;
	}

	const validTypes = ["image/jpeg", "image/png"];
	if (imageFile && !validTypes.includes(imageFile.type)) {
		const errorMsgEl = document.getElementById("errorMessage");
		errorMsgEl.textContent = `Your file: ${imageFile.name} is invaid file type.\nPlease select a valid image file (.jpeg, .jpg or .png).`;
		imageFileEl.value = "";
		return;
	}

	if (imageCaption.length < 3 || imageCaption > 255) {
		errorMessage.textContent =
			"Please describe your image (at least 3 characters, and not over 255 characters).";
		return;
	}
});

// document
// 	.querySelector('button[type="reset"]')
// 	.addEventListener("click", function () {
// 		const errorMessage = document.getElementById("errorMessage");
// 		errorMessage.textContent = "";
