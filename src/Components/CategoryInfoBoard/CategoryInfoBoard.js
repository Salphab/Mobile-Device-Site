import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function CategoryInfoBoards(props){
   const pathname = window.location.pathname.replace('/', '');
   const {count,banner} = props;
   const bannerInfo = banner.data[0].attributes.logo.data.attributes.formats;
   useEffect(()=>{
    console.log(banner)
   })
     
    return(
        <div class="relative bg-body-color block w-[100%] mb-[2%] max-w-[100%] h-[fit-content]">
            <div class='relative bg-black flex w-[100%] max-w-[100%] h-[7vh]'>
                <ul class='relative mt-[1%] flex w-[100%] max-w-[50%]'>
                    <li class='relative ml-[2%] mr-[1%] text-white text-sm'><Link to='/'>Home</Link></li>
                    <li class='relative text-gray-300 text-sm'>  |   {pathname}</li>
                </ul>
                <div class='relative w-[100%] max-w-[50%]'>
                    <h2 class='relative text-white text-sm pr-[10%] mt-[2%] float-right'><span class='relative font-semibold'>Result found - </span>{count}</h2>
                </div>
            </div>
            <div class='relative bg-white flex mt-[1%] w-[100%] max-w-[100%] h-[30vh]'>
                <div class='relative block w-[100%] max-w-[19%] m-auto h-[100%]'>
                    <div class='relative flex w-[100%] max-w-[100%] h-[30%]'>
                        <h1 class='relative font-normal text-black font-sans-serif text-2xl mb-[0%] m-auto'>{banner.data[0].attributes.info.device_company}</h1>
                    </div>
                     <div class='relative flex w-[100%] max-w-[100%] h-[70%]'>
                        <img src={'http://localhost:1337'+bannerInfo.medium.url} alt={bannerInfo.medium.name} className='relative m-auto mt-[5%] w-[100%] max-w-[50%]' />
                     </div>
                </div>
                <div class='relative w-[100%] max-w-[80%] h-[90%] m-auto border-l-[2px] border-black'>
                    <p class='relative font-thin leading-6 text-sm font-sans-serif justify text-justify px-[3%] pt-[2%]'>{banner.data[0].attributes.info.description}</p>
                </div>
            </div>
            <div class='relative w-[100%] max-w-[100%]'>

            </div>
        </div>
    )
}
export default CategoryInfoBoards;