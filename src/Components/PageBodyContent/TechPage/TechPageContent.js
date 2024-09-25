import TechTheme from "./TechPageTheme";
import { PhoneContext } from "../../../Hooks/Context/PhoneContext";
const imgUrl = require('../../../Assets/Img/Technology.jpg');
const imgAlt = 'Tech theme image';
function TechPageContent(){
    return(
        <PhoneContext.Provider value={{imgUrl, imgAlt}}>
            <section class='relative block col-start-4 col-end-13 h-[fit-content]'>
                <TechTheme />
                <body class='relatieve h-[fit-content]'>

                </body>
            </section>
        </PhoneContext.Provider>
    )
}
export default TechPageContent;