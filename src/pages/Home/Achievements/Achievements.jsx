import { GoHorizontalRule } from "react-icons/go"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"
import Title from "../../../components/Title/Title"
import useAuth from "../../../hooks/useAuth"
import AchievementSlider from "./AchievementSlider"

import './achievements.css'

const Achievements = () => {
    const { theme } = useAuth()

    return (
        <section className={`${theme === "" ? "bg-gradient-radial from-[#080f0e] via-[#0b1514] to-[#080f0e] border-y-2 border-[#112927]" : ""} py-12`}>
            <div className="container mx-auto py-14">
                <div className="flex flex-col gap-3 px-8 md:px-10 lg:px-0" data-aos="slide-up" data-aos-duration="1100">
                    <p className="tags text-[11px] pt-2 flex items-center font-semibold tracking-widest gap-2"><GoHorizontalRule className='scale-x-150' />BRILLIANT MINDS</p>
                    <Title>ACHIEVEMENTS</Title>
                    <p className="text-[0.95rem]">Our achievements from various institutions.</p>
                </div>

                <AchievementSlider />
            </div>
        </section>
    )
}

export default Achievements