import developer from '../../assets/images/developer/developer.jpg'
import useAuth from '../../hooks/useAuth'

// icons
import { GoHorizontalRule } from 'react-icons/go'
import Title from '../../components/Title/Title'

const Developers = () => {
    const { theme } = useAuth()

    return (
        <section
            className={`${theme === "" ? "bg-[#080f0e]" : ""} py-20 border-y-2 border-[#112927]`}
            data-aos="fade-in"
        >
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="flex flex-col gap-3" data-aos="slide-up" data-aos-duration="1100">
                    <p className="tags text-[11px] pt-2 flex items-center font-semibold tracking-widest gap-2">
                        <GoHorizontalRule className='scale-x-150' />
                        MEET THE DEVELOPER
                    </p>
                    <Title className="uppercase">DEVELOPER</Title>
                </div>

                {/* Card */}
                <div className="card card-side flex flex-col lg:flex-row bg-[#0b1514] shadow-sm mt-10">

                    {/* Image */}
                    <figure className="w-full lg:w-80 flex-shrink-0 h-64 sm:h-[420px] md:h-[450px] lg:h-auto overflow-hidden" data-aos="fade-in" data-aos-duration="1100">
                        <img
                            src={developer}
                            alt="Developer"
                            className="w-full h-full object-cover"
                        />
                    </figure>

                    {/* Content */}
                    <div className="card-body" data-aos="fade-in" data-aos-duration="500">

                        <span className="bg-[#102220] self-start text-[#2dbeb1] border border-[#17403b] rounded-2xl text-xs p-2">
                            FULL STACK WEB DEVELOPER
                        </span>

                        <h2 className="card-title text-[#e8f5f3] text-4xl tracking-wider mt-2">
                            MASHRAFI BIN NUR
                        </h2>

                        <span className="text-[#a89ec9] text-sm">
                            Advisor · Former President · First President of MCPIC
                        </span>

                        <p className="text-sm leading-6 mt-3">
                            As the full stack developer of the Mirpur Cantt Public Information and Technology Club Website, the journey of web development led to undertaking this project — feeling the necessity of today's online presence and digital world. This website was born out of passion for the club and its vision. A well-crafted website can lead members to another level of engagement. Let us promote IT to the next level.
                        </p>

                        {/* Contact */}
                        <div className="flex flex-col gap-2 mt-3">
                            <span className="text-sm">
                                <span className="text-[#e8f5f3]">Email:</span>{" "}
                                <p className="inline-block">mashrafibinnur47@gmail.com</p>
                            </span>

                            <span className="text-sm">
                                <span className="text-[#e8f5f3]">Phone:</span>{" "}
                                <p className="inline-block">+8801910467562</p>
                            </span>
                        </div>

                        {/* Social Links */}
                        <div className="card-actions justify-start mt-4">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-4">

                                <a
                                    href="https://www.facebook.com/mashrafi.binnur" target='_blank'
                                    className="btn btn-sm border-[#10312d] hover:bg-transparent bg-transparent hover:border-[#30c4b6] hover:text-[#1c9e92] transition-all ease-in-out duration-500 rounded-lg"
                                >
                                    <p>Facebook</p>
                                </a>

                                <a
                                    href="https://www.instagram.com/mashrafi_47" target='_blank'
                                    className="btn btn-sm border-[#10312d] bg-transparent hover:bg-transparent hover:border-[#30c4b6] hover:text-red-600 transition-all ease-in-out duration-500 rounded-lg"
                                >
                                    <p>Instagram</p>
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/mashrafi47/" target='_blank'
                                    className="btn btn-sm border-[#10312d] bg-transparent hover:bg-transparent hover:border-[#30c4b6] hover:text-red-600 transition-all ease-in-out duration-500 rounded-lg"
                                >
                                    <p>LinkedIn</p>
                                </a>

                                <a
                                    href="https://github.com/MASHRAFI47" target='_blank'
                                    className="btn btn-sm border-[#10312d] bg-transparent hover:bg-transparent hover:border-[#30c4b6] hover:text-red-600 transition-all ease-in-out duration-500 rounded-lg"
                                >
                                    <p>Github</p>
                                </a>

                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default Developers