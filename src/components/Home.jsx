import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
    return (
        <>
            <div className="lg:px-[100px] flex justify-between flex-col md:flex-row w-full pb-10 bg-[#E4E6E5] pt-[10px]">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}  // Initial position and opacity
                    animate={{ opacity: 1, x: 0 }}    // Final position and opacity
                    transition={{ duration: 1 }}
                    className="pl-12 md:mt-7">
                    <h3 className="text-l pr-5  md:text-xl font-bold text-[#43A7FF]">Hii, I am</h3>
                    <h1 className="text-2xl pr-5 md:text-3xl font-bold">Abdul Ahad</h1>
                    <h2 className="text-xl pe-5 md:text-xl mt-2 font-semibold">Front-End Developer</h2>
                    <p className="text-sm md:text-[14px] mt-4 md:w-[80%] ">
                        A React developer specializes in creating interactive web applications using the React library. They ensure responsiveness, cross-browser compatibility, and optimal performance. Working collaboratively with designers and backend developers, they bring user interfaces to life by implementing dynamic components and user interactions, enhancing the overall user experience, and delivering efficient, well-rounded web solutions.
                    </p>
                    <div className="mt-3 flex flex-col pr-12 md:justify-start justify-center text-center md:flex-row md:space-x-1">
                        <Link
                            to="/contact"
                            className="bg-[#43A7FF] mb-2 md:mb-0 hover:bg-blue-500 text-white md:py-2 md:px-4 py-1 rounded mt-2 md:mt-0" style={{ border: "2px solid #43A7FF" }}                    >
                            Contact Me
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}  // Initial position and opacity
                    animate={{ opacity: 1, x: 0 }}    // Final position and opacity
                    transition={{ duration: 1 }}
                    className="h-auto">
                    <img className="rounded-sm mt-2 shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1564564244080-5141046f5e21?auto=format&fit=crop&q=80&w=1776&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="man Image" />
                </motion.div>

            </div >
            <hr className=" border-gray-500 w-[85%] mx-auto" />
            <section className="h-auto bg-[#E4E6E5] md:pt-4 py-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}  // Initial position and opacity
                    animate={{ opacity: 1, y: 0 }}    // Final position and opacity
                    transition={{ duration: 1 }}>

                    <h3 className="text-l text-center md:text-l font-bold text-[#43A7FF]">Specialized In</h3>
                    <h1 className="text-2xl md:text-3xl text-center font-bold">What I Offer</h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}  // Initial position and opacity
                    animate={{ opacity: 1, y: 0 }}    // Final position and opacity
                    transition={{ duration: 1 }}
                    className="my-10 flex flex-col justify-center md:flex-row flex-wrap md:space-x-6 m-10 mt-[50px]">
                    <div className="relative border-solid rounded-tr-[30px] border-2 border-sky-500 w-[300px] h-[150px]">
                        <div className="absolute top-[-20px] text-l left-[15px] text-white text-center pt-[6px] h-10 w-10 rounded-sm bg-blue-500 ">
                            <i className="fa-solid fa-code"></i>
                        </div>
                        <div className="flex flex-col p-4 mt-2">
                            <h1 className="text-sm mb-2 font-bold">Web Design</h1>
                            <p className="text-[12px] opacity-[0.8]">
                                Web design is the creative process of crafting websites, incorporating layout, visuals, and functionality to enhance user experiences and achieve specific goals.
                            </p>
                        </div>
                    </div>
                    <div className="relative border-solid rounded-tr-[30px] border-2 border-sky-500 mt-7 md:mt-0 w-[300px] h-[150px]">
                        <div className="absolute top-[-20px] text-l left-[15px] text-white text-center pt-[6px] h-10 w-10 rounded-sm bg-blue-500 ">
                            <i className="fa-solid fa-file-code"></i>
                        </div>
                        <div className="flex flex-col p-4 mt-2">
                            <h1 className="text-sm mb-2 font-bold">Frontend Web Developer</h1>
                            <p className="text-[12px] opacity-[0.8]">
                                A frontend web developer creates the user interface of websites, focusing on design, layout, and interactivity to enhance user experiences.
                            </p>
                        </div>
                    </div>
                    <div className="relative border-solid rounded-tr-[30px] border-2 border-sky-500 mt-7 md:mt-0 w-[300px] h-[150px]">
                        <div className="absolute top-[-20px] text-l left-[15px] text-white text-center pt-[6px] h-10 w-10 rounded-sm bg-blue-500 ">
                            <i className="fa-solid fa-bug-slash"></i>
                        </div>
                        <div className="flex flex-col p-4 mt-2">
                            <h1 className="text-sm mb-2 font-bold">Optimizing User Experience</h1>
                            <p className="text-[12px] opacity-[0.8]">
                                Optimizing user experience involves enhancing website design and performance to ensure a seamless, engaging, and efficient interaction for visitors.
                            </p>
                        </div>
                    </div>

                </motion.div>

            </section>
        </>
    );
};

export default Home;
