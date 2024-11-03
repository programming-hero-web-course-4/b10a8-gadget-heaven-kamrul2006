import { Outlet } from "react-router-dom";
import Footer from "../Fixed/Footer";
import Nav from "../Fixed/Nav";


const Root = () => {
    return (
        <div>
            <div className="">
                <Nav></Nav>
            </div>
            <div className="mx-auto">
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;