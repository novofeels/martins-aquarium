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
            name: "cannibal squirtle",
            species: "snapping turtle",
            food: "other turtles",
            size: 3,
            harvest_location: "cumberland river"
        },
        {
            id: 2,
            name: "Fiona",
            species: "Regal Tang",
            food: "algae",
            size: 4,
            harvest_location: "Great Barrier Reef"
        },
        {
            id: 3,
            name: "Gus",
            species: "Clownfish",
            food: "plankton",
            size: 2,
            harvest_location: "Anemone City"
        },
        {
            id: 4,
            name: "Lola",
            species: "Royal Gramma",
            food: "small invertebrates",
            size: 2.5,
            harvest_location: "Caribbean Sea"
        },
        {
            id: 5,
            name: "Max",
            species: "Mandarin Fish",
            food: "copepods",
            size: 1.5,
            harvest_location: "Philippines"
        },
        {
            id: 6,
            name: "Nemo",
            species: "Clownfish",
            food: "plankton",
            size: 2.5,
            harvest_location: "Anemone City"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}