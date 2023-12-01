import { Outlet } from "react-router-dom";

function Products(){
    return (
        <>
            <div className="products">
                <h1>Products</h1>
                <Outlet />
            </div>
        </>
    );
}

export default Products;