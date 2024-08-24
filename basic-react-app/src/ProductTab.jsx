import Product from "./Product"; 
import "./Product.css";

function ProductTab() {
    return (
        <>
            <Product title = "Phone" price = {30000} />
            <Product title = "Laptop" price = {40000} />
            <Product title = "Pen" price = {10} />
            <Product title = "Apple" />
        </>
    )
}

export default ProductTab;