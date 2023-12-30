document.addEventListener("DOMContentLoaded", function () {
  // Get all the li elements
  var listItems = document.querySelectorAll(".directory-item li");

  // Add click event listener to each li
  listItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Remove the 'active' class from all li elements
      listItems.forEach(function (li) {
        li.classList.remove("active");
      });

      // Add the 'active' class to the clicked li
      item.classList.add("active");

      // Fetch images based on the clicked category
      var category = item.textContent.trim().toLowerCase();
      fetchImages(category);
    });
  });

  // Fetch default images on page load
  fetchImages("laptop");
});

function fetchImages(category) {
  // Clear existing images
  var directoryImages = document.querySelector(".directory-images");
  directoryImages.innerHTML = "";

  // Fetch multiple images based on the category
  let startIdx, endIdx;
  if (category === "laptop") {
    startIdx = 0;
    endIdx = 9;
  } else if (category === "nature") {
    startIdx = 10;
    endIdx = 19;
  }else if (category === "random") {
    startIdx = 0;
    endIdx = 25;
    }

  for (let i = startIdx; i <= endIdx; i++) {
    fetch(`https://picsum.photos/id/${i}/200/300`)
      .then((response) => response.url)
      .then((imageUrl) => {
        // Create img element with class "directory-image"
        var imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.alt = `Image ${i}`;
        imgElement.classList.add("directory-image"); // Add the class

        // Append img element to directoryImages
        directoryImages.appendChild(imgElement);
      })
      .catch((error) => console.error("Error fetching image:", error));
  }
}
