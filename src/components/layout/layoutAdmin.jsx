import DashBoardNavBar from "../dashboard-navbar/dashboard-navbar";
import { Outlet } from "react-router-dom";

function LayoutAdmin(){
    return (
        <>
            <nav>
                <DashBoardNavBar/>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default LayoutAdmin;