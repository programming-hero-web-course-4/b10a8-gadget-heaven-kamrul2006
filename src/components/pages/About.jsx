import { useEffect } from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
    useEffect(() => {
        document.title = 'About Us | Gadget Heaven'
    }, [])


    return (
        <div className="h-screen flex items-center ">
            <div>
                <img src="https://media.istockphoto.com/id/460651903/vector/3d-business-man-presenting-concept-of-about-us.jpg?s=612x612&w=0&k=20&c=UjdTBehH0c110_kw07-ALyUTT58UNxE83_i-br33Nyg=" className="w-[500px]" />
            </div>
            <div className="text-center flex flex-col items-center justify-center gap-8 shadow-lg px-7 py-16 rounded-3xl bg-red-50">
                <h1 className="text-5xl font-serif">
                    Hello Dear users!!😊
                </h1>
                <h1 className="text-2xl ">
                    Welcome to <span className="font-serif font-bold">Gadget<span className="text-blue-500">Haven!</span> </span>
                </h1>
                <p>
                    We are here to give you the best product in best price. you can find brand new and best product here! <br /> So why are you waiting for? go an get the best offers.
                </p>
                <Link to={'/'}>
                    <button className="py-2 px-4 bg-red-400 text-white text-lg hover:font-bold hover:bg-red-500 rounded-full flex items-center justify-center gap-3">See All Products <FaCartArrowDown /></button>    </Link>
            </div>

        </div>
    );
};

export default About;