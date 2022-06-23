import { BrowserRouter } from "react-router-dom";
import NavBar from "./main/NavBar";
import Main from "./main/Main";
import Footer from "./main/Footer";

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