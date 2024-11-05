import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Fixed/Footer";
import Nav from "../Fixed/Nav";
import { createContext, useState } from "react";


export const ItemContext = createContext([])

const Root = () => {
    const [item, setItem] = useState([])
    const navigation = useNavigation()
    return (
        <div>
            <ItemContext.Provider value={[item, setItem]}>
                <div className="">
                    <Nav></Nav>
                </div>
                <div className="mx-auto">
                    {navigation.state === "loading" ?
                        <div className="flex items-center justify-center min-h-screen bg-gray-100">
                            <div className="relative w-20 h-20">
                                <div className="absolute w-full h-full rounded-full border-4 border-transparent border-t-blue-500 border-b-green-500 animate-spin"></div>
                                <div className="absolute w-full h-full rounded-full border-4 border-transparent border-l-purple-500 border-r-pink-500 animate-spin [animation-duration:1.5s]"></div>
                            </div>
                        </div>
                        : <Outlet></Outlet>
                    }
                </div>
                <div>
                    <Footer></Footer>
                </div>
            </ItemContext.Provider>
        </div>
    );
};

export default Root;