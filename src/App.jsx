import './App.css';
import {useState} from "react";
import axios from "axios";

function App() {

    const [countryData, setCountryData] = useState([])

    async function getCountryData() {
        try {
            const uri = "https://restcountries.com/v3.1/all"
            const newCountryData = await axios.get(uri)
            setCountryData(newCountryData.data);
            console.log(newCountryData.data);
        } catch (e) {
            console.error("foutje:" + e.message);
        } finally {

        }
    }

    return (
        <>
            <h1>Landen informatie</h1>
            <button onClick={getCountryData}>get data</button>
            <ul>
                {countryData.length > 0 && countryData.map((country) => (
                    <li key={country.name.common}>
                        {country.name.common}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
