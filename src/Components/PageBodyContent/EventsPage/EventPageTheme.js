import { EventContext } from "../../../Hooks/Context/EventContext";
import { useContext } from "react";
import Themebanner from "../Themebanner/Themebanner";

function EventTheme(){
    const {imgUrl, imgAlt} = useContext(EventContext);
    return(
        <EventContext.Consumer>
            {()=>{
                return(
                    <div class='relative w-[100%] max-w-[100%] h-[59vh] mb-[2%]'>
                        <img class='relative w-[100%] max-w-[100%] h-[100%]' src={imgUrl} alt={imgAlt} />
                        <Themebanner BannerName='Events' filter='false' />
                    </div>
                    
                )
            }}
        </EventContext.Consumer>
    )
}
export default EventTheme;