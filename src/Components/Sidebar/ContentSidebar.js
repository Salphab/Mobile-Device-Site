import PhoneCategories from "./PhoneCategories";
import SideAd from "../Ads/sideAdsSquare";


function ContentSidebar(){
    return(
        <nav class='relative block col-start-1 col-end-4 h-[fit-content]'>
            <PhoneCategories/>
            <SideAd/>
        </nav>
    )
}
export default ContentSidebar;