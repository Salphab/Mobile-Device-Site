import { ComparisonContext } from "../../../Hooks/Context/ComparisonContext";
import { useContext} from "react";

function Network(){
    const {data1,data2,data3} = useContext(ComparisonContext);
    return(
        <ComparisonContext.Consumer>
        {()=>{
            return(
                <section class='relative block border-[1px] w-[100%] max-w-[100%] h-[fit-content]'>
                    <div class='relative w-[100%] max-w-[100%] h-[12%] border-[1px] border-red-500'>
                        <h2 class='relative w-[100%] max-w-[15%] text-center font-[monserrat] text-lg font-bold h-[100%]'>Network</h2>
                    </div>
                    <table class='relative flex w-[100%] max-w-[100%] h-[88%]'>
                        <tr class='relative block w-[100%] max-w-[100%] h-[fit-content] border-[1px] border-red-500'>
                            <th class='relative text-sm font-semibold font-[monserrat] bg-red-500 w-[100%] text-center max-w-[19%]'>Technology</th>
                            <td class='relative text-sm font-semibold font-[monserrat] bg-blue-500 w-[100%] max-w-[35.5%]'>Technology</td>
                            <td class='relative text-sm font-semibold font-[monserrat] bg-black w-[100%] max-w-[35.5%]'>Technology</td>
                            <td class='relative text-sm font-semibold font-[monserrat] bg-green-500 w-[100%] max-w-[35.5%]'>Technology</td>
                        </tr>
                    </table>
                </section>
            )
        }}
    </ComparisonContext.Consumer> 
    )
}
export default Network;