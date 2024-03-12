import SearchIcon from '@mui/icons-material/Search';
import {useRef} from 'react';

function ComparisonSearch(){
    const suggestionRef = useRef('');
    return(
        <div class='relative block w-[100%] border-l-[1px] max-w-[33%] h-[100%] border-r-[1px] border-gray-300'>
            <h2 class='relative text-xs font-semibold pl-[5%] pt-[4%]'>Search for your query</h2>
            <form class='relative flex w-[100%] mb-[3%] h-[8%] mt-[2%] max-w-[100%]'>
                <input class='relative border-[1px] border-gray-500 mr-[0%] h-[100%] w-[100%] m-auto max-w-[70%] pl-[2%] placeholder:font-[sans-serif] placeholder:pl-[1%] focus:outline-none text-sm' type="text" placeholder='Device Name' onChange={()=>{suggestionRef.current.style.display = 'block'}} />
                <input class='relative text-white bg-red-500 w-[100%] max-w-[20%] ml-[0%] h-[100%] m-auto font-[monserrat] hover:cursor-pointer' type="submit" value='find'/>
            </form>
            <div class='relative flex w-[100%] max-w-[95%] m-auto h-[85%] border-t-[1px] border-gray-400'>
                <SearchIcon className='relative text-gray-500 text-[7rem] m-auto text-gray-400'/>
            </div>
            <div class='absolute overflow-y-scroll top-[16%] ml-[5%] hidden w-[100%] max-w-[90%] h-[80%] bg-white' ref={suggestionRef}>

            </div>
        </div>
    )
}

export default ComparisonSearch