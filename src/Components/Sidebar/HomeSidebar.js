import PhoneCategories from "./PhoneCategories";
import LimitedEdition from "./LimitedEdition";
import SideAd from "../Ads/sideAdsSquare";
import TopSellers from "./Top_Sellers";
import SideAdsRect from "../Ads/sideAdsRect";
import MobileComparison from "./MobileComparison";

function HomeSidebar(){
    return(
        <nav class='relative block col-start-1 col-end-4
         h-[fit-content]'>
            <PhoneCategories/>
            <SideAd/>
            <LimitedEdition />
            <SideAdsRect/>
            <TopSellers/>
            <MobileComparison/>
        </nav>
    )
}
export default HomeSidebar;