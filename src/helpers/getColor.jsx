// return the color of a region

function getColor(region) {
    switch (region.toLowerCase()) {
        case "africa": return "blue"; //no break as it returns the color directly
        case "americas": return "green";
        case "asia": return "red";
        case "europe": return "yellow";
        case "oceania": return "purple";
        case "antarctic": return "orange";
        default:
            console.error("Unsupported region: ", region);
            return "black";
    }
}

export default getColor;