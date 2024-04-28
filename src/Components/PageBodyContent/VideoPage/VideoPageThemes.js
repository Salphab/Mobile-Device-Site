import { VideoContext } from "../../../Hooks/Context/VideoContext";
import { useContext } from "react";
import Themebanner from "../Themebanner/Themebanner";

function PageThemes(){
    const {imgUrl, imgAlt} = useContext(VideoContext);
    return(
        <VideoContext.Consumer>
            {()=>{
                return(
                    <div class='relative w-[100%] max-w-[100%] h-[50vh] mb-[2%]'>
                        <img class='relative w-[100%] object-cover max-w-[100%] h-[100%]' src={imgUrl} alt={imgAlt} />
                        <Themebanner BannerName='Review Videos' filter='false' />
                    </div>
                )
            }}
        </VideoContext.Consumer>
    )
}
export default PageThemes;