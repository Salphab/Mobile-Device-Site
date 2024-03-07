import { context } from "../../../Pages/PhonePage/PhonePersona";
import { useContext } from "react";
function BatteryInfo(){
    const Context = useContext(context);
    const info = Context.detailSpec[11].specifications;
    return(
        <div class='relative block mb-[1%] w-[100%] max-w-[100%] h-[fit-content]'>
            <header class='relative w-[100%] max-w-[100%] pl-[2%] text-gray-700 text-xl text-center font-semibold font-[montserrat] py-[.1%] bg-gray-300'>{Context.detailSpec[11].category}</header>
            <table class='relative w-[100%] max-w-[100%] h-[fit-content]'>
                {info.map((data)=>{
                    return(
                        <tr class='relative border-b-[1px]'>
                            <td class='relative w-[100%] max-w-[30%] font-[helverica] font-semibold pl-[10%]'>{data.name}</td>
                            <td class='relative w-[100%] max-w-[70%] font-[helverica]'>{data.value}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default BatteryInfo;