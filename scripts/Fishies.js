// Import the function that returns a copy of the fish array
import { getFish } from './database.js'

export const sortFish = () => {
    const fish = getFish(); // Retrieve the fish array
    
    const sortedFish = {
        holyFish: [],
        soldierFish: [],
        commonFilth: [] // This was previously named as regularFish
    };

    for (const fishItem of fish) {
        if (fishItem.size % 3 === 0) {
            sortedFish.holyFish.push(fishItem);
        } else if (fishItem.size % 5 === 0) {
            sortedFish.soldierFish.push(fishItem);
        } else {
            sortedFish.commonFilth.push(fishItem);
        }
    }

    return sortedFish;
};


/*export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fish-list">'

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fish-card">
            <div><img  class="fish__image image--card" src="${fish.image}" /></div>
            <div class="fish__name fish__item">name: ${fish.name}</div>
            <div class="fish__species fish__item">species: ${fish.species}</div>
            <div class="fish__length fish__item">size: ${fish.size}</div>
            <div class="fish__location fish__item">harvest location:<a style="cursor: pointer;">${fish.harvest_location}</a></div>
            <div class="fish__diet fish__item">diet: ${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
}*/
export const FishList = () => {
    // Retrieve the sorted fish using the sortFish function
    const fishes = sortFish();

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="fish-list">';

    // Iterate over each category of fish
    for (const category in fishes) {
        if (fishes.hasOwnProperty(category)) {
            // Create a header for the category
            htmlString += `<h2>${category}</h2>`;
            
            // Create HTML representations of each fish in the category
            for (const fish of fishes[category]) {
                htmlString += `<section class="fish-card">
                    <div><img class="fish__image image--card" src="${fish.image}" /></div>
                    <div class="fish__name fish__item">name: ${fish.name}</div>
                    <div class="fish__species fish__item">species: ${fish.species}</div>
                    <div class="fish__length fish__item">size: ${fish.size}</div>
                    <div class="fish__location fish__item">harvest location:<a style="cursor: pointer;">${fish.harvest_location}</a></div>
                    <div class="fish__diet fish__item">diet: ${fish.food}</div>
                </section>`;
            }
        }
    }
    htmlString += `</article>`;

    return htmlString;
};