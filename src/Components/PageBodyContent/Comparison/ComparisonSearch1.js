import SearchIcon from '@mui/icons-material/Search';
import {useRef, useState, useEffect} from 'react';
import axios from 'axios';

function ComparisonSearch1(props){
    const suggestionRef = useRef('');
    const [value, setValue] = useState([]);
    const AllDevices = props.Devices.map((data)=>{ return data.toUpperCase()});
    const [searchData, setSearchData] = useState('');
    const parameter = window.location.search;
    const param = new URLSearchParams(parameter).get('phone1');
    const endPoint = `http://localhost:4001/device/${param}`;


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


    useEffect(() => {
        document.title = 'Compare Smartphones, Tablets, and other Devices: Comprehensive side-by-side comparison';
        if (parameter) {
            axios.get(endPoint)
                .then(res => {
                    setSearchData(res.data);
                    console.log(res.data);
                })
                .catch(error => console.log(error));
        }
    }, [endPoint, setSearchData, parameter]);

    if(searchData){
        return(
            <div class='relative block w-[100%] border-l-[1.5px] max-w-[33.34%] h-[95%] mt-[1%] border-gray-200'>
           <form class='relative inline-block w-[100%] mb-[3%] h-[8%] mt-[2%] max-w-[100%]'>
                <label htmlFor='Devices' class='relative text-xs font-semibold pl-[4%]'>Search for your device</label>
                <input class='relative border-[1px] border-gray-500 h-[100%] w-[100%] ml-[3%] max-w-[95%] rounded pl-[2%] placeholder:font-[sans-serif] placeholder:pl-[0%] focus:outline-none text-sm' type="text" placeholder='Device to compare' onChange={onQueryChange} />
            </form>
            <div class='relative mt-[4%] block w-[100%] max-w-[95%] m-auto h-[70%] border-t-[1px] border-gray-400'>
            <h2 className='relative w-[100%] max-w-[100%] text-center mt-[3%] text-md font-[monserrat] text-gray-700 font-semibold'>{searchData.name}</h2>
                <img class='relative m-auto mt-[7%] hover:cursor-pointer' src={searchData.img} alt={searchData.name}/>
            </div>
            <div class='absolute hidden top-[16%] ml-[2%] mt-[1%] w-[100%] max-w-[95%] h-[fit-content] bg-white' ref={suggestionRef}>
                {value.slice(0,10).map((items)=>{
                    return(
                        <ul> 
                            <li class='relative p-[1%] hover:text-blue-600 text-[.8rem] font-semibold'><a href='' onClick={()=>{
                                const newUrl = new URL(window.location.href)
                                newUrl.searchParams.set("phone1",items.replaceAll(' ','_').toLowerCase())
                                window.history.pushState({},'',newUrl)
                            }}>{items}</a></li>
                        </ul>
                    )
                })}
            </div>
        </div>
        )
    }
    else return(
        <div class='relative block w-[100%] border-l-[1.5px] max-w-[33.34%] h-[95%] mt-[1%] border-gray-200'>
            <form class='relative inline-block w-[100%] mb-[3%] h-[8%] mt-[2%] max-w-[100%]'>
                <label htmlFor='Devices' class='relative text-xs font-semibold pl-[4%]'>Search for your device</label>
                <input class='relative border-[1px] border-gray-500 h-[100%] w-[100%] ml-[3%] max-w-[95%] rounded pl-[2%] placeholder:font-[sans-serif] placeholder:pl-[0%] focus:outline-none text-sm' type="text" placeholder='Device to compare' name='phone1' onChange={onQueryChange} />
            </form>
            <div class='relative mt-[4%] flex w-[100%] max-w-[95%] m-auto h-[70%] border-t-[1px] border-gray-400'>
                <SearchIcon className='relative text-gray-500 text-[7rem] m-auto text-gray-400'/>
            </div>
            <div class='absolute hidden top-[16%] ml-[2.5%] mt-[1%] w-[100%] max-w-[95%] h-[fit-content] bg-white' ref={suggestionRef}>
                {value.slice(0,10).map((items)=>{
                    return(
                        <ul>
                            <li class='relative p-[1%] hover:text-blue-600 text-[.8rem] font-semibold'><a href={window.location.href + '?phone1=' + items.replaceAll(' ','_').toLowerCase()}>{items}</a></li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default ComparisonSearch1