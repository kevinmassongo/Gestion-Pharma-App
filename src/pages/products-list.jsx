import ProductService from "../models/services/productService.js";
import ProductPreview from "../components/product-preview/product-preview.jsx";


function ProductsList(){
    const data = ProductService.getProducts();

    return (
        <>
            <ul>
                {data.map((e, index) =>(
                    <li key={index}>
                        <ProductPreview product={e} seeMore={false}></ProductPreview>
                    </li>
                   ))}
            </ul>
        </>
    )    
}

export default ProductsList