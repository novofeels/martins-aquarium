/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            image: "images/cannibal squirtle.jpg",
            name: "cannibal squirtle",
            species: "snapping turtle",
            food: "other turtles",
            size: 3,
            harvest_location: "cumberland river"
        },
        {
            id: 2,
            image: "images/SnickeringSwordfish.jpg",
            name: "chuckles",
            species: "Snickering Swordfish",
            food: "Fish with no sense of Humor",
            size: 4,
            harvest_location: "Great Barrier Reef"
        },
        {
            id: 3,
            image: "images/ClownFish.jpg",
            name: "Gus",
            species: "Clownfish",
            food: "He only smokes",
            size: 2,
            harvest_location: "Anemone City"
        }
     
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}