import "../index.scss";
import Background from "../assets/background.jpg";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <img className="background" src={Background} alt="background" />
            <div className="filter">
                <h1>AMD Shop</h1>
                <Link to="/shop">
                    <button>Catalog</button>
                </Link>
            </div>
        </>
    );
};

export default Home;
