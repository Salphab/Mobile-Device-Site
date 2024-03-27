import { ComparisonContext } from "../../../Hooks/Context/ComparisonContext";
import { useContext, useEffect } from "react";

function Network(){
    const {data1,data2,data3} = useContext(ComparisonContext);
    useEffect(()=>{
        console.log(data1,data2,data3)
    })
    return(
        <ComparisonContext.Consumer>
        {()=>{
            return(
                <div class='relative w-[100%] max-w-[100%] h-[40vh]'>
                    
                </div>
            )
        }}
    </ComparisonContext.Consumer> 
    )
}
export default Network;