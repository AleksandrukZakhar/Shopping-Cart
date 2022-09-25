import "./Catalog.scss";
import { useState } from "react";
import { products } from "./App.js";
import CatalogItem from "./CatalogItem.js";
import { ReactComponent as CartImg } from "../assets/cart.svg";
import Cart from "./Cart.js";

const Catalog = () => {
    const [show, setShow] = useState();

    return (
        <>
            <CartImg className="cart-img" onClick={() => setShow(true)} />
            {show ? <Cart setShow={setShow} /> : null}
            <h1>Catalog</h1>
            <div className="products-container">
                {products.map((product) => {
                    return (
                        <CatalogItem
                            key={product.id}
                            id={product.id}
                            img={product.img}
                            name={product.productName}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Catalog;
