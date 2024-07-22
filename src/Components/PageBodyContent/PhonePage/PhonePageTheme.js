import { PhoneContext } from "../../../Hooks/Context/PhoneContext";
import Themebanner from "../Themebanner/Themebanner";
import { useContext } from "react";

function PhoneTheme(){
    const {imgUrl, imgAlt} = useContext(PhoneContext);
    return(
        <PhoneContext.Consumer>
            {()=>{
                return(
                    <div class='relative w-[100%] max-w-[100%] h-[50vh] mb-[2%]'>
                        <img class='relative w-[100%] object-cover max-w-[100%] h-[100%]' src={imgUrl} alt={imgAlt} />
                        <Themebanner BannerName='Exotic Deals Online' filter='false' />
                    </div>
                )
            }}
        </PhoneContext.Consumer>
    )
}
export default PhoneTheme;