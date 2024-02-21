import {FishList} from "./Fishies.js"
import { renderLocationList } from "./locations.js"

let parentHTMLElement = document.querySelector(".fish-list")
parentHTMLElement.innerHTML = FishList()

let parentHTMLElement2 = document.querySelector(".locations-list");
parentHTMLElement2.innerHTML = renderLocationList()