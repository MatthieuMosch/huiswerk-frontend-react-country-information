// CountryTile component
// displaying
// - the flag of the country
// - the name of the country
// - the population of the country

import "./CountryTile.css";

function CountryTile({name,flag,population}) {
    return (
        <article className="country-tile">
            <figure>
                <img className="tile-flag" src={flag} alt={name}/>
                <figcaption>{name}</figcaption>
            </figure>
            Has a population of {population} people
        </article>
    );
}

export default CountryTile;