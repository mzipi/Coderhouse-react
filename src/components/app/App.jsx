import { BrowserRouter } from "react-router-dom";
import NavBar from "./main/NavBar";
import Main from "./main/Main";
import Footer from "./main/Footer";
import MyProvider from '../CartContext';

function App() {
    return(
        <>
            <BrowserRouter>
                <MyProvider>
                    <NavBar />
                    <Main />
                </MyProvider>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App; 