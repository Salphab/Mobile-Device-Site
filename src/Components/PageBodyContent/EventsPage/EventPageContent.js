import EventTheme from "./EventPageTheme";
import { EventContext } from "../../../Hooks/Context/EventContext";
const imgUrl = require('../../../Assets/Img/Tech_Events.jpg');
const imgAlt = 'page theme image';
function EventPageContent(){
    return(
        <EventContext.Provider value={{imgUrl, imgAlt}}>
            <section class='relative block col-start-4 col-end-13 h-[fit-content]'>
                <EventTheme />
            </section>
        </EventContext.Provider>
    )
}
export default EventPageContent;