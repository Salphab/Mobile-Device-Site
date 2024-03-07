import { ReviewContext } from "../../../Hooks/Context/ReviewContext";
import Themebanner from "../Themebanner/Themebanner";
import { useContext } from "react";

function ReviewTheme(){
    const {imgUrl, imgAlt} = useContext(ReviewContext);
    return(
        <ReviewContext.Consumer>
            {()=>{
                return(
                    <div class='relative w-[100%] max-w-[100%] h-[59vh] mb-[2%]'>
                        <img class='relative w-[100%] max-w-[100%] h-[100%]' src={imgUrl} alt={imgAlt} />
                        <Themebanner BannerName='Phone Review' filter='true' />
                    </div>
                )
            }}
        </ReviewContext.Consumer>
    )
}
export default ReviewTheme;