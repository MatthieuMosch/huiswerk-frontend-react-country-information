import './App.css';
import {useState} from "react";
import axios from "axios";

import CountryTile from "./components/countryTile/CountryTile.jsx";

import worldmap from "./assets/world_map.png";

function App() {

    const [page, setPage] = useState(1);
    const [countryData, setCountryData] = useState([])

    async function getCountryData(uri) {
        try {
            const newCountryData = await axios.get(uri)
            setCountryData(newCountryData.data);
            console.log(newCountryData.data);
        } catch (err) {
            console.error("foutje:" + err.message);
        } finally {
            setPage(1);
        }
    }

    if (page === 1) {
        return (
            <>
                <nav>
                    <button
                        onClick={() => getCountryData("https://restcountries.com/v3.1/all?fields=name,flag,flags,population,region")}>
                        Show countries
                    </button>
                    <button onClick={() => setPage(2)}>
                        search country
                    </button>
                </nav>
                <header>
                    <figure className="header-figure">
                        <figcaption>World Regions</figcaption>
                        <img className="worldmap" src={worldmap} alt="worldmap"/>
                    </figure>
                </header>
                <main>
                    {countryData.length &&
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
                :
            </>
        )
    } else if (page === 2) {
        return (
            <>
                <nav>
                    <button
                        onClick={() => getCountryData("https://restcountries.com/v3.1/all?fields=name,flag,flags,population,region")}>
                        Show countries
                    </button>
                    <button onClick={() => setPage(2)}>
                        search country
                    </button>
                </nav>
                <h1>search</h1>
            </>
        )
    }
}

export default App
