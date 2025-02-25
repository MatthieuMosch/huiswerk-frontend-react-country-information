import NavBar from "../components/navBar/NavBar.jsx";

function FindCountry({setPage}) {
    return (
        <>
            <NavBar setPage={setPage}></NavBar>
            <h1>Find Country</h1>
        </>
    );
}

export default FindCountry;