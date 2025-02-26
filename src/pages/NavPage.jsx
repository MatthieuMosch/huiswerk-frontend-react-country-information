// start page to navigate to other pages

// import css
import "./NavPage.css";

// import components
import NavBar from "../components/navBar/NavBar.jsx";

//import images
import pages from "../assets/pages.jpg";

function NavPage({setPage}) {
    return (
        <header>
            <NavBar setPage={setPage}/>
            <img className="pages-image" src={pages} alt="flipping pages"/>
        </header>
    );
}

export default NavPage;