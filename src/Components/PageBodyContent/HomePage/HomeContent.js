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
            <CardsX6 title='Recently Released'/>
            <StretchAdBar/>
            <Tile title='Latest Stories'/>
            <Cardsx12 title='Popular Comparison'/>
            <CardsX6 title='Top Flagship Devices'/>
            <TileX6 title='Recent Posts'/>
            <CardsX6 title='Top Mid-range Devices'/>
            <StretchAdBar/>
            <CardsX6 title='Top Budget Devices'/>
            <TileX4 title='Recommended Post'/>
        </section>
    )
}
export default HomeContent;