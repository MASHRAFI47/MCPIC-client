import { useQuery } from "@tanstack/react-query"
import useAxiosCommon from "../../hooks/useAxiosCommon"
import { Link } from "react-router-dom"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"

//date-fns
import { format } from "date-fns"
import useAuth from "../../hooks/useAuth"
import { Helmet } from "react-helmet-async"
import { GoHorizontalRule } from "react-icons/go"
import Title from "../../components/Title/Title"
import RecentEventCard from "../../components/Cards/RecentEventCard"

const Events = () => {
  let i = 100;
  const { theme } = useAuth()
  const axiosCommon = useAxiosCommon()

  const { data: events = [], isLoading } = useQuery({
    queryKey: ['events'],
    queryFn: async () => {
      const { data } = await axiosCommon.get('/events')
      return data
    }
  })

  if (isLoading) return <LoadingSpinner />

  return (
    <section className={`lg:min-h-screen ${theme === "" ? "bg-[#dee8f6]" : ""} px-5 md:px-0 py-12 border-y-2 border-[#112927] hero-grid`}>
      <Helmet>
        <title>MCPIC | Events</title>
      </Helmet>

      <div className="container mx-auto">
        <div data-aos="slide-down" data-aos-delay="">
          <div className="flex flex-col gap-3">
            <p className="tags text-[11px] pt-2 flex items-center font-semibold tracking-widest gap-2"><GoHorizontalRule className='scale-x-150' />ALL EVENTS</p>
            <Title className="uppercase">Our Festivals & <br /> Competitions</Title>
            <p className="text-[0.95rem] mt-3">From intra school/college tech fests to creative competitions — here's <br /> everything MCPIC has organized.</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8 lg:gap-6">
          {
            events?.map(event => <div key={event?._id}>
              <RecentEventCard event={event} />
            </div>)
          }
        </div>
      </div>

      {/* <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          events?.map(eve => <div key={eve?._id} className="" data-aos="flip-left" data-aos-delay={i += 100}>
            <Link to={`/event/${eve?.name}`}>
              <div className="card bg-base-100 shadow-xl">
                <figure><img src={eve?.image_url} className="h-[15rem]" alt="Shoes" /></figure>
                <div className="card-body bg-blue-100">
                  <h2 className="card-title text-black">
                    {eve?.name}
                  </h2>
                  <p className="text-black">{eve?.description.length < 40 ? eve.description : eve.description.slice(0, 40).concat('...')}</p>
                  <div className="card-actions justify-end items-center">
                    <div className="badge badge-outline text-red-600">{format(new Date(eve?.from), 'P')}</div>
                    <div>-</div>
                    <div className="badge badge-outline text-red-600">{format(new Date(eve?.to), 'P')}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>)
        }
      </div> */}
    </section>
  )
}

export default Events