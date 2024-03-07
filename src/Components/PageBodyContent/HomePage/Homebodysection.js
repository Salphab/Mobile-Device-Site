import HomeContent from "./HomeContent";
import HomeSidebar from "../../Sidebar/HomeSidebar";
function HomeBody(){
    return(
        <section class='relative grid grid-cols-12 gap-x-[0.5%] w-[100%] max-w-[90%] m-auto h-[fit-content]'>
            <HomeSidebar/>
            <HomeContent/>
        </section>
    )
}
export default HomeBody;