import "./Catalog.scss";
import { products } from "./App.js";
import CatalogItem from "./CatalogItem.js";

const Catalog = () => {
    return (
        <>
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
