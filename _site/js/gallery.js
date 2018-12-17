// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.
function activateGallery() {
	let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
	let mainImage = document.querySelector("#gallery-photo img");
	
	thumbnails.forEach(function(thumbnail) {
		// Preload large images.
		let newImageSrc = thumbnail.dataset.largeVersion;
		let largeVersion = new Image();
		largeVersion.src = newImageSrc;	
			
		thumbnail.addEventListener("click", function() {
			// Preload large images.
			let newImageSrc = thumbnail.dataset.largeVersion;
			let largeVersion = new Image();
			largeVersion.src = newImageSrc;

			// Set clicked image as main image.
			
			let newImageAlt = thumbnail.alt;

			mainImage.setAttribute("src", newImageSrc);
			mainImage.setAttribute("alt", newImageAlt);

			// Change which image is current.
			document.querySelector(".current").classList.remove("current");
			thumbnail.parentNode.classList.add("current");

			// Update image info.
			let galleryInfo = document.querySelector("#gallery-info");
			let title = galleryInfo.querySelector(".title");
			let description = galleryInfo.querySelector(".description");
			title.innerHTML = thumbnail.dataset.title;
			description.innerHTML = thumbnail.dataset.description;
		});
	});
}
