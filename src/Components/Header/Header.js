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
        <header class='lg:relative block w-[100%] mb-[1%] max-w-[90%] m-auto h-[fit-content]'>
            <div class='relative shadow-md shadow-gray-500 flex rounded-t bg-black w-[100%] max-w-[100%] h-[13vh]'>
                <div class='relative w-[100%] ml-[2%] mr-[2%] max-w-[20%] h-[100%] border-[1px] border-[red]'>
                    <Link to='/'>Logo Img</Link>
                </div>
                <ul class='relative w-[100%] h-[60%] mt-[1%] flex max-w-[70%] h-[100%] justify-items-center'>
                    <Link to='/' class='relative text-white hover:bg-blue-500 hover:rounded h-[70%] pt-[1%] px-[3%] m-auto'><li class='relative font-semibold font-[montserrat]'>Home</li></Link>
                    <Link to='/review' class='relative text-white hover:bg-blue-500 hover:rounded h-[70%] pt-[1%] px-[3%] m-auto'><li class='relative font-semibold font-[montserrat]'>Reviews</li></Link>
                    <Link to='/compare' class='relative text-white hover:bg-blue-500 hover:rounded h-[70%] pt-[1%] px-[3%] m-auto'><li class='relative font-semibold font-[montserrat]'>Compare</li></Link>
                    <Link to='/videos' class='relative text-white hover:bg-blue-500 hover:rounded h-[70%] pt-[1%] px-[3%] m-auto'><li class='relative font-semibold font-[montserrat]'>Videos</li></Link>
                    <Link to='/deals' class='relative text-white hover:bg-blue-500 hover:rounded h-[70%] pt-[1%] px-[3%] m-auto'><li class='relative font-semibold font-[montserrat]'>Deals</li></Link>
                    <Link to='/tech' class='relative text-white hover:bg-blue-500 hover:rounded h-[70%] pt-[1%] px-[3%] m-auto'><li class='relative font-semibold font-[montserrat]'>Tech</li></Link>
                </ul>
                <div class='relative w-[100%] flex max-w-[20%] border-[1px] border-red-500'>
                    <div class='relative flex w-[100%] max-w-[80%] h-[50%] m-auto'>
                        <Link class='relative top-[10%] left-[5%] mr-[10%] h-[fit-content]' to='/notification'><NotificationsIcon className='relative text-white'/></Link>
                        <Link class='relative top-[10%] left-[5%] h-[fit-content]' to='/login'><AccountCircleIcon className='relative text-white'/></Link>
                    </div>
                </div>
            </div>
                <div class='relative w-[100%] max-w-[100%] flex h-[13vh]'>
                    <form class='relative mt-[2%] w-[100%] h-[55%] ml-[35%] flex max-w-[30%]'>
                        <input  type='text' name='search' placeholder='search for device' class='relative border-y-[1px] rounded-l border-l-[1px] pl-[1%] placeholder:font-[monserrat] focus:outline-none border-gray-700 w-[100%] max-w-[75%]' />
                        <input  type='submit' value='Search' class='relative bg-blue-900 text-white w-[100%] hover:cursor-pointer rounded-r font-[monserrat] font-semibold text-sm max-w-[25%]' />
                    </form>
                </div>
            
        </header>
    )
}
export default Header;