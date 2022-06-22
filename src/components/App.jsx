import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import Footer from "./Footer";

function App() {
    return(
        <>
            <BrowserRouter>
                <NavBar />
                <Main />
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App; 