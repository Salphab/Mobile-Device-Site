import { Link } from "react-router-dom";
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer(){
    return(
        <section class='relative block w-[100%] max-w-[90%] m-auto mt-[5%] h-[50vh]'>
            <div class='relative block w-[100%] max-w-[100%] bg-gray-300 h-[70%]'>
                <h1 class='relative text-center text-xl font-semibold top-[5%]'>LET'S STAY IN TOUCH</h1>
                <h2 class='relative text-center mt-[1.5%]'>Get our top stories straight to your inbox!</h2>
                <form class='relative flex w-[100%] bg-black m-auto mt-[2%] max-w-[40%] h-[20%]'>
                    <input class='relative w-[100%] focus:outline-none placeholder:text-sm pl-[3%] h-[100%] max-w-[80%]' type="text" placeholder="ENTER YOUR EMAIL ADDRESS"/>
                    <input class='relative w-[100%] max-w-[20%] h-[100%] bg-red-500 text-white hover:cursor-pointer' type="submit" value='Subscribe'/>
                </form>
                <h3 class='relative text-center mt-[2%] text-xs'>By signing up, you consent to the <a href='/privacy-policy' class='relative text-red-500 hover:underline'>privacy policy.</a></h3>
            </div>
            <div class='relative block w-[100%] bg-[#00172d] max-w-[100%] h-[40%]'>
                <ul className="relative w-[100%] max-w-[fit-content] ml-[20%] top-[5%] flex">
                    <li class=' text-sm hover:underline text-white border-white font-light w-[100%] max-w-[fit-content] h-[fit-content] border-r-[1px] px-[3%]'><Link>Home</Link></li>
                    <li class=' text-sm hover:underline text-white border-white font-light w-[100%] max-w-[fit-content] h-[fit-content] border-r-[1px] px-[3%]'><Link>Phone</Link></li>
                    <li class=' text-sm hover:underline text-white border-white font-light w-[100%] max-w-[fit-content] h-[fit-content] border-r-[1px] px-[3%]'><Link>Review</Link></li>
                    <li class=' text-sm hover:underline text-white border-white font-light w-[100%] max-w-[fit-content] h-[fit-content] border-r-[1px] px-[3%]'><Link>Events</Link></li>
                    <li class=' text-sm hover:underline text-white border-white font-light w-[100%] max-w-[fit-content] h-[fit-content] border-r-[1px] px-[3%]'><Link>Videos</Link></li>
                    <li class=' text-sm hover:underline text-white border-white font-light w-[100%] max-w-[fit-content] h-[fit-content] border-r-[1px] px-[3%]'><Link>Compare</Link></li>
                    <li class=' text-sm hover:underline text-white border-white font-light w-[100%] max-w-[fit-content] h-[fit-content] border-r-[1px] px-[3%]'><Link>News</Link></li>
                    <li class=' text-sm hover:underline text-white border-white font-light w-[100%] max-w-[fit-content] h-[fit-content] border-r-[1px] px-[3%]'><Link>FAQ</Link></li>
                    <li class=' text-sm hover:underline text-white border-white font-light w-[100%] max-w-[fit-content] h-[fit-content] border-r-[1px] px-[3%]'><Link>Site Map</Link></li>
                    <li class=' text-sm hover:underline text-white border-white font-light w-[100%] max-w-[fit-content] h-[fit-content] border-r-[1px] px-[3%]'><Link>Advertise with us</Link></li>                    
                </ul>
                <ul class='relative flex w-[100%] max-w-[fit-content] m-auto mt-[1%]'>
                    <li class='relative mr-[5%]'><Link><YouTubeIcon className='relative text-white '/></Link></li>
                    <li class='relative mr-[5%]'><Link><InstagramIcon className='relative text-white '/></Link></li>
                    <li class='relative mr-[5%]'><Link><FacebookIcon className='relative text-white '/></Link></li>
                    <li class='relative mr-[5%]'><Link><TwitterIcon className='relative text-white '/></Link></li>
                </ul>
                <p class='relative text-white mt-[1%] text-sm text-center'>Company <span>&copy;</span>2024. All Rights Reserved</p>
            </div>
        </section>
    )
}
export default Footer