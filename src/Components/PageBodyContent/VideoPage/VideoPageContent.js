import PageThemes from "./VideoPageThemes";
import { VideoContext } from "../../../Hooks/Context/VideoContext";
const imgUrl = require('../../../Assets/Img/Video_themes 2.webp');
const imgAlt = 'page theme image';
function VideoContent(){
    return(
        <VideoContext.Provider value={{imgUrl, imgAlt}}>
            <section class='relative block col-start-4 col-end-13 h-[fit-content]'>
                <PageThemes />
            </section>
        </VideoContext.Provider>
    )
}
export default VideoContent;