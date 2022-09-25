import { createContext } from "react";
import { uid } from "uid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Catalog from "./Catalog.js";
import ItemDetails from "./ItemDetails.js";

export const productsContext = createContext();

const App = () => {
    const products = [
        {
            id: uid(),
            productName: "ryzen 5 5000",
            img: "https://bit.ly/3xS0JtY",
        },
        {
            id: uid(),
            productName: "ryzen 7 5000",
            img: "https://bit.ly/3BHNSLR",
        },
        {
            id: uid(),
            productName: "ryzen 9 5000",
            img: "https://bit.ly/3DSAk2L",
        },
    ];

    return (
        <productsContext.Provider value={products}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Catalog />} />
                    <Route path="/shop/:id" element={<ItemDetails />} />
                </Routes>
            </BrowserRouter>
        </productsContext.Provider>
    );
};

export default App;
