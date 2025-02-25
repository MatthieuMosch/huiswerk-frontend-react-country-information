import NavBar from "../components/navBar/NavBar.jsx";

function NavPage({setPage}) {
    return (
        <header>
            <NavBar setPage={setPage}/>
        </header>
    );
}

export default NavPage;