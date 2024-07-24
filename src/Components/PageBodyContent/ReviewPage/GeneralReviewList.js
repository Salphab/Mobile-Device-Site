import {useState, useEffect} from 'react';
import axios from 'axios';

function GeneralReviewList(){
    const [PhoneReview, setPhoneReview] = useState('');
    useEffect(()=>{
        axios.get('http://localhost:1337/api/reviews?populate=*')
        .then((res)=>{
            setPhoneReview(res.data);
            console.log(PhoneReview)
        },[])
        .catch(error=>{console.log(error)})
    })
    if(PhoneReview){
        return(
            <section class='relative w-[100%] max-w-[100%] h-[100vh] border-[1px] border-[solid]'>
                {PhoneReview}
            </section>
        )
    }
    else{
        return(
            <section class='relative w-[100%] max-w-[100%] h-[100vh] bg-black'>
                Nothing is seen here
            </section>
        )
    } 
    }
export default GeneralReviewList; 