import ContentSidebar from "../../Sidebar/ContentSidebar";
import PhoneContent from "./PhoneContent";

function PhoneInfoBody(){
    
    return(
        <section class='relative grid grid-cols-12 gap-x-[0.5%] w-[100%] max-w-[90%] m-auto h-[fit-content]'>
           <ContentSidebar />
           <PhoneContent/>
        </section>
    )
}
export default PhoneInfoBody;