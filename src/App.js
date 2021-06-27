import React, { useContext } from "react";

//import Theme from './components/Theme/theme.js';
import Header from './components/Header/header.js';
import Footer from './components/Footer/footer.js';
import Store from './components/Store/store.js';

export default function App(){
    return(
        <>
            <Header />
            <Store />
            <Footer />
        </>
    )
}