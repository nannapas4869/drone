const modal_group = document.getElementById("readMoreModal_group");
const readMoreBtn_group = document.querySelector(".read-more");
const closeModal_group = document.querySelector(".close-modal");

// Show the modal when the "อ่านเพิ่มเติม" button is clicked
readMoreBtn_group.addEventListener("click", function () {
  modal_group.style.display = "block";
});

// Close the modal when the close button is clicked
closeModal_group.addEventListener("click", function () {
  modal_group.style.display = "none";
});

// Close the modal when clicking outside the modal content
window.addEventListener("click", function (event) {
  if (event.target === modal_group) {
    modal_group.style.display = "none";
  }
});