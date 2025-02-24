import './App.css';
import {useState} from "react";
import axios from "axios";

import CountryTile from "./components/countryTile/CountryTile.jsx";

import worldmap from "./assets/world_map.png";

function App() {

    const [countryData, setCountryData] = useState([])

    async function getCountryData(uri) {
        try {
            const newCountryData = await axios.get(uri)
            setCountryData(newCountryData.data);
            console.log(newCountryData.data);
        } catch (err) {
            console.error("foutje:" + err.message);
        } finally {

        }
    }

    return (
        <>
            <header>
                <figure className="header-figure">
                    <img className="worldmap" src={worldmap} alt="worldmap"/>
                    <figcaption>World Regions</figcaption>
                </figure>
            </header>
            <main>
                    {!countryData.length ?
                        <button
                            onClick={() => getCountryData("https://restcountries.com/v3.1/all?fields=name,flag,flags,population,region")}>
                            get data
                        </button> :
                        countryData.sort((a, b) => a.population - b.population).map((country) => (
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

export default App
