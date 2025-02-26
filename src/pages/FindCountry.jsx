// import libraries
import {useState} from "react";
import axios from "axios";

// import css
import "./FindCountry.css";

// import components
import NavBar from "../components/navBar/NavBar.jsx";

//import images
import globe from "../assets/spinning_globe.png";

function FindCountry({setPage}) {
    const [name, setName] = useState("");
    const [details, setDetails] = useState([]);
    async function getCountry(e) {
        e.preventDefault();
        try {
            const uri = "https://restcountries.com/v3.1/name/netherlands?fullText=true"
            // const uri = "https://restcountries.com/v3.1/name/aruba?fullText=true"
            const newDetails = await axios.get(uri);
            console.log("newDetails", newDetails);
            setDetails(newDetails.data);
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
                    <figcaption>Search country information</figcaption>
                    <img className="spinning-globe" src={globe} alt="spinning globe" />
                </figure>
            </header>
            <main>
                <form onSubmit={getCountry}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <button type="submit">Find Country</button>
                </form>
                {details.length ?
                    <section>
                        <img src={details[0].flags.png}/>
                        <p>{details[0].name.common}</p>
                        <p>{details[0].subregion}</p>
                        <p>{details[0].capital}</p>
                        <p>{details[0].population}</p>
                        {details[0].borders ? <p>{details[0].borders.length}</p> : <p>geen buren</p>}
                        <p>{details[0].tld}</p>
                    </section> :
                    <section>
                        <p>lang niet gevonden</p>
                    </section>
                }
                [IMAGE: flag] [country-name]
                [country-naam] is situated in [subarea-name] and the capital is [capital]
                It has a population of [amount] million people and it borders with [amount] neighboring countries
                Websites can be found on [domain] domain's
            </main>
        </>
    );
}

export default FindCountry;