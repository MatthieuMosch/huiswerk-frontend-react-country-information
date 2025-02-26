import "./ErrorPage.css";
import NavBar from "../components/navBar/NavBar.jsx";

function ErrorPage({setPage, children}) {
    return (
        <>
            <NavBar setPage={setPage}></NavBar>
            <h1 className="error-msg">{children}</h1>
        </>
    );
}

export default ErrorPage;