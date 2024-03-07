import { context } from "../../../Pages/PhonePage/PhonePersona";
import { useContext } from "react";
function TestInfo(){
    const Context = useContext(context);
    const info = Context.detailSpec[13].specifications;

    return(
        <div class='relative block mb-[1%] w-[100%] max-w-[100%] h-[fit-content]'>
            <header class='relative w-[100%] max-w-[100%] pl-[2%] text-gray-700 text-center text-xl font-semibold font-[montserrat] py-[.1%] bg-gray-300'>{Context.detailSpec[13].category}</header>
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

export default TestInfo;