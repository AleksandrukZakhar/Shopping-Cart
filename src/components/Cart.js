import "../index.scss";
import { useContext } from "react";
import { appContext } from "./App.js";
import { uid } from "uid";
import { ReactComponent as Cross } from "../assets/cross.svg";

const Cart = ({ setShow }) => {
    const { cart } = useContext(appContext);

    return (
        <div className="center">
            <div className="cart-container">
                <Cross className="cross" onClick={() => setShow(false)} />
                <h1>Cart</h1>

                {cart.map(({ name, totalPrice, img }) => {
                    return (
                        <div className="cart-product-container" key={uid()}>
                            <h3>{name}</h3>
                            <p>${totalPrice}</p>
                            <img
                                src={img}
                                alt={name}
                                className="cart-product-img"
                            />
                        </div>
                    );
                })}

                <p className="total-price">
                    total Price: $
                    {cart.reduce((acum, curr) => {
                        return acum + curr.totalPrice;
                    }, 0)}
                </p>
            </div>
        </div>
    );
};

export default Cart;
