import "./ItemDetails.scss";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { products } from "./App.js";
import { ReactComponent as CartImg } from "../assets/cart.svg";
import Cart from "./Cart.js";
import AddToCart from "./AddToCart.js";

const ItemDetails = () => {
    const params = useParams();
    const [show, setShow] = useState(false);
    const [showAdd, setShowAdd] = useState(false);
    const { img, productName, price } = products.filter(
        (product) => product.id === params.id
    )[0];

    return (
        <div className="details-container">
            <Link to="/shop">
                <button className="return-catalog">Return to catalog</button>
            </Link>
            <CartImg className="cart-img" onClick={() => setShow(true)} />
            {show ? <Cart setShow={setShow} /> : null}
            <img src={img} alt={productName} />
            <h2>{productName}</h2>
            <p>${price}</p>
            <button onClick={() => setShowAdd(true)}>Add to Cart</button>
            {showAdd ? (
                <AddToCart
                    name={productName}
                    price={price}
                    img={img}
                    setShow={setShowAdd}
                />
            ) : null}
        </div>
    );
};

export default ItemDetails;
