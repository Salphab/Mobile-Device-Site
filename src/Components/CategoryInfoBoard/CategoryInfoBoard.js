import React from "react"
import { Link } from "react-router-dom"
function CategoryInfoBoards(props){
   const pathname = window.location.pathname.replace('/', '');
   const {count} = props;
     
    return(
        <div class="relative bg-body-color block w-[100%] mb-[2%] max-w-[100%] h-[40vh]">
            <div class='relative bg-gray-600 flex w-[100%] max-w-[100%] h-[19.5%]'>
                <ul class='relative mt-[1%] flex w-[100%] max-w-[50%]'>
                    <li class='relative ml-[2%] mr-[1%] text-white text-sm'><Link to='/'>Home</Link></li>
                    <li class='relative text-gray-300 text-sm'>  |   {pathname}</li>
                </ul>
                <div class='relative w-[100%] max-w-[50%]'>
                    <h2 class='relative text-white text-sm mr-[3%] mt-[2%] float-right'><span class='relative font-semibold'>Result found:</span> {count}</h2>
                </div>
            </div>
            <div class='relative bg-white flex mt-[1%] w-[100%] max-w-[100%] bg-gray-100 h-[70%]'>
                <div class='relative w-[100%] max-w-[20%] ml-[2%] h-[100%] border-[1px] border-red-500'>

                </div>
                <div class='relative w-[100%] max-w-[80%] border-[1px] border-red-500'>

                </div>
            </div>
        </div>
    )
}
export default CategoryInfoBoards;