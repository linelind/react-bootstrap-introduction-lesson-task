import React from "react";
import "./App.css";
import Heading from "./components/Heading";
import Subheading from "./components/Subheading";
import Paragraph from "./components/Paragraph";
import Box from "./components/Box";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <Heading />
                    <Subheading />
                    <Paragraph />
                    <Box />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
