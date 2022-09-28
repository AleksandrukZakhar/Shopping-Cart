import "../index.scss";
import { useContext, useState } from "react";
import { appContext } from "./App.js";

const AddToCart = ({ name, price, img, setShow }) => {
    const { setCart } = useContext(appContext);
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="center">
            <div className="add-cart-container">
                <div className="content-container">
                    <h3>{name}</h3>
                    <p>${price * quantity}</p>
                    <p>
                        quantity{" "}
                        <input
                            type="number"
                            onChange={(e) => setQuantity(e.target.value)}
                            value={quantity}
                            min={1}
                            max={99}
                        />
                    </p>
                    <img src={img} alt={name} />
                </div>
                <button
                    onClick={() => {
                        setShow(false);
                        setCart((prev) => {
                            return [
                                ...prev,
                                {
                                    name,
                                    totalPrice: price * quantity,
                                    img,
                                },
                            ];
                        });
                    }}
                >
                    Add to cart
                </button>
            </div>
        </div>
    );
};

export default AddToCart;
