
const Error = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-purple-300">

            <div className="bg-white text-purple-500 rounded-2xl text-center py-5 px-8">
                <img src="https://img.freepik.com/free-vector/error-404-concept-illustration_114360-1811.jpg" className="w-1/2 mx-auto" />
                <p className="text-lg px-20 py-5 font-sans font-semibold">Oops! It looks like the pase you are looking for, <br /> not available at the moment.</p>
                {/* <Link to={'/'}><button className="bg-purple-500 text-white px-5 py-2 rounded-full font-bold m">Go back</button></Link> */}
                <a href="/"><button className="bg-purple-500 text-white px-5 py-2 rounded-full font-bold m">Go back</button></a>

            </div>


        </div>
    );
};

export default Error;