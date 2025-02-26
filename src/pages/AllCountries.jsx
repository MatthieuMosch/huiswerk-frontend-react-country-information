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
            console.error("foutje: " + err.message);
        } finally {

        }
    }
    return (
        <>
            <header>
                <NavBar setPage={setPage}/>
                <figure className="header-figure">
                    <img className="worldmap" src={worldmap} alt="worldmap"/>
                    <figcaption>World Regions</figcaption>
                </figure>
            </header>
            <main className="countries-main">
                {!countries.length ?
                    <button
                        onClick={() => getCountries("https://restcountries.com/v3.1/all?fields=name,flag,flags,population,region")}>
                        get data
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