import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_4l2psnz",
                "template_3265zpi",
                form.current,
                "BRIuWVR14ScDSDgSy"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Email Sent !");
                    e.target.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <section className=" px-6 md:h-[90vh] h-auto bg-[#E4E6E5] md:pt-[45px]" >
            <div className="flex md:flex-row flex-col">

                <motion.img
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeIn" }}
                    className="md:w-[35%] w-[80] rounded-md" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <motion.form
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col md:mt-4 mt-2 md:w-[60vw] w-full mx-auto" ref={form} onSubmit={sendEmail}>
                    <div className="w-full mb-8 mx-auto md:text-center">
                        <h1 className="text-l md:text-3xl font-bold text-[#43A7FF]">Contact Me</h1>
                        <p className="text-[12px] opacity-[0.8]" >Please fill out the form below or call or email to discuss any work opportinities.</p>
                    </div>
                    <input
                        className="py-2 px-2 rounded-md border border-gray-300 focus:outline-none focus:border-[#43A7FF] bg-transparent"
                        type="text"
                        placeholder="Enter Your name"
                        name="from_name"
                    /><br />
                    <input
                        className="py-2 px-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 bg-transparent"
                        type="email"
                        placeholder="Enter Your email."
                        name="user_email"
                    /><br />
                    <textarea
                        className="py-1 px-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 bg-transparent"
                        placeholder="Enter message..."
                        name="message"
                        rows="6"
                    ></textarea><br />
                    <button
                        className="font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center border border-blue-500 bg-blue-500 text-white hover:bg-blue-600"
                        type="submit"
                    >
                        Submit
                    </button>
                    <hr className="border-t-2 border-gray-500 w-full mt-5" />
                    <div className="align-text-bottom my-5">
                        <i className="text-[#43A7FF] fa-solid fa-phone mb-4"></i> Phone : <a href="tel:+919838848691">+91-9838848691</a> <br />

                        <i className="text-[#43A7FF] fa-regular fa-envelope mb-4"></i>Email : <a href="mailto:abdulahadansari810@gmail.com">abdulahadansari810@gmail.com</a>
                    </div>
                </motion.form>

            </div>

        </section>
    );
};

export default Contact;
