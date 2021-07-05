import * as React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from "react-router-dom";

import Footer from "./footer/footer";
import Navbar from "./navbar/navbar";

const App = () => {
    return (
        <div className='App'>
            <Navbar />
            <Footer />
        </div>
    )
}

export default App;
