// CountryTile component
// displaying
// - the flag of the country
// - the name of the country
// - the population of the country

import "./CountryTile.css";
import getColor from "../../helpers/getColor.jsx";

function CountryTile({name, flag, population, region}) {
    return (
        <article className="country-tile">
            <figure>
                <img className="tile-flag" src={flag} alt={name}/>
                <figcaption style={{ color: getColor(region) }}>{name}</figcaption>
            </figure>
            Has a population of {population} people
        </article>
    );
}

export default CountryTile;