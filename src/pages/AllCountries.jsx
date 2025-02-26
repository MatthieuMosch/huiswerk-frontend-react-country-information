// page to show all countries, each in its own CountryTile

// import libraries
import {useState} from "react";
import axios from "axios";

// import css
import "./AllCountries.css";

// import components
import NavBar from "../components/navBar/NavBar.jsx";
import CountryTile from "../components/countryTile/CountryTile.jsx";

//import images
import worldmap from "../assets/world_map.png";

function AllCountries({setPage}) {
    const [countries, setCountries] = useState([])

    async function getCountries(uri) {
        try {
            const newCountries = await axios.get(uri)
            setCountries(newCountries.data);
        } catch (err) {
            console.error("Error: " + err.message);
        }
    }

    return (
        <>
            <header>
                <NavBar setPage={setPage}/>
                <figure className="header-figure">
                    <figcaption>World Regions</figcaption>
                    <img className="worldmap" src={worldmap} alt="worldmap"/>
                </figure>
            </header>
            <main className="countries-main">
                {!countries.length ?
                    <button
                        type="button"
                        className="button-list"
                        onClick={() => getCountries(
                            "https://restcountries.com/v3.1/all?fields=name,flag,flags,population,region")}>
                        List all countries
                    </button> :
                    countries.sort((a, b) => a.population - b.population).map((country) => (
                        <CountryTile
                            key={country.flag}
                            name={country.name.common}
                            flag={country.flags.png}
                            population={country.population}
                            region={country.region}
                        />
                    ))
                }
            </main>
        </>
    )
}

export default AllCountries;