import { getLocations } from "./database.js";




export const renderLocationList = () => {
    const locations = getLocations();
    
    
    let htmlString = '<article class="locations-list">';
    
    for (const location of locations) {
        htmlString += `<section class="location-card">
            <div><img class="location__image" src="${location.image}" /></div>
            <div class="location__name">${location.name}</div>
            <div class="location__description">${location.description}</div>
        </section>`;
    }
    
    htmlString += '</article>';
    
   return htmlString
};

