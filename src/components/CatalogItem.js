import { Link } from "react-router-dom";

const CatalogItem = ({ id, img, name }) => {
    return (
        <div className="product-container" key={id}>
            <img src={img} alt={name} />
            <h2>{name}</h2>
            <Link to={`/shop/${id}`}>
                <button>Buy</button>
            </Link>
        </div>
    );
};

export default CatalogItem;
