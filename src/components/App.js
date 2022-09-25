import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import Shop from "./Shop.js";
import ShopItem from "./ShopItem.js";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/shop/:id" element={<ShopItem />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
