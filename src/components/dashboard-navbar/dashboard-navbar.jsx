import { NavLink } from "react-router-dom";

function DashBoardNavBar() {
    return (
        <ul className="ul">
            <li>
                <NavLink to="/all-product">All Product</NavLink>
            </li>
            <li>
                <NavLink to="/create-product">Create-Product</NavLink>
            </li>
            <li>
                <NavLink to="/update-product">Update-Product</NavLink>
            </li>
            <li>
                <NavLink to="/delete-product">Delete-Product</NavLink>
            </li>
            <li>
                <NavLink to="/">Deconnexion</NavLink>
            </li>
        </ul>
    )
}

export default DashBoardNavBar;