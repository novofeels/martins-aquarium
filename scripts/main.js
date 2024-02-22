import {FishList} from "./Fishies.js"
import { getLocations } from "./database.js"
import { renderLocationList } from "./locations.js"
import { getFish } from "./database.js"

/*let parentHTMLElement = document.querySelector(".fish-list")
parentHTMLElement.innerHTML = FishList()

let parentHTMLElement2 = document.querySelector(".locations-list");
console.log(parentHTMLElement2)
parentHTMLElement2.innerHTML = renderLocationList()*/

document.addEventListener("DOMContentLoaded", function() {
    // Your code here
    let parentHTMLElement = document.querySelector(".fish-list");
    parentHTMLElement.innerHTML = FishList();

    let parentHTMLElement2 = document.querySelector(".locations-list");
    console.log(parentHTMLElement2);
    parentHTMLElement2.innerHTML = renderLocationList();
});


document.addEventListener("DOMContentLoaded", function() {
    const fishLink = document.getElementById("fishLink");
    const harvestButton = document.getElementById("harvestButton");
    const fishList = document.querySelector(".fish-list");
    const locationsList = document.querySelector(".locations-list");
    const quotesSection = document.querySelector(".quotes-section");
    const aside = document.getElementById("aside");
    const body = document.body; // Get reference to the body element

    // Initially hide the locations list, quotes section, and aside
    locationsList.style.display = "none";
    quotesSection.style.display = "none";
    aside.style.display = "block";

    fishLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        fishList.style.display = "block"; // Show the fish list
        locationsList.style.display = "none"; // Hide the locations list
        quotesSection.style.display = "none"; // Hide the quotes section
        aside.style.display = "block"; // Show the aside
        // Change background image for the fish list
        body.style.backgroundImage = "url('images/better background.webp')";
    });

    harvestButton.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        fishList.style.display = "none"; // Hide the fish list
        locationsList.style.display = "block"; // Show the locations list
        quotesSection.style.display = "block"; // Show the quotes section
        aside.style.display = "none"; // Hide the aside
        // Change background image for the locations list
        body.style.backgroundImage = "url('images/new jellies for white font.avif')";
    });
});
