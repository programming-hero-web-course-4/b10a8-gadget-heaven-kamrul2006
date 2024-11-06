/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { RxMixerHorizontal } from "react-icons/rx";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { addToStoreCartList, getStoreCartList, RemoveCart } from "../../Utility/AddToCart";
import { getStoreWishList, RemoveWish } from "../../Utility/AddtoWish";
import Nav from "../Fixed/Nav";
import { ItemContext } from "../Root/Root";


const Dashboard = () => {
    useEffect(() => {
        document.title = 'DashBoard | Gadget Heaven'
    }, [])
    const [item, setItem] = useContext(ItemContext)

    // ----------------handle Toggle----------------
    const [isActive, setIsActive] = useState({
        status: 'available'
    })
    const HandleIsActive = (status) => {
        if (status === 'available') {
            setIsActive({
                cart: true,
                status: 'available'
            })
        }
        else {
            setIsActive({
                cart: false,
                status: 'selected'
            })
        }
    }

    // ---------------------Showing details from cart----------------------------
    const allProducts = useLoaderData()
    const [cartList, setCartList] = useState([])
    const [wishList, setWishList] = useState([])
    const [dis, setDis] = useState(false)
    let tCost = 0;

    useEffect(() => {
        const storedList = getStoreCartList();
        const Stored = storedList.map(id => parseInt(id))

        const CardList = allProducts.filter(pro => Stored.includes(parseInt(pro.product_id)));
        setCartList(CardList)
        // console.log(readList, ReadList, Stored, allBooks)
    }, [])

    useEffect(() => {
        const storedList = getStoreWishList();
        const Stored = storedList.map(id => parseInt(id))

        const wishList = allProducts.filter(pro => Stored.includes(parseInt(pro.product_id)))
        setWishList(wishList)
    }, [])

    // --------------------handle remove cart-----------------
    const handleRemoveCart = (id) => {
        RemoveCart(id)
        const storedList = getStoreCartList();
        const Stored = storedList.map(id => parseInt(id))

        const CardList = allProducts.filter(pro => Stored.includes(parseInt(pro.product_id)));
        setCartList(CardList)
        setItem(CardList)
    }
    // -------------------------handle Pushc remove------------
    const handleRemoveAllCart = () => {
        localStorage.removeItem('cart-list')
        const storedList = getStoreCartList();
        const Stored = storedList.map(id => parseInt(id))

        const CardList = allProducts.filter(pro => Stored.includes(parseInt(pro.product_id)));
        setCartList(CardList)
        setItem(CardList)
    }
    // --------------------handle remove Wish-----------------
    const handleRemoveWish = (id) => {
        RemoveWish(id)
        const storedList = getStoreWishList();
        const Stored = storedList.map(id => parseInt(id))

        const wishList = allProducts.filter(pro => Stored.includes(parseInt(pro.product_id)))
        setWishList(wishList)
    }
    //-------------------sort cart-------------------------------
    // const [sort, setSort] = useState('')
    const HandleSort = () => {
        const sortedList = [...cartList].sort((a, b) => b.price - a.price)
        setCartList(sortedList)
    }
    // -------add to cart from wihs list------------------------
    const HandleAddCart = (id) => {
        addToStoreCartList(id)
    }
    //----------------------------cost--------------------------
    let modalCost = []

    for (let pr = 0; pr < cartList.length; pr++) {
        tCost += cartList[pr].price || 0
        modalCost.push(parseInt(cartList[pr].price || 0))
    }

    // console.log(cartList.length)
    useEffect(() => {
        if (cartList.length) {
            setDis(false)
        }
        else {
            setDis(true)
        }
    })

    // const { product_title, product_image, price, description, specification, availability, rating } = 

    return (
        <div>
            <div className="bg-sky-500 mb-5 border">

                <div className=" w-fit h-fit my-10 mx-auto">

                    {/*------------------------------------ texts----------------------------- */}
                    <div className="text-center  text-white px-10">
                        <h1 className="text-3xl font-bold my-4 font-serif">
                            Dashboard
                        </h1>
                        <p className="">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <div className=" my-5">
                            <div className="flex items-center justify-center gap-4">

                                <a onClick={() => HandleIsActive('selected')}
                                    className={`${!isActive.cart ? 'bg-white text-sky-500' : "border-2 border-white"} rounded-full px-10 py-2 font-bold cursor-pointer`}>Cart</a>
                                <a onClick={() => HandleIsActive('available')}
                                    className={`${isActive.cart ? 'bg-white text-sky-500' : "border-2 border-white "} rounded-full px-4 py-2 font-bold cursor-pointer `}>Wish List</a>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* ---------------Details---------------------------------- */}
            <div className="my-5 px-10">
                <h1 className="font-bold text-2xl text-sky-500 w-fit mx-auto px-3 py-1  border-b-2  border-sky-500">{!isActive.cart ? 'Cart Items' : 'Wish List Items'} </h1>

                {!isActive.cart ?
                    <div>
                        <div className=" flex items-center justify-between my-3">
                            <h1 className="text-xl font-bold">Total Costs: {tCost} $</h1>

                            <div className="flex items-center gap-5">
                                <button onClick={HandleSort} className="px-4 py-1  border border-sky-500 text-sky-500 font-bold rounded-full flex items-center gap-2 hover:bg-sky-100">Sort by Price <RxMixerHorizontal /></button>



                                <button disabled={dis} onClick={() => {
                                    document.getElementById('my_modal_5').showModal()
                                    // tCost = 0;
                                    handleRemoveAllCart()
                                }
                                } className="px-10 btn-sm rounded-full font-bold btn btn-outline btn-info">Purchase</button>
                            </div>
                        </div>

                        {cartList.map((cart, i) => <div key={i}
                            className="border rounded-lg shadow-lg p-3 my-4 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-5 ">
                                <div className="w-32 h-24">
                                    <img src={cart.product_image} className="w-full h-full rounded-lg shadow-md object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{cart.product_title}</h3>
                                    <p className="text-gray-500 italic my-3">{cart.description}</p>
                                    <p className="text-gray-500 font-bold text-lg">Price: {cart.price} $</p>
                                </div>
                            </div>

                            <button onClick={() => handleRemoveCart(cart.product_id)} className="btn btn-ghost btn-circle"><IoRemoveCircleOutline className="text-3xl text-red-500" /></button>

                        </div>)}
                    </div>
                    :
                    <div>
                        {wishList.map((cart, i) => <div key={i}
                            className="border rounded-lg shadow-lg p-3 my-4 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-5 ">
                                <div className="w-44 h-40">
                                    <img src={cart.product_image} className="w-full h-full rounded-lg shadow-md object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">{cart.product_title}</h3>
                                    <p className="text-gray-500 italic my-3">{cart.description}</p>
                                    <p className="text-gray-500 font-bold text-lg">Price: {cart.price} $</p>
                                    <button onClick={() => {
                                        HandleAddCart(cart.product_id)
                                        handleRemoveWish(cart.product_id)
                                    }} className="px-4 rounded-full btn btn-sm  btn-success text-white font-bold my-3">Add To Cart</button>
                                </div>


                            </div>
                            <button onClick={() => handleRemoveWish(cart.product_id)} className="btn btn-ghost btn-circle"><IoRemoveCircleOutline className="text-3xl text-red-500" /></button>
                        </div>)}
                    </div>}
            </div>


            {/* Open the modal using document.getElementById('ID').showModal() method */}


            <dialog id="my_modal_5" className="modal modal-middle">
                <div className=" bg-white px-14 py-4 rounded-3xl">
                    <img src="https://media.tenor.com/hDY7src9Lw4AAAAj/dear-harsh-beta.gif" className="mx-auto w-28 rounded-full" />
                    <h3 className="font-bold text-lg text-center mb-3">Payment Successfully</h3>
                    <hr />
                    <p className="py-2 text-center font-semibold">Thanks for purchasing Our product. <br />
                        <span className="text-center text-yellow-500 italic text-lg font-serif">Have A good Day!</span>😉</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <Link to={'/'}><button className="btn rounded-full btn-outline px-28 btn-sm w-full">Close</button></Link>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default Dashboard;