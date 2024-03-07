import { context } from "../../../Pages/PhonePage/PhonePersona";
import { useContext} from "react";
import DeviceSummary from "./DeviceSummary";
import DeviceFullInfo from "./DeviceFullInfo";

function PhoneContent(){
    const Context = useContext(context);
    return(
        <section class='relative block col-start-4 col-end-13 h-[fit-content]'>
            <div class='relative w-[100%] block max-w-[100%] h-[fit-content] border-[1px]'>
                <header class='relative w-[100%] max-w-[100%] h-[12%] bg-black  '>
                    <h1 class='relative text-white font-semibold font-[montserrat] h-[100%] py-[1%] text-xl ml-[5%]'>{Context.name}</h1>
                </header>
                <DeviceSummary />
            </div>
            <DeviceFullInfo />
        </section>
    )
}
export default PhoneContent;