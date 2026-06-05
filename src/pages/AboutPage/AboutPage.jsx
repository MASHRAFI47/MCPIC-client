import Lottie from "lottie-react";
import techAnimation from "../../assets/aboutAnimation.json";
import Developers from "../Developers/Developers";
import useAuth from "../../hooks/useAuth";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import Title from "../../components/Title/Title";
import { GoHorizontalRule } from "react-icons/go";


const AboutPage = () => {
    const { theme } = useAuth()
    return (
        <div className={`pt-10 px-8 md:px-10 lg:px-0 ${theme === "" ? "hero-grid" : ""}`} id="about">
            <Helmet>
                <title>MCPIC | About</title>
            </Helmet>

            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center mb-10">

                <div data-aos="slide-up" data-aos-duration="1100">
                    <div className="flex flex-col gap-3">
                        <p className="tags text-[11px] pt-2 flex items-center font-semibold tracking-widest gap-2"><GoHorizontalRule className='scale-x-150' />ABOUT US</p>
                        <Title className="uppercase">Fostering a <br /> Community of <br /> Future Leaders</Title>
                        <p className="text-[0.95rem] mt-3"> <span className="text-[#e8f5f3] font-semibold">Mirpur Cantt Public Information and Technology Club</span> is dedicated to fostering a community of innovative thinkers, tech enthusiasts, and future leaders in the fields of information technology and computer science. <br /> <br />
                        Our mission is to provide members with opportunities for learning, collaboration, and professional growth — equipping them with the skills and knowledge necessary to thrive in the rapidly evolving tech landscape.</p>
                    </div>
                </div>
                <div className="flex justify-center" data-aos="fade-down" data-aos-delay="600">
                    <Lottie animationData={techAnimation} className="w-3/4" loop={true} />
                </div>
            </div>

            <Developers />
        </div>
    )
}

export default AboutPage