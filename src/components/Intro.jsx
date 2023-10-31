import { motion } from "framer-motion";
const Intro = () => {
    return (
        <>
            <section className="md:px-[150px] w-full flex md:flex-row flex-col items-center md:pb-10 bg-[#E4E6E5] pt-4 md:pt-[42px]">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}  // Initial position and opacity
                    animate={{ opacity: 1, x: 0 }}    // Final position and opacity
                    transition={{ duration: 1 }}
                    className="md:w-[50%] w-full px-12">
                    <img className="rounded-sm  shadow-sm cursor-pointer" src="https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?auto=format&fit=crop&q=80&w=1776&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}  // Initial position and opacity
                    animate={{ opacity: 1, x: 0 }}    // Final position and opacity
                    transition={{ duration: 1 }} className="md:my-0 md:pl-[60px] m-auto w-[70%] md:w-[60%] my-5">
                    <h3 className="text-l  md:text-xl lg:text-xl font-bold text-[#43A7FF]">My Intro</h3>
                    <h1 className="text-2xl md:text-3xl font-bold">About Me</h1>
                    <p className="text-sm md:text-[14px] mt-4 ">
                        A skilled Frontend Developer adept at crafting exceptional user experiences. Proficient in HTML, CSS, and JavaScript, they design and implement responsive, visually appealing web interfaces. Their expertise includes modern frameworks such as React and Vue.js, enhancing websites with interactive features. They are dedicated to creating seamless, user-friendly applications, ensuring a top-notch user experience.
                    </p>
                    <div className="px-0 my-5">
                        <pre>
                            <i className="text-[#43A7FF] fa-regular text- fa-user mb-4"></i> Name : Abdul Ahad <br />
                            <i className="text-[#43A7FF] fa-solid fa-phone mb-4"></i> Phone : <a href="tel:+919838848691">+919838848691</a> <br />

                            <i className="text-[#43A7FF] fa-regular fa-envelope mb-4"></i>Email: <a href="mailto:abdulahadansari810@gmail.com">abdulahadansari810@gmail.com</a>
                        </pre>
                    </div>
                    <div>
                        <h2 className="md:text-xl text-l mt-[-10px] font-bold">My Interests</h2>
                        <div className="text-[12px] flex space-x-8 font-bold mt-2">
                            <p><i className="text-[#43A7FF] fa-solid fa-headphones-simple"></i> Music</p>
                            <p>🏸Badminton</p>
                            <p><i className="fa-solid fa-film text-[#43A7FF]"></i> Movies</p>
                        </div>
                    </div>
                </motion.div>
            </section>
            <hr className=" border-gray-500 w-[80%] mx-auto" />
            <section className="px-6 h-auto bg-[#E4E6E5] pt-4 md:pt-[45px]">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}  // Initial position and opacity
                    animate={{ opacity: 1, y: 0 }}    // Final position and opacity
                    transition={{ duration: 1.5 }}
                    className="w-full md:w-[60%] mx-auto md:text-center">
                    <h3 className="text-l md:text-xl ms-[35px] md:ms-[130px] lg:text-xl font-bold text-[#43A7FF]">My qualification</h3>
                    <h1 className="text-2xl md:ms-[130px] ms-[35px] md:text-3xl font-bold">Awesome journey</h1>
                </motion.div>
                <div className="pb-10 px-8 flex md:flex-row flex-col justify-around mt-8">
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}  // Initial position and opacity
                        animate={{ opacity: 1, x: 0 }}    // Final position and opacity
                        transition={{ duration: 1.5 }} >
                        <h1 className="text-l md:text-xl font-bold"><i className="fa-solid fa-graduation-cap"></i> Education</h1>
                        <div className="mt-5">
                            <h1 className="text-l font-bold">Bachelor of Technology</h1>
                            <h3 className="text-[12px] opacity-[0.8]">Khwaja Monudin Chisthi Language University, Lucknow</h3>
                            <p className="text-[12px] opacity-[0.9] mt-1 text-[#43A7FF]"><i className="fa-regular fa-calendar-days "></i> 2020 - 2023</p>
                        </div>
                        <div className="mt-2">
                            <h1 className="text-l font-bold">Diploma</h1>
                            <h3 className="text-[12px] opacity-[0.8]"> Government Polytechnic, Etawah</h3>
                            <p className="text-[12px] opacity-[0.9] mt-1 text-[#43A7FF]"><i className="fa-regular fa-calendar-days"></i>  2017 - 2020</p>
                        </div>
                        <div className="mt-2">
                            <h1 className="text-l font-bold">Intermediate</h1>
                            <h3 className="text-[12px] opacity-[0.8]">S L B S Intermediate college, Kushinagar</h3>
                            <p className="text-[12px] opacity-[0.9] mt-1 text-[#43A7FF]"><i className="fa-regular fa-calendar-days "></i>  2015 - 2017</p>
                        </div>
                        <div className="mt-2">
                            <h1 className="text-l font-bold">High school</h1>
                            <h3 className="text-[12px] opacity-[0.8]">Kissan intermediate college, Deoria</h3>
                            <p className="text-[12px] opacity-[0.9] mt-1 text-[#43A7FF]"><i className="fa-regular fa-calendar-days "></i>  2014 - 2015</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}  // Initial position and opacity
                        animate={{ opacity: 1, x: 0 }}    // Final position and opacity
                        transition={{ duration: 1.5 }} className="md:mt-0 mt-8">
                        <h1 className="text-l md:text-xl font-bold"><i className="fa-solid fa-briefcase"></i> Internship</h1>
                        <div className="mt-5">
                            <h1 className="text-l font-bold">Analyze Infotech</h1>
                            <h3 className="text-[12px] opacity-[0.8]">Frontend Developer</h3>
                            <p className="text-[12px] opacity-[0.9] mt-1 text-[#43A7FF]"><i className="fa-regular fa-calendar-days"></i>  20-08-2022 to 20-08-2022.</p>
                        </div>
                    </motion.div>
                </div>

            </section>
        </>
    )
}

export default Intro