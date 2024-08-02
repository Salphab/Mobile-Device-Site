import { useContext } from "react";
import { ReviewContext } from "../../../Hooks/Context/ReviewContext";
import Themebanner from "../Themebanner/Themebanner";
import PopularBrands from "./PopularBrands";
const  imgSrc = require('../../../Assets/Img/Review_themes.png');
function ReviewTheme(){
    let {imgAlt, themeTitle } = useContext(ReviewContext);
    return (
        <div className='relative w-[100%] max-w-[100%] h-[50vh] mb-[7%]'>
            <img 
                loading="easy"
                className='relative w-[100%] object-cover max-w-[100%] h-[100%]' 
                src={imgSrc}     
                alt={imgAlt} 
            />
            <Themebanner BannerName={themeTitle} filter='true' />
            <PopularBrands />
        </div>
    );
}

export default ReviewTheme;
