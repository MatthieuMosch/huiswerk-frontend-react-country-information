// InfoTile component
// displaying
// - the flag of the country
// - the name of the country
// - the name of the subregion
// - the name of the capital
// - the population of the country
// - how many borders the country shares
// - the internet domain of the country

import "./InfoTile.css"
import convertAmount from "../../helpers/convertAmount.jsx";

function InfoTile({info}) {
    return (
        <article className="info-tile">
            <img className="country-flag" src={info.flags.png} alt="flag"/>
            <span className="country-name">{info.name.common}</span>
            <p>{info.name.common} is situated in {info.subregion} and the capital is {info.capital}.</p>
            <p>
                It has a population of {convertAmount(info.population)} people and it borders with
                {!info.borders ?
                    <span> no neighboring countries.</span>: //for islands like Aruba
                    info.borders.length === 1 ?
                        <span> {info.borders.length} neighboring country.</span>: //for surrounded countries like Vatican City
                        <span> {info.borders.length} neighboring countries.</span>}
            </p>
            <p>Websites can be found on {info.tld[0]} domains.</p>
        </article>
    );
}

export default InfoTile;