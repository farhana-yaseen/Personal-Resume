
import Image from 'next/image';

export default function PersonalInfo() {
    return (
        <section className=' font-serif 2xl:p-10'>

            <div className="md:text-4xl text-lg md:font-extrabold font-bold text-gray-500 uppercase underline my-10 md:my-14 lg:my-20 2xl:my-24 px-5 text-center">
                <h1 >Personal information</h1>
            </div>

            <div className='sm:grid grid-cols-2 gap-10 sm:gap-5 sm:px-5 px-10 md:px-5 place-items-center'>
                <div>
                    <Image src="/nav.jpg" alt="profile pic" width={600} height={600} className="md:w-72 w-40 md:h-72 h-40 rounded-md :object-contain" />
                </div>

                <div>
                    <h1 className="md:text-4xl text-lg font-bold text-center mb-2">Farhana</h1>
                    <h2 className="md:text-3xl text-base md:mb-8 mb-6 font-bold text-center">Innovative Web Developer</h2>
                    <p className='text-justify lg:leading-loose leading-normal md:leading-relaxed md:text-2xl text-sm'>Welcome to my portfolio! I am a web developer dedicated to crafting responsive and engaging websites.
                        With expertise in HTML, CSS, JavaScript, and beyond, I aim to blend creativity with functionality in every project.
                        My goal is to deliver high-quality web applications that not only meet client needs but also provide exceptional user experiences.
                    </p>
                </div>
            </div>
            <div className="border-y-2 border-dashed h-1 bg-gray-500 w-full md:my-8 my-4 sm:my-6"></div>






        </section>
    )
}
