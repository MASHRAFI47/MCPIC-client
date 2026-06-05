import { Helmet } from "react-helmet-async"
import About from "./About/About"
import Achievements from "./Achievements/Achievements"
import Banner from "./Banner/Banner"
import Sectors from "./Sectors/Sectors"
import Marquee from "../../components/HomePage/Marquee/Marquee"
import WhoWeAre from "../../components/HomePage/WhoWeAre/WhoWeAre"
import RecentEvents from "../../components/HomePage/RecentEvents/RecentEvents"

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MCPIC | Home</title>
      </Helmet>

      <Banner />
      <Marquee />
      <WhoWeAre />
      <RecentEvents />

      {/* <About /> */}
      {/* <Sectors /> */}
      <Achievements />
    </div>
  )
}

export default Home