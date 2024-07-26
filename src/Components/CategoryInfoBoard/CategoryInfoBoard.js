import React from "react"
import { Link } from "react-router-dom"
function AppleInfoBoard(props){
   const pathname = window.location.pathname.replace('/', '');
     
    return(
        <div class="relative block w-[100%] mb-[2%  ] max-w-[100%] h-[30vh]">
            <div class='relative bg-gray-600 flex w-[100%] max-w-[100%] h-[25%]'>
                <ul class='relative mt-[1%] flex w-[100%] max-w-[50%]'>
                    <li class='relative ml-[2%] mr-[1%] text-white text-sm'><Link to='/'>Home</Link></li>
                    <li class='relative text-gray-300 text-sm'>  |   {pathname}</li>
                </ul>
                <div class='relative w-[100%] max-w-[50%]'>
                    <h2 class='relative text-white text-sm mr-[3%] mt-[2%] float-right'><span class='relative font-semibold'>Result found:</span> {props.count}</h2>
                </div>
            </div>
            <div class='relative w-[100%] max-w-[100%] bg-gray-100 h-[80%]'>

            </div>
        </div>
    )
}
export default AppleInfoBoard