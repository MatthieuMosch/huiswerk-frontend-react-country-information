import './App.css';
import {useState} from "react";

import NavPage from "./pages/NavPage.jsx";
import AllCountries from "./pages/AllCountries";
import FindCountry from "./pages/FindCountry.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

function App() {

    const [page, setPage] = useState(2);

    switch (page) {
        case 0:
            return(<NavPage page={page} setPage={setPage}/>)
        case 1:
            return (<AllCountries page={page} setPage={setPage}/>)
        case 2:
            return (<FindCountry page={page} setPage={setPage}/>)
        default:
            return (<ErrorPage page={page} setPage={setPage}>Page not Found</ErrorPage>)
    }
}

export default App
