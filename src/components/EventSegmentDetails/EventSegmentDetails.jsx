import { useQuery } from "@tanstack/react-query"
import useAxiosCommon from "../../hooks/useAxiosCommon"
import { useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { format } from 'date-fns'
import useAuth from "../../hooks/useAuth";
import Title from "../Title/Title";
import { GoHorizontalRule } from "react-icons/go";

const EventSegmentDetails = () => {
    const { theme } = useAuth()
    const { id } = useParams()

    const axiosCommon = useAxiosCommon();


    const { data: segment, isLoading } = useQuery({
        queryKey: ['segment', id],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/segment-details/${id}`)
            return data
        }
    })

    if (isLoading) return <LoadingSpinner />

    console.log(segment)

    return (
        <section className={`min-h-screen ${theme === "" ? "bg-[#dee8f6]" : ""} hero-grid`}>
            <div className="container mx-auto px-5 md:px-0">

                <div data-aos="slide-down" data-aos-delay="">
                    <div className="flex flex-col gap-3">
                        <p className="tags text-[11px] pt-2 flex items-center font-semibold tracking-widest gap-2"><GoHorizontalRule className='scale-x-150' />EVENT</p>
                        <Title className="uppercase">{segment?.eventName}</Title>
                        <p className="text-[0.95rem] pb-10">{segment?.eventName} {segment?.segmentName} Details</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4" data-aos="fade-in" data-aos-delay="1100">
                    <div className="col-span-3">
                        <h2 className={`text-2xl ${theme === "" ? "" : "text-gray-200"}`}><span className="font-bold text-[#e8f5f3] text-md">Segment Name:</span> <span className="text-[#89aca8]">{segment?.segmentName}</span></h2>
                        <img src={segment?.image_url} className="w-full h-[350px] object-cover rounded-xl mt-5 mb-5 md:mb-0" alt="event segment picture" />
                        <p className={`${theme === "" ? "" : "text-gray-200"} mt-10 whitespace-pre-wrap text-sm pb-20`}><span className="font-bold text-[#e8f5f3]">Description:</span> {segment?.description}</p>

                    </div>
                    <div className="md:ml-10 md:mt-20 space-y-5">
                        {/* <p className={`${theme === "" ? "" : "text-gray-200"} text-xl`}><span className={`font-bold text-[#e8f5f3]`}>From:</span> {format(new Date(segment?.from), 'P')}</p> */}
                        {/* <p className={`${theme === "" ? "" : "text-gray-200"} text-xl`}><span className="font-bold text-[#e8f5f3]">To:</span> {format(new Date(segment?.to), 'P')}</p> */}

                        <div className="border rounded-xl p-8">
                            <div className="pb-5">
                                <h5 className="text-[#466260] tracking-widest">Event Details</h5>
                            </div>

                            <div className="border-b-2 border-b-[#102b28] py-3">
                                <h6 className="text-[#dee8f6] tracking-widest">FROM</h6>
                                <p className={`${theme === "" ? "" :""}`}>{format(new Date(segment?.from), 'MMM d, yyyy')}</p>
                            </div>
                            <div className="border-b-2 border-b-[#102b28] py-3">
                                <h6 className="text-[#dee8f6] tracking-widest">TO</h6>
                                <p className={`${theme === "" ? "" :""}`}>{format(new Date(segment?.to), 'MMM d, yyyy')}</p>
                            </div>
                            <div className="border-b-2 border-b-[#102b28] py-3">
                                <h6 className="text-[#dee8f6] tracking-widest">VENUE</h6>
                                <p className={`${theme === "" ? "" :""}`}>MCPSC Premises</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default EventSegmentDetails