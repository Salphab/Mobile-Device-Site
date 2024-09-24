import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ReviewContext } from "../../../Hooks/Context/ReviewContext";
import { useContext } from "react";
function GeneralReviewList(){
    const {url} = useContext(ReviewContext);
    const [PhoneReview, setPhoneReview] = useState([]);
    const [isLoading, SetIsLoading] = useState(true);
    useEffect(()=>{
        axios.get(url)
        .then((res)=>{
            setPhoneReview(res.data);
            SetIsLoading(false);
        },[])
        .catch(error=>{console.log(error)})
    })
    if((!isLoading && PhoneReview.data.length > 1) || (!isLoading && PhoneReview.data.length === 1)){
        return(
            <section class='relative grid gap-2 grid-cols-3 w-[100%] max-w-[100%] h-[fit-content] border-[1px] border-[solid]'>
                {PhoneReview.data.map((data)=>{
                    return(
                        <Link to='' class='relative shadow-xl shadow-gray-400 hover:bg-cyan-50 block rounded bg-slate-50 block h-[50vh]'>
                            <img loading="lazy" class='relative rounded-t mb-[2%]' src={'http://localhost:1337'+data.attributes.exhibition.data.attributes.formats.small.url} alt={data.attributes.exhibition.data.attributes.alternativeText}/>
                            <h2 class='relative w-[100%] px-[2%] text-md mt-[5%] leading-5 max-w-[95%] font-bold font-[monserrat] text-justify'>{data.attributes.meta.title}</h2>
                            <h2 class='absolute ml-[2%] bottom-[6%]'><span class='font-[monserrat] text-sm font-semibold text-gray-500'>Published on:</span> <span class='relative text-sm font-[monserrat]'>{data.attributes.meta.Publish_date}</span></h2>
                        </Link>
                    )
                })}
            </section>
        )
    } 
    return(
        <section class='relative w-[100%] max-w-[100%] h-[100vh]'>
            Nothing is seen here
        </section>
    )
    }
export default GeneralReviewList; 