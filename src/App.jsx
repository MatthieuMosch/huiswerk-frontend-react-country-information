import './App.css';
import {useState} from "react";
import axios from "axios";

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
                <figure>
                    <img className="worldmap" src={worldmap} alt="worldmap"/>
                    <figcaption>World Regions</figcaption>
                </figure>
            </header>
            <main>
                <ul>
                    {!countryData.length ?
                        <button
                            onClick={() => getCountryData("https://restcountries.com/v3.1/all?fields=name,flags,population")}>
                            get data
                        </button> :
                        countryData.map((country) => (
                            <li key={country.name.common}>
                                <p>
                                    <img className="flag" src={country.flags.png} alt={country.name.common}/>
                                    {country.name.common}
                                </p>
                                Has a population of {country.population}
                            </li>)
                        )
                    }
                </ul>
            </main>
        </>
    )
}

export default App
