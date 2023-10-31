import { motion } from "framer-motion";
const Experties = () => {
    return (
        <section className=" flex justify-between h-[90vh] bg-[#E4E6E5] pt-[42px]">
            <div className="w-full md:w-[60%] mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, y: -30 }}  // Initial position and opacity
                    animate={{ opacity: 1, scale: 1, y: 0 }}    // Final position and opacity
                    transition={{ duration: 1 }}>
                    <h3 className="text-l md:text-xl ms-[35px] text-center md:ms-[130px] lg:text-xl font-bold text-[#43A7FF]">Why Choose Me</h3>
                    <h1 className="text-2xl md:ms-[130px] ms-[35px] text-center md:text-3xl font-bold">My Experties Area</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}  // Initial position and opacity
                    animate={{ opacity: 1, scale: 1 }}    // Final position and opacity
                    transition={{ duration: 1 }} className="flex flex-col px-10 justify-center md:flex-row md:space-x-10 mt-4 md:mt-10">
                    <div className="space-y-1 md:space-y-4">
                        <div className="w-[300px]">
                            <div className="flex justify-between text-[12px] font-bold">
                                <p><i className="fa-brands fa-html5"></i> HTML</p>
                                <p>95%</p>
                            </div>
                            <input
                                className="w-full"
                                type="range"
                                value="95" min="0"
                                max="100">
                            </input>
                        </div>
                        <div className="w-[300px]">
                            <div className="flex justify-between text-[12px] font-bold">
                                <p><i className="fa-brands fa-css3-alt"></i> CSS</p>
                                <p>90%</p>
                            </div>
                            <input
                                className="w-full"
                                type="range"
                                value="90" min="0"
                                max="100">
                            </input>
                        </div>
                        <div className="w-[300px]">
                            <div className="flex justify-between text-[12px] font-bold">
                                <p><i className="fa-brands fa-js"></i> JAVASCRIPT</p>
                                <p>85%</p>
                            </div>
                            <input
                                className="w-full"
                                type="range"
                                value="85" min="0"
                                max="100">
                            </input>
                        </div>
                        <div className="w-[300px]">
                            <div className="flex justify-between text-[12px] font-bold">
                                <p><i className="fa-brands fa-react"></i> REACT.JS</p>
                                <p>85%</p>
                            </div>
                            <input
                                className="w-full"
                                type="range"
                                value="85" min="0"
                                max="100">
                            </input>
                        </div>
                        <div className="w-[300px]">
                            <div className="flex justify-between text-[12px] font-bold">
                                <p><i className="fa-brands fa-node-js"></i> NODE.JS</p>
                                <p>70%</p>
                            </div>
                            <input
                                className="w-full"
                                type="range"
                                value="70" min="0"
                                max="100">
                            </input>
                        </div>
                    </div>
                    <div className="space-y-1 md:space-y-4">
                        <div className="w-[300px]">
                            <div className="flex justify-between text-[12px] font-bold">
                                <p><i className="fa-brands fa-python"></i> PYTHON</p>
                                <p>75%</p>
                            </div>
                            <input
                                className="w-full"
                                type="range"
                                value="75" min="0"
                                max="100">
                            </input>
                        </div>
                        <div className="w-[300px]">
                            <div className="flex justify-between text-[12px] font-bold">
                                <p>EXPRESS</p>
                                <p>60%</p>
                            </div>
                            <input
                                className="w-full"
                                type="range"
                                value="60" min="0"
                                max="100">
                            </input>
                        </div>
                        <div className="w-[300px]">
                            <div className="flex justify-between text-[12px] font-bold">
                                <p><i className="fa-brands fa-php"></i> PHP</p>
                                <p>70%</p>
                            </div>
                            <input
                                className="w-full"
                                type="range"
                                value="85" min="0"
                                max="100">
                            </input>
                        </div>
                        <div className="w-[300px]">
                            <div className="flex justify-between text-[12px] font-bold">
                                <p><i className="fa-solid fa-database"></i> MYSQL</p>
                                <p>75%</p>
                            </div>
                            <input
                                className="w-full"
                                type="range"
                                value="75" min="0"
                                max="100">
                            </input>
                        </div>
                        <div className="w-[300px]">
                            <div className="flex justify-between text-[12px] font-bold">
                                <p>TAILWIND CSS</p>
                                <p>85%</p>
                            </div>
                            <input
                                className="w-full"
                                type="range"
                                value="85" min="0"
                                max="100">
                            </input>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    )
}

export default Experties

