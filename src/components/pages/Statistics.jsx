import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const Statistics = () => {

    useEffect(() => {
        document.title = 'Statistics | Gadget Heaven'
    }, [])

    const data = useLoaderData()



    return (
        <div className="w-full h-fit mx-auto bg-slate-100 pb-3">
            {/*------------------------------------ texts----------------------------- */}
            <div className="text-center  bg-orange-500 flex flex-col items-center justify-center py-8 px-20 text-white">
                <h1 className="text-3xl font-bold my-4 font-serif">
                    Dashboard
                </h1>
                <p className="px-20">
                    Explore the latest gadgets that will take your experience to the next level. From smart <br />devices to the coolest accessories, we have it all!
                </p>
            </div>

            <h1 className="mt-10 mb-3 ml-44 text-2xl font-serif ">Statistics</h1>

            <div className="w-fit bg-white pr-4 py-5 mx-auto mb-8 rounded-2xl">
                <BarChart width={1000} height={400} data={data}>
                    <XAxis scaleType='band' dataKey="product_title" />
                    <YAxis dataKey={`price`} />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="price" fill="#ff7300" barSize={20} />
                    <Bar dataKey="rating" fill="green" barSize={10} />
                </BarChart>
                <div className="flex items-center justify-center gap-3">
                    <p className="text-sm font-bold ">🟠Price</p>
                    <p className="text-sm font-bold ">🟢Rating</p>
                </div>
            </div>

        </div>
    );
};

export default Statistics;