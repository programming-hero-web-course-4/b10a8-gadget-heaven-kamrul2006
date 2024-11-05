import { FaCartArrowDown, FaHeart } from "react-icons/fa";
import { CgMenuRound } from "react-icons/cg";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { getStoreCartList } from "../../Utility/AddToCart";
import { ItemContext } from "../Root/Root";




const Nav = () => {

    const [item, setItem] = useContext(ItemContext)


    useEffect(() => {
        const storedList = getStoreCartList();
        setItem(storedList)
        // console.log(Stored)
    }, [])



    const Links = <>
        <li>  <Link to={'/'}>Home</Link></li>
        <li>  <Link to={'/statistics'}>Statistics</Link></li>
        <li>  <Link to={'/dashboard'}>Dashboard</Link></li>
        <li>  <Link to={'/aboutUs'}>About us</Link></li>
    </>

    const homeUrl = useLocation().pathname;

    return (
        <div className={`flex items-center py-2 ${homeUrl === '/' ? 'bg-purple-500 text-white mx-10 md:px-10 rounded-t-2xl mt-1' : 'bg-base-100 md:px-20 mt-1'}  px-3 `}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm mr-3 lg:hidden">
                        <CgMenuRound className="text-2xl" />
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <button className="md:text-2xl text-lg font-bold font-serif">Gadget <span className="text-blue-400">Heaven</span> </button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-lg menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-3">
                <div className="indicator">
                    <Link to={'/dashboard'}>
                        <button className="btn btn-sm md:btn-md btn-circle btn-outLine">
                            <FaCartArrowDown className="text-xl md:text-2xl" />
                        </button></Link>
                    <span className="badge badge-sm badge-outline rounded-full badge-warning indicator-item">{item.length}</span>
                </div>


                <Link to={'/dashboard'}>
                    <button className="btn btn-sm md:btn-md btn-circle btn-outLine">
                        <FaHeart className="text-xl md:text-2xl" />
                    </button></Link>
            </div>
        </div>
    );
};

export default Nav;