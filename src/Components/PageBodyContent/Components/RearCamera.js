import React, { useContext, useEffect } from "react";
import { ComparisonContext } from "../../../Hooks/Context/ComparisonContext";

function RearCamera() {
    const { data1, data2, data3 } = useContext(ComparisonContext);
    
    let DeviceNetwork1 = data1 && data1[0]?.detailSpec[6];
    let DeviceNetwork2 = data2 && data2[0]?.detailSpec[6];
    let DeviceNetwork3 = data3 && data3[0]?.detailSpec[6];
    useEffect(()=>{
        if(data1){
            for(let i = 0; i < DeviceNetwork1?.specifications?.length; i++) {
                if(DeviceNetwork1?.specifications[i]?.name?.length === 1 && i > 0) {
                    DeviceNetwork1.specifications[i - 1].value += ' ' + DeviceNetwork1.specifications[i].value;
                    DeviceNetwork1.specifications.splice(i, 1);
                    i--;
                }
            }     
        }
    })

    useEffect(()=>{
        if(data2){
            for(let i = 0; i < DeviceNetwork2?.specifications?.length; i++) {
                if(DeviceNetwork2?.specifications[i]?.name?.length === 1 && i > 0) {
                    DeviceNetwork2.specifications[i - 1].value += ' ' + DeviceNetwork2.specifications[i].value;
                    DeviceNetwork2.specifications.splice(i, 1);
                    i--;
                }
            }                 
        }
    })

    useEffect(()=>{
        if(data3){
            for(let i = 0; i < DeviceNetwork3?.specifications?.length; i++) {
                if(DeviceNetwork3?.specifications[i]?.name?.length === 1 && i > 0) {
                    DeviceNetwork3.specifications[i - 1].value += ' ' + DeviceNetwork3.specifications[i].value;
                    DeviceNetwork3.specifications.splice(i, 1);
                    i--;
                }

            }        
        }
    })

    return (
        <section className='relative bg-slate-50 mt-[1%] rounded block w-[100%] max-w-[100%] h-[fit-content]'>
            <div className='relative w-[100%] max-w-[100%] h-[12%]'>
                <h2 className='relative w-[100%] max-w-[100%] pl-[2%] py-[2%] font-[ariel] text-lg font-bold h-[100%]'>Rear Camera</h2>
            </div>
            <table className='relative flex w-[100%] max-w-[100%] h-[88%]'>
                <tbody className='relative w-[100%] max-w-[100%]'>
                   <tr class='relative flex w-[100%] rounded bg-gray-200 max-w-[100%]'>
                        <td class='relative font-[monserrat] py-[1%] italic pl-[2%] w-[100%] max-w-[15%]'>Specs</td>
                        <td class='relative flex font-[monserrat] py-[1%] text-sm text-justify pl-[2%] pr-[3%] w-[100%] max-w-[28.33%]'>{DeviceNetwork1?.specifications[0]?.value || <span class='relative m-auto'>-</span>}</td>
                        <td class='relative flex font-[monserrat] py-[1%] text-sm w-[100%] pl-[2%] pr-[3%] w-[100%] max-w-[28.33%]'>{DeviceNetwork2?.specifications[0]?.value || <span class='relative m-auto'>-</span>}</td>
                        <td class='relative flex font-[monserrat] py-[1%] text-sm pl-[2%] pr-[3%] w-[100%] max-w-[28.33%]'>{DeviceNetwork3?.specifications[0]?.value || <span class='relative m-auto'>-</span>}</td>
                   </tr>
                   <tr class='relative flex w-[100%] max-w-[100%]'>
                        <td class='relative font-[monserrat] py-[1%] italic pl-[2%] w-[100%] max-w-[15%]'>Feature</td>
                        <td class='relative flex font-[monserrat] py-[1%] text-sm text-justify pl-[2%] pr-[3%] w-[100%] max-w-[28.33%]'>{DeviceNetwork1?.specifications[1]?.value || <span class='relative m-auto'>-</span>}</td>
                        <td class='relative flex font-[monserrat] py-[1%] text-sm w-[100%] pl-[2%] pr-[3%] w-[100%] max-w-[28.33%]'>{DeviceNetwork2?.specifications[1]?.value || <span class='relative m-auto'>-</span>}</td>
                        <td class='relative flex font-[monserrat] py-[1%] text-sm pl-[2%] pr-[3%] w-[100%] max-w-[28.33%]'>{DeviceNetwork3?.specifications[1]?.value || <span class='relative m-auto'>-</span>}</td>
                   </tr>
                   <tr class='relative flex w-[100%] bg-gray-200 max-w-[100%]'>
                        <td class='relative font-[monserrat] py-[1%] italic pl-[2%] w-[100%] max-w-[15%]'>Video</td>
                        <td class='relative flex font-[monserrat] py-[1%] text-sm text-justify pl-[2%] pr-[3%] w-[100%] max-w-[28.33%]'>{DeviceNetwork1?.specifications[2]?.value || <span class='relative m-auto'>-</span>}</td>
                        <td class='relative flex font-[monserrat] py-[1%] text-sm w-[100%] pl-[2%] pr-[3%] w-[100%] max-w-[28.33%]'>{DeviceNetwork2?.specifications[2]?.value || <span class='relative m-auto'>-</span>}</td>
                        <td class='relative flex font-[monserrat] py-[1%] text-sm pl-[2%] pr-[3%] w-[100%] max-w-[28.33%]'>{DeviceNetwork3?.specifications[2]?.value || <span class='relative m-auto'>-</span>}</td>
                   </tr>
                </tbody>
            </table>
        </section>
    );
}

export default RearCamera;
