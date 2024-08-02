import React from 'react';
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Header(){
    useEffect(()=>{
        document.title = 'My website';
    },[])
    return(
        <header class='lg:relative block w-[100%] mb-[1%] max-w-[90%] m-auto h-[25vh]'>
            <div class='relative shadow-md shadow-gray-500 flex rounded-t bg-black w-[100%] max-w-[100%] h-[50%]'>
                <div class='relative w-[100%] ml-[2%] mr-[2%] max-w-[20%] h-[100%] border-[1px] border-[red]'>
                    <Link to='/'>Logo Img</Link>
                </div>
                <ul class='relative w-[100%] h-[70%] mt-[.5%] flex max-w-[65%] h-[100%] justify-items-center'>
                    <Link to='/' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-blue-500 font-[montserrat]'>Home</li></Link>
                    <Link to='/review' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-blue-500 font-[montserrat]'>Reviews</li></Link>
                    <Link to='/compare' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-blue-500 font-[montserrat]'>Compare</li></Link>
                    <Link to='/videos' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-blue-500 font-[montserrat]'>Videos</li></Link>
                    <Link to='/deals' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-blue-500 font-[montserrat]'>Deals</li></Link>
                    <Link to='/news' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative font-semibold hover:border-b-[3px] hover:border-blue-500 font-[montserrat]'>News</li></Link>
                    <Link to='/computing' class='relative text-white h-[100%] pt-[2%] px-[3%] m-auto'><li class='relative text-[0.9rem] font-semibold hover:border-b-[3px] hover:border-blue-500 font-[montserrat]'>Computing</li></Link>
                </ul>
                <div class='relative w-[100%] flex max-w-[15%] border-[1px] border-red-500'>
                    <Link class='relative top-[20%] left-[10%] mr-[10%] h-[fit-content]' to='notification'><NotificationsIcon className='relative text-white'/></Link>
                    <Link class='relative top-[20%] left-[10%] h-[fit-content]' to='login'><AccountCircleIcon className='relative text-white'/></Link>
                </div>
            </div>
                <div class='relative w-[100%] max-w-[100%] flex h-[50%]'>
                    <form class='relative mt-[2%] w-[100%] h-[55%] ml-[35%] flex max-w-[30%]'>
                        <input  type='text' name='search' placeholder='search for device' class='relative border-y-[1px] rounded-l border-l-[1px] pl-[1%] placeholder:font-[monserrat] focus:outline-none border-gray-700 w-[100%] max-w-[75%]' />
                        <input  type='submit' value='Search' class='relative bg-blue-900 text-white w-[100%] hover:cursor-pointer rounded-r font-[monserrat] font-semibold text-sm max-w-[25%]' />
                    </form>
                </div>
            
        </header>
    )
}
export default Header;