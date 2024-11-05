/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {  useEffect } from "react";
import { useState } from "react";
import { FaLaptop, FaMobile, FaApple } from "react-icons/fa";
import { IoWatch } from "react-icons/io5";
import { TbDeviceAirpodsCase } from "react-icons/tb";
import { FcParallelTasks } from "react-icons/fc";
import { Link } from "react-router-dom";


const Products = ({ Items }) => {
    const products = Items
    
    const [allProducts, setAllProduct] = useState([])
    // console.log(allProducts)

    useEffect(() => {
        setAllProduct(products)
    }, [])


    const HandleAll = () => {
        setAllProduct(products)
    }
    const HandleLaptop = () => {
        const Laptop = products.filter(laptop => laptop.category === 'Laptops')
        setAllProduct(Laptop)
    }
    const HandleIPhone = () => {
        const Iphone = products.filter(Iphone => Iphone.category === 'iPhone')
        setAllProduct(Iphone)
    }
    const HandlePhone = () => {
        const phone = products.filter(phone => phone.category === 'Phones')
        setAllProduct(phone)
    }
    const HandleAccessories = () => {
        const Accessories = products.filter(Accessory => Accessory.category === 'Accessories')
        setAllProduct(Accessories)
    }
    const HandleWatches = () => {
        const Watches = products.filter(Watch => Watch.category === 'Smart Watches')
        setAllProduct(Watches)
    }
  



    return (
        <div className="grid grid-cols-5 px-20 py-10 bg-gray-50">
            {/* ---------------------btns--------------------- */}
            <ul className="col-span-1 h-fit sticky top-20 flex flex-col justify-center gap-5 py-10 bg-white rounded-2xl border shadow-lg menu menu-vertical">
                <button onClick={HandleLaptop}
                    className="bg-slate-100  w-full text-center mx-auto font-semibold px-6 py-2 rounded-full hover:px-8 hover:bg-fuchsia-300 focus:bg-red-300 flex items-center gap-2 justify-center">
                    <FaLaptop /> Laptops</button>

                <button onClick={HandlePhone}
                    className="bg-slate-100  w-full text-center mx-auto font-semibold px-6 py-2 rounded-full hover:px-8 hover:bg-fuchsia-300 focus:bg-red-300 flex items-center gap-2 justify-center">
                    <FaMobile /> Samsung</button>

                <button onClick={HandleAccessories}
                    className="bg-slate-100  w-full text-center mx-auto font-semibold px-6 py-2 rounded-full hover:px-8 hover:bg-fuchsia-300 focus:bg-red-300 flex items-center gap-2 justify-center">
                    <TbDeviceAirpodsCase></TbDeviceAirpodsCase>Accessories</button>

                <button onClick={HandleWatches}
                    className="bg-slate-100  w-full text-center mx-auto font-semibold px-6 py-2 rounded-full hover:px-8 hover:bg-fuchsia-300 focus:bg-red-300 flex items-center gap-2 justify-center">
                    <IoWatch></IoWatch> Smart Watches</button>

                <button onClick={HandleIPhone}
                    className="bg-slate-100  w-full text-center mx-auto font-semibold px-6 py-2 rounded-full hover:px-8 hover:bg-fuchsia-300 focus:bg-red-300 flex items-center gap-2 justify-center">
                    <FaApple /> Iphone</button>

                <button onClick={HandleAll}
                    className="bg-slate-100  w-full text-center mx-auto font-semibold px-6 py-2 rounded-full hover:px-8 hover:bg-fuchsia-300 focus:bg-red-300 flex items-center gap-2 justify-center">
                    <FcParallelTasks />  All Products</button>
            </ul>

            {/* -------------products----------------------------- */}
            <div className="col-span-4 gap-5  grid grid-cols-3 ml-5">
                {allProducts.map(product => <div
                    key={product.product_id}
                    className="bg-white p-3 rounded-2xl border">
                    <div className="h-44  mb-2">
                        <img src={product.product_image} className=" h-full w-full object-cover rounded-2xl border" />
                    </div>
                    <hr />
                    <h1 className="text-lg font-bold">{product.product_title}</h1>
                    <p className="font-semibold text-gray-500 py-2">Price: {product.price} $</p>

                    <Link to={`/product/${product.product_id}`}> <button className="border border-purple-500 text-sm font-semibold text-purple-500 px-2 py-1 rounded-full hover:bg-purple-200">View Details</button></Link>


                </div>)}

            </div>


        </div>
    );
};

export default Products;