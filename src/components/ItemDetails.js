import { useParams } from "react-router-dom";
import { useContext } from "react";
import { cartContext, products } from "./App.js";

const ItemDetails = () => {
    const params = useParams();
    const [cart, setCart] = useContext(cartContext);
    const { img, productName, price } = products.filter(
        (product) => product.id === params.id
    )[0];

    return (
        <>
            <img src={img} alt={productName} />
            <h2>{productName}</h2>
            <p>${price}</p>
            <button>Add to Cart</button>
        </>
    );
};

export default ItemDetails;
