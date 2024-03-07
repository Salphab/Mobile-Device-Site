import TopCoursel from "../../Grid_Container_Layouts/Top_Coursel";
import Tile from "../../Grid_Container_Layouts/Tiles_x5";
import StretchAdBar from "../../Ads/StretchAdBar";
import CardsX6 from "../../Grid_Container_Layouts/Cards_Coursel_x6";
import Cardsx12 from "../../Grid_Container_Layouts/Cards_Coursel_x12";
import TileX6 from "../../Grid_Container_Layouts/Tiles_x6";
import TileX4 from "../../Grid_Container_Layouts/Tile_x4";
function HomeContent(){
    return(
        <section class='relative block col-start-4 col-end-13 h-[fit-content]'>
            <TopCoursel/>
            <CardsX6 title='Newly Released'/>
            <StretchAdBar/>
            <Cardsx12 title='Trending Devices'/>
            <CardsX6 title='Your Budget Below $100'/>
            <Tile title='Latest Stories'/>
            <CardsX6 title='Your Budget Below $250'/>
            <TileX6 title='Recent Posts'/>
            <StretchAdBar/>
            <CardsX6 title='Your Budget Above $800'/>
            <TileX4 title='Recommended Post'/>
        </section>
    )
}
export default HomeContent;