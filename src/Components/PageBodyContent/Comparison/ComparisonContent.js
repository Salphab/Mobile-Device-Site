import ComparisonTheme from "./ComparisonPageTheme";
import { ComparisonContext } from "../../../Hooks/Context/ComparisonContext";
import ComparisonBody from "./ComparisonBody";

const imgUrl = require('../../../Assets/Img/comparison 2.jpg');
const imgAlt = 'page theme image';
function ComparisonContent(){
    return(
        <ComparisonContext.Provider value={{imgUrl, imgAlt}}>
            <section class='relative block col-start-4 col-end-13 h-[fit-content]'>
                <ComparisonTheme />
                <ComparisonBody />
            </section>
        </ComparisonContext.Provider>
    )
}
export default ComparisonContent;