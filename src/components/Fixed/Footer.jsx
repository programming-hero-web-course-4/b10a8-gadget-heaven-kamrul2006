
const Footer = () => {
    return (
        <div className="py-10 bg-base-200">
            <footer className="  text-base-content  px-20 py-4">
                <div className="text-center py-10">

                    <p className="md:text-3xl text-xl font-bold font-serif">
                        Gadget Heaven
                    </p>
                    <p className="text-gray-500 font-semibold">
                        Leading the way in cutting-edge technology and innovation.
                    </p>
                </div>
            </footer>

            <footer className="text-center text-sm font-semibold text-gray-600 md:flex items-center justify-between py-2 md:py-8 pb-10 px-32 border-base-300 border-t">
                <nav className="flex flex-col gap-2">
                    <h6 className="text-xl font-bold text-black">Services</h6>

                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="flex flex-col gap-2 ">
                    <h6 className="text-xl font-bold text-black">Company</h6>

                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className="flex flex-col gap-2">
                    <h6 className="text-xl font-bold text-black">Legal</h6>

                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;