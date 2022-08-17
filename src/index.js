//First, grab the ramen-menu div that stores the ramen images.
const ramenMenu = document.getElementById("ramen-menu");

//Then you need to request the data from the server to get all of the ramen objects-
//- to pass into your functions
function getRamen() {
  fetch("http://localhost:3000/ramens")
    .then((res) => res.json())
    .then((data) => console.log(data));
}
getRamen();

//After that you'll need to display the image for each of the ramen using an img tag inside of the-
//- ramen-menu div
function displayRamen(ramen) {
  const ramenImg = document.createElement("img");
  const detailImg = document.querySelector(".detail-image src");
  const ramenName = document.querySelector("h2");
  const restaurant = document.querySelector(".restaurant");
  const rating = document.querySelector("span #rating-display");
  const comment = document.querySelector("p #comment-display");

  //setting innertext equal to object keys
  ramenName.textContent = ramen.name;
  restaurant.textContent = ramen.restaurant;
  rating.textContent = ramen.rating;
  comment.textContent = ramen.comment;
  detailImg.src = ramen.image;

  ramenImg.getAttribute("src", ramen.image);
  ramenMenu.appendChild(ramenImg);
}

displayRamen();

//Once these things are done, you need to set up an onclick() event on the img to see all of the-
//- info about the ramen displayed in the ramen-detail div and where it says insert comment-
//- here and insert rating here

//Then you need to create a function that will create a new ramen. You need to add an onsubmit()-
//- event listener to be able to render the form once the user submits it. (it's okay if the new-
//- ramen disappears once you refresh the page

//Note: you will need to create a POST request along with your fetch request from earlier
