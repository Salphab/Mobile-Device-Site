import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header(){
    useEffect(()=>{
        document.title = 'My website';
    },[])
    return(
        <header class='lg:relative mt-[3%] grid grid-cols-12 w-[100%] mb-[3%] grid-row-6 max-w-[90%] m-auto h-[20vh]'>
            <div class='col-start-1 col-end-4 row-start-1 row-end-7'>
                <div class='relative w-[100%] max-w-[80%] m-auto h-[51%] border-[1px] border-[red]'>
                    <Link to='/'>Logo Img</Link>
                </div>
            </div>
            <div class='col-start-4 col-end-13 row-start-1 row-end-7'>
                <ul class='relative w-[100%] flex max-w-[100%] bg-black h-[50%] justify-items-center'>
                    <a href='/' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-gray-300 font-[montserrat]'>Home</li></a>
                    <a href='/phones' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-gray-300 font-[montserrat]'>Phones</li></a>
                    <a href='/review' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-gray-300 font-[montserrat]'>Reviews</li></a>
                    <a href='/compare' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-gray-300 font-[montserrat]'>Compare</li></a>
                    <a href='/videos' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-gray-300 font-[montserrat]'>Videos</li></a>
                    <a href='/news' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-gray-300 font-[montserrat]'>News</li></a>
                    <a href='/computing' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative text-[0.9rem] font-semibold hover:border-b-[3px] hover:border-gray-300 font-[montserrat]'>Computing</li></a>
                </ul>
                <div class='col-start-4 flex justify-center items-center col-end-13 h-[40%]'>
                    <form class='relative w-[100%] mt-[2%] h-[80%] flex max-w-[50%]'>
                        <input  type='text' name='search' placeholder='search for device' class='relative border-y-[1px] border-l-[1px] pl-[1%] focus:outline-none border-black w-[100%] max-w-[60%]' />
                        <input  type='submit' value='Search' class='relative bg-red-500 text-white w-[100%] font-semibold text-sm max-w-[20%]' />
                    </form>
                </div>
            </div>
            
        </header>
    )
}
export default Header;