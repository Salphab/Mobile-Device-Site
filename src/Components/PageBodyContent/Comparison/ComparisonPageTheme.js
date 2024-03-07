import { ComparisonContext } from "../../../Hooks/Context/ComparisonContext"; 
import { useContext } from "react";
import Themebanner from "../Themebanner/Themebanner";

function ComparisonTheme(){
    const {imgUrl, imgAlt} = useContext(ComparisonContext);
    return(
        <ComparisonContext.Consumer>
            {()=>{
                return(
                    <div class='relative w-[100%] max-w-[100%] h-[59vh] mb-[2%]'>
                        <img class='relative w-[100%] max-w-[100%] h-[100%]' src={imgUrl} alt={imgAlt} />
                        <Themebanner BannerName='Device Comparison' filter='false' />
                    </div>
                    
                )
            }}
        </ComparisonContext.Consumer>
    )
}
export default ComparisonTheme;