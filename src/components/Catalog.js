import "./Catalog.scss";
import { useContext } from "react";
import { productsContext } from "./App";

const Catalog = () => {
    const productContext = useContext(productsContext);

    return (
        <>
            <h1>Catalog</h1>
            <div className="products-container">
                {productContext.map((product) => {
                    return (
                        <div className="product-container" key={product.id}>
                            <img src={product.img} alt={product.productName} />
                            <h2>{product.productName}</h2>
                            <button>Buy</button>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Catalog;
