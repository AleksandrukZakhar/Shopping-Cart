import { createContext, useState } from "react";
import { uid } from "uid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Catalog from "./Catalog.js";
import ItemDetails from "./ItemDetails.js";

export const cartContext = createContext();

export const products = [
    {
        id: uid(),
        productName: "ryzen 5 5000",
        img: "https://bit.ly/3xS0JtY",
        price: 299,
    },
    {
        id: uid(),
        productName: "ryzen 7 5000",
        img: "https://bit.ly/3BHNSLR",
        price: 449,
    },
    {
        id: uid(),
        productName: "ryzen 9 5000",
        img: "https://bit.ly/3DSAk2L",
        price: 799,
    },
];

const App = () => {
    const [cart, setCart] = useState([]);

    return (
        <cartContext.Provider value={[cart, setCart]}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Catalog />} />
                    <Route path="/shop/:id" element={<ItemDetails />} />
                </Routes>
            </BrowserRouter>
        </cartContext.Provider>
    );
};

export default App;
