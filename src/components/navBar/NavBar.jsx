import "./NavBar.css"

function NavBar({page, setPage}) {
    return (
        <nav className="nav-bar">
            <button type="button" className="nav-button" onClick={() => setPage(0)}>Home</button>
            <button type="button" className="nav-button" onClick={() => setPage(1)}>All Countries</button>
            <button type="button" className="nav-button" onClick={() => setPage(2)}>Find Country</button>
        </nav>
    );
}

export default NavBar;