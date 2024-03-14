import SearchIcon from '@mui/icons-material/Search';
import {useRef, useState} from 'react';


function ComparisonSearch(props){
    const suggestionRef = useRef('');
    const [value, setValue] = useState([]);
    const AllDevices = props.Devices;

    const HandleSearch = (e)=>{
        const searchTerm = e.target.value;
        if(searchTerm === ''){
            suggestionRef.current.style.display = 'none';
        }
        else{
            suggestionRef.current.style.display = 'block';
        }
        setValue(AllDevices.filter((data)=>data.includes(searchTerm)))
    }


    return(
        <div class='relative block w-[100%] border-l-[1px] max-w-[33%] h-[100%] border-r-[1px] border-gray-300'>
            <h2 class='relative text-xs font-semibold pl-[5%] pt-[4%]'>Search for your query</h2>
            <form class='relative flex w-[100%] mb-[3%] h-[8%] mt-[2%] max-w-[100%]'>
                <input class='relative border-[1px] border-gray-500 mr-[0%] h-[100%] w-[100%] m-auto max-w-[70%] pl-[2%] placeholder:font-[sans-serif] placeholder:pl-[1%] focus:outline-none text-sm' type="text" placeholder='Device Name' name='Devices' onChange={HandleSearch} />
                <input class='relative text-white bg-red-500 w-[100%] max-w-[20%] ml-[0%] h-[100%] m-auto font-[monserrat] hover:cursor-pointer' type="submit" value='find'/>
            </form>
            <div class='relative flex w-[100%] max-w-[95%] m-auto h-[85%] border-t-[1px] border-gray-400'>
                <SearchIcon className='relative text-gray-500 text-[7rem] m-auto text-gray-400'/>
            </div>
            <div class='absolute hidden overflow-y-scroll top-[16%] ml-[5%] mt-[4%] w-[100%] max-w-[90%] h-[fit-content] bg-white' ref={suggestionRef}>
                {value.slice(0,10).map((items)=>{
                    return(
                        <ul>
                            <li class='relative text-sm'>{items}</li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default ComparisonSearch