import { useEffect } from "react";
import Products from "./Products";
import { Link, useLoaderData } from "react-router-dom";



const Banner = () => {

    const Items=useLoaderData()

    useEffect(() => {
        document.title = 'Home | Gadget Heaven'
    }, [])

    return (
        < section className="mb-5">
            <div>
                <div className="mx-[40px] h-[500px] bg-purple-500 mb-48 border border-t-4 border-purple-500 rounded-b-2xl">

                    <div className=" absolute w-fit h-fit mb-52 mx-auto">

                        {/*------------------------------------ texts----------------------------- */}
                        <div className="text-center relative flex flex-col items-center justify-center gap-5 text-white px-10 top-20">
                            <h1 className="text-5xl font-bold px-40">
                                Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                            </h1>
                            <p className="px-56">
                                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                            </p>
                            <Link to={'/dashboard'}>
                            <button className="text-purple-500 bg-white px-5 py-2 rounded-full font-bold">Shop Now</button></Link>
                        </div>

                        {/* ---------------googles---------------------------------- */}
                        <div className="border-2 backdrop-blur  border-white rounded-2xl relative p-3  h-80 w-[60%] top-[130px] left-[20%]">

                            <div className="bg-cover h-full bg-center mx-auto rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co.com/jZ4QMSg/banner.jpg)' }}></div>

                        </div>
                    </div>
                </div>
            </div>
            <h1 id="pro" className="text-3xl text-center font-bold">Explore Cutting-Edge Gadgets</h1>
           <Products Items={Items}></Products>
        </section>


    );
};

export default Banner;