
import package1 from "./package1.png";
import Santorini from "./Santorini.png"
import Venice from "./Venice.png"
import Capetown from "./Capetown.png"

let packageItems = [
    {
        id: 1,
        name: "DUBAI",
        image: package1,
        city: "UAE",
        price: "$750",
        enjoy: 'Luxury',
        enjoy2: "Adventure",
        detail: "Luxury, adventure, skyscrapers, desert thrills."
    },
    {
        id: 2,
        name: "VENICE",
        image: Venice,
        city: "ITALY",
        price: "$850",
        enjoy: 'Rides',
        enjoy2: "Landmark",
        detail: "Romantic canals, historic charm, timeless beauty."
    },
    {
        id: 3,
        name: "SANTORINI",
        image: Santorini,
        city: "GREECE",
        price: "$1200",
        enjoy: 'Luxury',
        enjoy2: "History",
        detail: "Breathtaking sunsets, white-washed homes, crystal waters"
    },
    {
        id: 4,
        name: "CAPE TOWN",
        image: Capetown,
        city: "SOUTH AFRICA",
        price: "$750",
        enjoy: 'Mountains',
        enjoy2: "Beaches",
        detail: "Stunning mountains, vibrant culture, scenic beaches."
    },
]

export default packageItems;