import { useQuery } from "@tanstack/react-query"
import useAxiosCommon from "../../../hooks/useAxiosCommon"
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner"
import Title from "../../Title/Title"
import { GoHorizontalRule } from "react-icons/go"
import RecentEventCard from "../../Cards/RecentEventCard"

const RecentEvents = () => {

    const axiosCommon = useAxiosCommon()

    const { data: events = [], isLoading } = useQuery({
        queryKey: ['events'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/events')
            return data
        }
    })

    if (isLoading) return <LoadingSpinner />

    console.log(events)

    return (
        <div className="py-20 bg-[#080f0e] border-y-1 border-[#112927]">
            <div className="container mx-auto">
                <div className="flex flex-col gap-3 px-8 md:px-10 lg:px-0" data-aos="slide-up" data-aos-duration="1100">
                    <p className="tags text-[11px] pt-2 flex items-center font-semibold tracking-widest gap-2"><GoHorizontalRule className='scale-x-150' />FEATURED</p>
                    <Title>RECENT EVENTS</Title>
                    <p className="text-[0.95rem]">Where MCPIC made its mark.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
                    {
                        events?.slice(0, 3)?.map(event => <div className="pb-10 md:pb-5 lg:pb-0" key={event?._id}>
                            <RecentEventCard event={event} />
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentEvents