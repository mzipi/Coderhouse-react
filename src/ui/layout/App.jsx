import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Main from "./Main";
import Footer from "./Footer";
import MyProvider from '../../api/CartContext';

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