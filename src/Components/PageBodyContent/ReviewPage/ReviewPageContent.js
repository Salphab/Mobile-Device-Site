import ReviewTheme from "./ReviewPageTheme";
import { ReviewContext } from "../../../Hooks/Context/ReviewContext";
const imgUrl = require('../../../Assets/Img/Review_themes.png');
const imgAlt = 'page theme image';
function ReviewContent(){
    return(
        <ReviewContext.Provider value={{imgUrl, imgAlt}}>
            <section class='relative block col-start-4 col-end-13 h-[fit-content]'>
                <ReviewTheme />
            </section>
        </ReviewContext.Provider>
    )
}
export default ReviewContent;