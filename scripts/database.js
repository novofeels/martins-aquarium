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
            size: 5,
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
        },
        {
            id: 3,
            image: "images/ClownFish.jpg",
            name: "Gus",
            species: "Clownfish",
            food: "He only smokes",
            size: 2,
            harvest_location: "Anemone City"
        },
        {
            id: 3,
            image: "images/ClownFish.jpg",
            name: "Gus",
            species: "Clownfish",
            food: "He only smokes",
            size: 6,
            harvest_location: "Anemone City"
        },
        {
            id: 3,
            image: "images/ClownFish.jpg",
            name: "Gus",
            species: "Clownfish",
            food: "He only smokes",
            size: 10,
            harvest_location: "Anemone City"
        }
     
    ],
    locations: [
        {
            name: "Tropical Paradise",
            image: "images/tropical paradise.jpg",
            description: "A beautiful tropical island with crystal clear waters and magical dolphins. i fell in love with one before she left me for a young killer whale. they always go for bad boys."
        },
        {
            name: "Mystic Reef",
            image: "images/mysitcalerreef.jpg",
            description: "An enchanting reef teeming with diverse marine life. i stole what i could."
        },
        {
            name: "Deep Sea Canyon",
            image: "images/deepseacanyon.jpeg",
            description: "A mysterious underwater canyon with deep, dark waters. not so mysterious anymore i mapped that whole bitch out."
        }
        // Add more location objects as needed
    ],
    quotes: [
        {
            text: "Always wait until the last minute to start anything. The adrenaline rush will make you more productive!",
            author: "my ADHD"
        },
        {
            text: "If the bathroom door is locked, try jiggling the handle. if that doesnt work try the jiggle/pull.",
            author: "the guy outside the stall I'm currently using"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}

export const getQuotes = () => {
    return database.quotes.map(quotes => ({ ...quotes }));
};
