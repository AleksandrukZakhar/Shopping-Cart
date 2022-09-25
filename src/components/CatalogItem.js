import { useParams } from "react-router-dom";

const CatalogItem = () => {
    const params = useParams();

    return <h1>Shop Item {params.id}</h1>;
};

export default CatalogItem;
