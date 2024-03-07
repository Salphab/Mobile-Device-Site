import { Link } from "react-router-dom";
import {useRef, useEffect} from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
function CategoryNavButton(props){
    const leftbutton = useRef('');
    const rightbutton = useRef('');
    const payload = useRef('');
    const dotright = useRef('');
    const lastindex = useRef('');
    const payloadlength = props.button.length;
    useEffect(()=>{
        if(props.button[0].url === window.location.href){
            leftbutton.current.style.display = 'none';
            rightbutton.current.style.marginTop = '-15%'
        }
        else if(lastindex.current.href === window.location.href){
            rightbutton.current.style.display = 'none';
            leftbutton.current.style.marginTop = '-15%'
        }
        else{
            leftbutton.current.style.display = 'flex';
            rightbutton.current.style.display = 'flex';
        }
    },[props.button])
    useEffect(()=>{
        for(let i=0; i<=payload.current.children.length-1; i++){
            if(payload.current.children[i].href === window.location.href){
                payload.current.children[i].style.backgroundColor = 'grey';
                payload.current.children[i].style.color = 'white';
                payload.current.children[i].style.border = 'none';            
            }
        if(lastindex.current.href === window.location.href || payloadlength <=6){
            dotright.current.style.display = 'none';
        }
        }
    },[payloadlength])
    return(
        <div class='relative block w-[100%] max-w-[100%] h-[5vh]'>
            <div class='relative w-[100%] max-w-[fit-content] h-[25%] m-auto flex'>
            <Link key={props.button[props.button.length-1].value} to={props.button[props.button.length-1].url} reloadDocument><KeyboardArrowLeftIcon ref={leftbutton} className='relative text-white bg-black' /></Link>
                <div ref={payload} class='relative mx-[10%] flex w-[100%] max-w-[80%] m-auto'>
                    {props.button.slice(0,props.button.length-3).map((data)=>{
                    return(
                        <Link reloadDocument class='relative w-[30px] m-auto mx-[1%] rounded max-w-[100%] px-[2%] border-[1px] border-[black] text-black h-[100%]' key={data.value} to={data.url}><p class='relative w-[100%] max-w-[100%] text-center'>{data.value}</p></Link>
                     )
                    })}
                    <p ref={dotright} class='relative py-[0%] mx-[2%]'>...</p>
                    <Link ref={lastindex} reloadDocument class='relative w-[30px] m-auto mx-[1%] rounded max-w-[100%] px-[2%] border-[1px] border-[black] text-black h-[100%]' key={props.button[props.button.length-3].value} to={props.button[props.button.length-3].url}><p class='relative w-[100%] max-w-[100%] text-center'>{props.button[props.button.length-3].value}</p></Link>
                </div>
            <Link key={props.button[props.button.length-2].value} reloadDocument to={props.button[props.button.length-2].url}><KeyboardArrowRightIcon ref={rightbutton} className='relative bg-black text-white' /></Link>
            </div>
        </div>
    )
}
export default CategoryNavButton;