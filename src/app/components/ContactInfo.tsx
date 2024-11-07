
import Footer from "./Footer"
import Form from "./Form"
import Image from "next/image"


export default function ContactInfo() {

    return (
        <section id="contactInfo" className=" font-serif md:px-10 px-5 ">

            <div className="md:text-5xl text-lg md:font-extrabold font-bold uppercase 2xl:p-10">
                <h1 className="text-center my-10 text-gray-500">Contact Us</h1>
                <h2 className="md:text-4xl text-lg bg-gray-500 p-2 rounded-full text-white">Get in Touch</h2>
            </div>



            <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-12">
                <div>
                    <Form />
                </div>

                <div className="md:px-10 lg:flex justify-center items-center ">
                    <Image src="/contactus.jpg" alt="contactus" width={600} height={600} className=" border-gray-500 border-2 rounded-md object-contain " />
                </div>
            </div>

            <div className="md:text-2xl text-lg my-10">
                <p className="mb-5">Phone No.: 0344-2760527 </p>
                <p className="mb-5">Email Adress: farhanayaseen2@gmail.com</p>
                <p className="mb-5">Adress: Karachi</p>
            </div>
            <Footer/>

        </section>
    )
}
