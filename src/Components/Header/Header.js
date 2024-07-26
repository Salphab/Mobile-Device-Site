import React from 'react';
import { useEffect } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header(){
    useEffect(()=>{
        document.title = 'My website';
    },[])
    return(
        <header class='lg:relative block w-[100%] mb-[1%] max-w-[90%] m-auto h-[20vh]'>
            <div class='relative flex rounded-t bg-black w-[100%] max-w-[100%] h-[65%]'>
                <div class='relative w-[100%] ml-[2%] mr-[2%] max-w-[20%] h-[100%] border-[1px] border-[red]'>
                    <a to='/'>Logo Img</a>
                </div>
                <ul class='relative w-[100%] h-[70%] mt-[.5%] flex max-w-[65%] h-[100%] justify-items-center'>
                    <a href='/' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-gray-300 font-[montserrat]'>Home</li></a>
                    <a href='/review' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-gray-300 font-[montserrat]'>Reviews</li></a>
                    <a href='/compare' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-gray-300 font-[montserrat]'>Compare</li></a>
                    <a href='/videos' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-gray-300 font-[montserrat]'>Videos</li></a>
                    <a href='/deals' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-gray-300 font-[montserrat]'>Deals</li></a>
                    <a href='/news' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-gray-300 font-[montserrat]'>News</li></a>
                    <a href='/computing' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative text-[0.9rem] font-semibold hover:border-b-[3px] hover:border-gray-300 font-[montserrat]'>Computing</li></a>
                </ul>
                <div class='relative w-[100%] flex max-w-[15%] border-[1px] border-red-500'>
                    <a class='relative top-[20%] left-[10%] mr-[10%] h-[fit-content]' href='notification'><NotificationsIcon className='relative text-white'/></a>
                    <a class='relative top-[20%] left-[10%] h-[fit-content]' href='login'><AccountCircleIcon className='relative text-white'/></a>
                </div>
            </div>
                <div class='relative w-[100%] max-w-[100%] h-[55%] flex h-[25%]'>
                    <form class='relative mt-[.5%] w-[100%] h-[60%] ml-[35%] flex max-w-[30%]'>
                        <input  type='text' name='search' placeholder='search for device' class='relative border-y-[1px] rounded-l border-l-[1px] pl-[1%] placeholder:font-[monserrat] focus:outline-none border-gray-700 w-[100%] max-w-[75%]' />
                        <input  type='submit' value='Search' class='relative bg-blue-900 text-white w-[100%] hover:cursor-pointer rounded-r font-[monserrat] font-semibold text-sm max-w-[25%]' />
                    </form>
                </div>
            
        </header>
    )
}
export default Header;