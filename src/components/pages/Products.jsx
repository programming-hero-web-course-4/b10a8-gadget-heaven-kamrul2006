

const Products = () => {
    return (
        <div className="grid grid-cols-5 px-20 py-10 bg-gray-50">
            {/* ---------------------btns--------------------- */}
            <nav className="col-span-1 navbar  flex flex-col gap-5 py-10 bg-white rounded-2xl ">
                <button className="bg-slate-100  w-full text-center mx-auto font-semibold px-6 py-2 rounded-full hover:px-8 hover:bg-fuchsia-300">🔴 Laptops</button>
                <button className="bg-slate-100 w-full text-center mx-auto  font-semibold px-6 py-2 rounded-full hover:px-8 hover:bg-fuchsia-300">🟠 Phones</button>
                <button className="bg-slate-100 w-full text-center mx-auto  font-semibold px-6 py-2 rounded-full hover:px-8 hover:bg-fuchsia-300">🟡 Accessories</button>
                <button className="bg-slate-100 w-full text-center mx-auto  font-semibold px-6 py-2 rounded-full hover:px-8 hover:bg-fuchsia-300">🔵 Smart Watches</button>
                <button className="bg-slate-100 w-full text-center mx-auto  font-semibold px-6 py-2 rounded-full hover:px-8 hover:bg-fuchsia-300">🟣 MacBook</button>
                <button className="bg-slate-100 w-full text-center mx-auto  font-semibold px-6 py-2 rounded-full hover:px-8 hover:bg-fuchsia-300">🟤 Iphone</button>
            </nav>

            {/* -------------products----------------------------- */}
            <div className="col-span-4 gap-5 ml-2">
                <button className="btn">hd</button>
            </div>


        </div>
    );
};

export default Products;