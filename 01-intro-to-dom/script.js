const h1Element = document.querySelector("#title");
h1Element.style.fontFamily = "Verdana";

const h2Element = document.querySelector("#subtitle");
h2Element.classList.add("lead");

const sellingPointEl = document.querySelectorAll(".selling-point");
for (let eachSellingPoint of sellingPointEl) {
    eachSellingPoint.style.backgroundColor = "yellow";
}

// we can add event listeners to DOM elements
const changeBtn = document.querySelector("#changeBtn");
changeBtn.addEventListener("click", function () {
    alert("clicked");
})