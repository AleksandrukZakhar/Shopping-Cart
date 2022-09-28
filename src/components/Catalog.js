import "../index.scss";
import { useContext } from "react";
import { appContext } from "./App";
import CatalogItem from "./CatalogItem.js";
import { ReactComponent as CartImg } from "../assets/cart.svg";
import Cart from "./Cart.js";

const Catalog = () => {
    const { show, setShow, products } = useContext(appContext);

    return (
        <>
            <CartImg className="cart-img" onClick={() => setShow(true)} />
            {show ? <Cart setShow={setShow} /> : null}
            <h1 className="catalog-title">Catalog</h1>
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
