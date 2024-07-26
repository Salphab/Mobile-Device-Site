import { ReviewContext } from "../../../Hooks/Context/ReviewContext";
import Themebanner from "../Themebanner/Themebanner";
import PopularBrands from "./PopularBrands";
import { useContext } from "react";

function ReviewTheme(){
    const {imgUrl, imgAlt} = useContext(ReviewContext);
    return(
        <ReviewContext.Consumer>
            {()=>{
                return(
                    <div class='relative w-[100%] max-w-[100%] h-[50vh] mb-[7%]'>
                        <img class='relative w-[100%] object-cover max-w-[100%] h-[100%]' src={imgUrl} alt={imgAlt} />
                        <Themebanner BannerName='Phone Review' filter='true'/>
                        <PopularBrands />
                    </div>
                )
            }}
        </ReviewContext.Consumer>
    )
}
export default ReviewTheme;