// page to show info about a country

// import libraries
import {useState} from "react";
import axios from "axios";

// import css
import "./FindCountry.css";

// import components
import NavBar from "../components/navBar/NavBar.jsx";
import InfoTile from "../components/infoTile/InfoTile.jsx";

//import images
import globe from "../assets/spinning_globe.png";

function FindCountry({setPage}) {
    const [error, toggleError] = useState(false);
    const [name, setName] = useState("");
    const [details, setDetails] = useState(null);

    async function getCountry(e) {
        e.preventDefault();
        try {
            toggleError(false);
            setDetails(null);
            const uri = `https://restcountries.com/v3.1/name/${name}?fullText=true`;
            const newDetails = await axios.get(uri);
            setDetails(newDetails.data);
            setName(""); //this could go in finally{} but I like the field to keep its text after an error so the user can edit it
        } catch (err) {
            toggleError(true);
            console.error("Error: " + err.message);
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
                <form className="form-country" onSubmit={getCountry}>
                    <input
                        type="text"
                        className="input-country"
                        placeholder="Enter the name of a country"
                        value={name}
                        onChange={(e)=>{
                            toggleError(false);
                            setName(e.target.value)}}
                    />
                    <button type="submit" className="button-country">Find Country</button>
                </form>
                {error ?
                    <section>{name} bestaat niet. Probeer het opnieuw</section> :
                    details && <InfoTile info={details[0]}></InfoTile>
                }
            </main>
        </>
    );
}

export default FindCountry;