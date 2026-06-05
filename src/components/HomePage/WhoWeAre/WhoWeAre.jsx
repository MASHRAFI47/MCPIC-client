import { GoHorizontalRule } from "react-icons/go"
import Title from "../../Title/Title"
import SectorCard from "../../Cards/SectorCard"

const WhoWeAre = () => {
    return (
        <div className="py-20 bg-gradient-radial from-[#080f0e] via-[#0b1514] to-[#080f0e] border-y-2 border-[#112927]">
            <div className="container mx-auto">
                <div className="flex flex-col gap-3 px-8 md:px-10 lg:px-0" data-aos="slide-up" data-aos-duration="1100">
                    <p className="tags text-[11px] pt-2 flex items-center font-semibold tracking-widest gap-2"><GoHorizontalRule className='scale-x-150' />WHO WE ARE</p>
                    <Title>OUR SECTORS</Title>
                    <p className="text-[0.95rem]">Shine your skills across a range of technical disciplines.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-5">
                    <SectorCard number={"01"} icon={"💻"} cardTitle={"Website Development"} cardSubTitle={"Design and build full-featured web projects from scratch."} />
                    <SectorCard number={"02"} icon={"🎬"} cardTitle={"Multimedia Presentation"} cardSubTitle={"Craft compelling visual and video narratives."} />
                    <SectorCard number={"03"} icon={"🎨"} cardTitle={"Photoshop & Design"} cardSubTitle={"Visual design, graphics, and digital artistry."} />
                    <SectorCard number={"04"} icon={"📊"} cardTitle={"Microsoft Excel"} cardSubTitle={"Data analysis and spreadsheet mastery."} />
                </div>
            </div>
        </div>
    )
}

export default WhoWeAre