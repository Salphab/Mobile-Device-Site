import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function GeneralReviewList(){
    const [PhoneReview, setPhoneReview] = useState([]);
    const [isLoading, SetIsLoading] = useState(true);
    useEffect(()=>{
        axios.get('http://localhost:1337/api/reviews?populate=*')
        .then((res)=>{
            setPhoneReview(res.data);
            SetIsLoading(false);
            console.log(PhoneReview.data[0])
        },[])
        .catch(error=>{console.log(error)})
    })
    if(isLoading){
        return(
            <section class='relative w-[100%] max-w-[100%] h-[100vh] bg-black'>
                Nothing is seen here
            </section>
        )
    }
    else{
        return(
            <section class='relative flex w-[100%] max-w-[100%] h-[fit-content] border-[1px] border-[solid]'>
                <Link to='' class='relative hover:bg-gray-100 block rounded bg-white px-[1%] block w-[100%] max-w-[33%] h-[50vh] border-[1px]'>
                    <img class='relative rounded my-[2%]' src={'http://localhost:1337'+PhoneReview.data[0].attributes.exhibition.data.attributes.formats.small.url} alt={PhoneReview.data[0].attributes.exhibition.data.attributes.alternativeText}/>
                    <h2 class='relative w-[100%] text-lg mt-[5%] hover:underline leading-5 max-w-[95%] font-bold font-[monserrat] text-justify'>{PhoneReview.data[0].attributes.meta.title}</h2>
                    <h2 class='mt-[5%]'><span class='font-[monserrat] text-sm font-semibold text-gray-500'>Publish on:</span> <span class='relative text-sm font-[monserrat]'>{PhoneReview.data[0].attributes.meta.Publish_date}</span></h2>
                </Link>
            </section>
        )
    } 
    }
export default GeneralReviewList; 