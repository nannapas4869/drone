// document.addEventListener("DOMContentLoaded", () => {
//     const thumbnailsContainer = document.getElementById("thumbnails");
//     const mainImage = document.getElementById("main-image");
//     const addImageForm = document.getElementById("add-image-form");
//     const imageUploadInput = document.getElementById("image-upload");
//     const errorMessage = document.getElementById("error-message");
//     const maxImages = 10;

//     let currentIndex = 0;

//     // Function to update the main image when a thumbnail is clicked
//     function updateMainImage(thumbnail) {
//         const thumbnails = document.querySelectorAll(".thumbnail");

//         // Remove active class from all thumbnails
//         thumbnails.forEach((thumb) => thumb.classList.remove("active"));

//         // Set the clicked thumbnail as active
//         thumbnail.classList.add("active");

//         // Update the main image source
//         mainImage.src = thumbnail.src;
//     }

//     // Add a new image to the carousel
//     addImageForm.addEventListener("submit", (event) => {
//         event.preventDefault();

//         const thumbnails = document.querySelectorAll(".thumbnail");

//         // Check if max images limit is reached
//         if (thumbnails.length >= maxImages) {
//             errorMessage.style.display = "block";
//             return;
//         }

//         errorMessage.style.display = "none"; // Hide error message if any

//         const file = imageUploadInput.files[0];
//         if (file) {
//             const reader = new FileReader();

//             reader.onload = function (e) {
//                 // Create a new thumbnail
//                 const newThumbnail = document.createElement("img");
//                 newThumbnail.src = e.target.result; // Base64 encoded image
//                 newThumbnail.alt = `Thumbnail ${thumbnails.length + 1}`;
//                 newThumbnail.className = "thumbnail";
//                 newThumbnail.dataset.index = thumbnails.length;

//                 // Add click event to the new thumbnail
//                 newThumbnail.addEventListener("click", () => updateMainImage(newThumbnail));

//                 // Append the thumbnail to the container
//                 thumbnailsContainer.appendChild(newThumbnail);

//                 // Automatically select the newly added thumbnail
//                 updateMainImage(newThumbnail);

//                 // Clear the file input
//                 imageUploadInput.value = "";
//             };

//             // Read the image file as a data URL
//             reader.readAsDataURL(file);
//         }
//     });

//     // Auto-Slide Logic (updated to 3 seconds)
//     setInterval(() => {
//         const thumbnails = document.querySelectorAll(".thumbnail");
//         if (thumbnails.length === 0) return;

//         currentIndex = (currentIndex + 1) % thumbnails.length;

//         const nextThumbnail = thumbnails[currentIndex];
//         updateMainImage(nextThumbnail);
//     }, 1500); // 3000ms = 3 seconds
// });


// ด้านบนมีไว้เพื่อต่อกับหลังบ้านค่ะ

document.addEventListener("DOMContentLoaded", () => {
    const thumbnails = document.querySelectorAll(".thumbnail");
    const mainImage = document.getElementById("main-image");
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");

    let currentIndex = 0;
    let interval;

    // Function to update the main image and highlight the active thumbnail
    function updateMainImage(index) {
        thumbnails.forEach((thumb) => thumb.classList.remove("active")); // Remove active class
        mainImage.src = thumbnails[index].src; // Update main image source
        thumbnails[index].classList.add("active"); // Add active class to current thumbnail
        currentIndex = index; // Update current index
    }

    // Function to move to the next image
    function nextImage() {
        const newIndex = (currentIndex + 1) % thumbnails.length; // Loop back to start
        updateMainImage(newIndex);
    }

    // Function to move to the previous image
    function prevImage() {
        const newIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length; // Loop back to end
        updateMainImage(newIndex);
    }

    // Event listeners for Next and Previous buttons
    nextButton.addEventListener("click", () => {
        nextImage();
        resetInterval(); // Reset the auto-slide interval
    });

    prevButton.addEventListener("click", () => {
        prevImage();
        resetInterval(); // Reset the auto-slide interval
    });

    // Event listener for thumbnails
    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            updateMainImage(index);
            resetInterval(); // Reset the auto-slide interval
        });
    });

    // Function to start the auto-slide interval
    function startInterval() {
        interval = setInterval(nextImage, 3000); // Auto-slide every 1.5 seconds
    }

    // Function to reset the auto-slide interval
    function resetInterval() {
        clearInterval(interval); // Clear existing interval
        startInterval(); // Start a new interval
    }

    // Start auto-slide on page load
    startInterval();
});
