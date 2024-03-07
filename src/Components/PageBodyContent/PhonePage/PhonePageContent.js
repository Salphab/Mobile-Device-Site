import PhoneTheme from "./PhonePageTheme";
import { PhoneContext } from "../../../Hooks/Context/PhoneContext";
const imgUrl = require('../../../Assets/Img/Phone_List.jpg');
const imgAlt = 'page theme image';
function PhonePageContent(){
    return(
        <PhoneContext.Provider value={{imgUrl, imgAlt}}>
            <section class='relative block col-start-4 col-end-13 h-[fit-content]'>
                <PhoneTheme />
                <body class='relatieve h-[fit-content]'>
                    
                </body>
            </section>
        </PhoneContext.Provider>
    )
}
export default PhonePageContent;