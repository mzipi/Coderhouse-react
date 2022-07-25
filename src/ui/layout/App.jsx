import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import MyProvider from '../../api/CartContext';

function App() {
    return(
        <>
            <BrowserRouter>
                <MyProvider>
                    <Header />
                    <Main />
                </MyProvider>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App; 