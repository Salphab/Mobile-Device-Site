import ReviewTheme from "./ReviewPageTheme";
import GeneralReviewList from "./GeneralReviewList";
function ReviewContent(){
    return(
            <section class='relative block col-start-4 col-end-13 h-[fit-content]'>
                <ReviewTheme />
                <GeneralReviewList />
            </section>
    )
}
export default ReviewContent;