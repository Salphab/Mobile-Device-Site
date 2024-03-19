import SearchIcon from '@mui/icons-material/Search';
import {useRef, useState} from 'react';
import { Link } from 'react-router-dom';

function ComparisonSearch(props){
    const suggestionRef = useRef('');
    const [value, setValue] = useState([]);
    const AllDevices = props.Devices.map((data)=>{ return data.toUpperCase()});
    const [payload, setPayload] = useState('') 
    const onQueryChange = (e)=>{
        const searchTerm = e.target.value.toUpperCase();
        if(searchTerm === ''){
            suggestionRef.current.style.display = 'none';
        }
        else{
            suggestionRef.current.style.display = 'block';
        }
        setValue(AllDevices.filter((data)=>data.includes(searchTerm)))
    }

    const HandleSearch = async (e)=>{
            
    }

    if(payload){
        return(
            <div class='relative block w-[100%] border-l-[1px] max-w-[33.34%] h-[100%] border-r-[1px] border-gray-300'>
            <h2 class='relative text-xs font-semibold pl-[5%] pt-[4%]'>Search for your query</h2>
            <form class='relative flex w-[100%] mb-[3%] h-[8%] mt-[2%] max-w-[100%]'>
                <input class='relative border-[1px] border-gray-500 h-[100%] w-[100%] m-auto max-w-[95%] rounded pl-[2%] placeholder:font-[sans-serif] placeholder:pl-[0%] focus:outline-none text-sm' type="text" placeholder='Device to compare' name='Devices' onChange={onQueryChange} />
            </form>
            <div class='relative flex w-[100%] max-w-[95%] m-auto h-[85%] border-t-[1px] border-gray-400'>
                
            </div>
            <div class='absolute hidden top-[16%] ml-[2%] mt-[1%] w-[100%] max-w-[95%] h-[fit-content] bg-white' ref={suggestionRef}>
                {value.slice(0,10).map((items)=>{
                    return(
                        <ul>
                            <li class='relative p-[1%] hover:text-blue-600 text-[.8rem] font-semibold'><Link to={items.replaceAll(' ','_').toLowerCase()} onMouseOver={HandleSearch()}>{items}</Link></li>
                        </ul>
                    )
                })}
            </div>
        </div>
        )
    }
    else return(
        <div class='relative block w-[100%] border-l-[1px] max-w-[33.34%] h-[100%] border-r-[1px] border-gray-300'>
            <h2 class='relative text-xs font-semibold pl-[5%] pt-[4%]'>Search for your query</h2>
            <form class='relative flex w-[100%] mb-[3%] h-[8%] mt-[2%] max-w-[100%]'>
                <input class='relative border-[1px] border-gray-500 h-[100%] w-[100%] m-auto max-w-[95%] rounded pl-[2%] placeholder:font-[sans-serif] placeholder:pl-[0%] focus:outline-none text-sm' type="text" placeholder='Device to compare' name='Devices' onChange={onQueryChange} />
            </form>
            <div class='relative flex w-[100%] max-w-[95%] m-auto h-[85%] border-t-[1px] border-gray-400'>
                <SearchIcon className='relative text-gray-500 text-[7rem] m-auto text-gray-400'/>
            </div>
            <div class='absolute hidden top-[16%] ml-[2%] mt-[1%] w-[100%] max-w-[95%] h-[fit-content] bg-white' ref={suggestionRef}>
                {value.slice(0,10).map((items)=>{
                    return(
                        <ul>
                            <li class='relative p-[1%] hover:text-blue-600 text-[.8rem] font-semibold'><Link to={items.replaceAll(' ','_').toLowerCase()}>{items}</Link></li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default ComparisonSearch