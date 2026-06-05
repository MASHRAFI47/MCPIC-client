import { useQuery } from "@tanstack/react-query"
import useAxiosCommon from "../../hooks/useAxiosCommon"
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner"
import moment from "moment/moment"

//images
import fbfollow from '../../assets/images/follow/followfb.webp'
import instafollow from '../../assets/images/follow/followinsta.jpeg'
import useAuth from "../../hooks/useAuth"
import { Helmet } from "react-helmet-async"
import { useState } from "react"
import { GoHorizontalRule } from "react-icons/go"
import Title from "../../components/Title/Title"

const Blogs = () => {
  const [seeMore, setSeeMore] = useState(false);
  const { theme } = useAuth()
  const axiosCommon = useAxiosCommon()

  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const { data } = await axiosCommon.get('/blogs')
      return data
    }
  })

  if (isLoading) return <LoadingSpinner />

  const handleSeeMore = () => {
    setSeeMore(!seeMore)
  }

  return (
    <section className={`min-h-screen ${theme === "" ? "bg-[#dee8f6]" : ""} px-5 md:px-0 py-12 hero-grid`}>
      <Helmet>
        <title>MCPIC | Blogs</title>
      </Helmet>


      <div className="container mx-auto relative">

        <div data-aos="fade-in" data-aos-delay="">
          <div className="flex flex-col gap-3">
            <p className="tags text-[11px] pt-2 flex items-center font-semibold tracking-widest gap-2"><GoHorizontalRule className='scale-x-150' />RECENT UPDATES</p>
            <Title className="uppercase">POSTS SECTION</Title>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-4 mt-10">
          {
            blogs?.map(blog => <div className="col-span-3 border border-neutral-500 rounded-xl mb-20 p-3 text-wrap space-y-5" key={blog?._id} data-aos="fade-in">
              <p className={`${theme === "" ? "" : "text-gray-200"} text-lg`}><span className="text-[#30c4b6] font-bold text-lg">Publisher:</span> <span className="inline-block"> <span className="ml-2">{blog?.publisher}</span> </span></p>

              {seeMore ?
                <p className={`${theme === "" ? "" : "text-gray-200"} whitespace-pre-wrap`}><span className="text-[#30c4b6] font-bold text-md">Description:</span> <span className="ml-2">{blog?.description}</span> </p>
                :
                <p className={`${theme === "" ? "" : "text-gray-200"} whitespace-pre-wrap`}><span className="text-[#30c4b6] font-bold text-md">Description:</span> <span className="ml-2">{blog?.description.length > 500 ? blog?.description.slice(0, 500).concat("...") : blog?.description}</span></p>}

              {blog?.description.length > 400 ? <span className="font-semibold text-[#a89ec9] text-xs" onClick={handleSeeMore}>{seeMore ? "See Less" : "See More"}</span> : ""}
              <p className={`${theme === "" ? "" : "text-gray-200"}`}><span className="text-[#30c4b6] font-bold text-md">Publish Date:</span> <span className="ml-2">{moment(blog?.timestamp).format('MMMM Do YYYY, h:mm:ss a')}</span></p>
              <img src={blog?.image_url} className="w-full h-[20rem] md:h-[35rem] rounded-lg object-cover md:object-contain bg-black/10" alt="blog image" />
            </div>)
          }


          <div className="hidden md:inline-block absolute right-0 border-neutral-500">
            {/* Social or others */}
            <div className="">
              <a href="https://www.facebook.com/ictclub.mcpsc" target="_blank"><img src={fbfollow} className="w-[10rem]" alt="mcpic facebook" /></a>
              <a href="https://www.instagram.com/ictclub.mcpsc/" target="_blank"><img src={instafollow} className="w-[10rem]" alt="mcpic instagram" /></a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Blogs