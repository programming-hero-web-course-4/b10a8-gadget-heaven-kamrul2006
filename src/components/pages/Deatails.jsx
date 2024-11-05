import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { getStoreCartList } from "../../Utility/AddToCart";
import { addToStoreWishList } from "../../Utility/AddtoWish";
import { ItemContext } from "../Root/Root";
import { toast } from "react-toastify";

const Details = () => {
    useEffect(() => {
        document.title = 'Details | Gadget Heaven'
    }, [])

    const [item, setItem] = useContext(ItemContext)

    const { Id } = useParams()
    // console.log(Id)
    const data = useLoaderData()
    // console.log(data)
    const Product = data.find(item => item.product_id == Id)
    // console.log(Product)
    const [dis, setDis] = useState(false)
    const [disW, setDisW] = useState(false)

    const HandleAddCart = (id) => {

        const storedList = getStoreCartList()
        if (storedList.includes(id)) {
            toast.error('Product Already exist in Cart !', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            storedList.push(id);
            const stoRedListStr = JSON.stringify(storedList);
            localStorage.setItem('cart-list', stoRedListStr);
            setItem([...item, id])
            toast.success('Product Added in Cart !', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        setDis(true)
    }

    const HandleAddWish = (id) => {
        addToStoreWishList(id)
        setDisW(true)
    }

    const { product_title, product_image, price, description, specification, availability, rating } = Product
    return (

        <div className="mx-[40px] mt-4 h-[300px] bg-purple-500 mb-96 border  rounded-2xl">

            <div className=" absolute w-fit h-fit mb-52 mx-auto">

                {/*------------------------------------ texts----------------------------- */}
                <div className="text-center relative text-white px-10 top-10">
                    <h1 className="text-3xl font-bold px-40">
                        Product Details
                    </h1>
                    <p className="px-56">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>

                {/* ---------------Details---------------------------------- */}
                <div className="border-2 backdrop-blur bg-white/30 border-white rounded-2xl relative p-4  h-fit w-[77%] top-[60px] left-[10%]">

                    <div className=" bg-base-200 rounded-2xl">
                        <div className="w-full flex items-center gap-5 px-5 py-4">
                            <div className="w-[300px] h-[400px]">
                                <img
                                    src={product_image}
                                    className=" rounded-lg shadow-2xl h-full w-full object-cover" />
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold">{product_title}</h1>

                                <p className="my-1 text-sm font-semibold text-gray-500">Price: {price} $</p>

                                <p className="border border-purple-500 text-purple-500  px-2 rounded-full text-xs font-semibold w-fit">{availability ? "In Stock" : 'Out of Stock'}</p>

                                <p className="py-2 text-sm text-gray-500 italic"> {description}</p>

                                <p className="text-sm font-bold  mt-2">Specification:</p>
                                {specification.map((specify, i) => <ul key={i} className="text-sm ">
                                    <li>❁ {specify}</li>
                                </ul>)}

                                <p className="text-sm font-bold  mt-4">Ratings:</p>

                                <div className="mt-2 flex items-center gap-2 text-yellow-500">
                                    {"⭐".repeat(5)} <p className="border border-yellow-500 px-2 bg-yellow-100 font-semibold text-xs rounded-full">{rating}</p>
                                </div>

                                <div className="flex items-center gap-7 mt-5">
                                    <button disabled={dis} id={Product.product_id} onClick={() => HandleAddCart(Product.product_id)} className="btn btn-primary text-white px-3 rounded-full text-xs font-bold flex items-center gap-2">Add To Card <FaCartPlus /></button>

                                    <button disabled={disW} onClick={() => HandleAddWish(Product.product_id)} className="btn btn-outline btn-circle">
                                        <FaHeart className="text-base " />
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Details;