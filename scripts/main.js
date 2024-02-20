/* A section that lists the fish he currently owns.
Another section that lists all the places he's visited to collect fish.
An additional content section on the right side of the fish list, explaining tank maintenance.
A navigation bar at the top for future expansion.
Quotes to appear above the list of locations.
Details for each fish including image, species, length, name, harvest location, and diet.*/

import { getFish } from './database.js'

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}