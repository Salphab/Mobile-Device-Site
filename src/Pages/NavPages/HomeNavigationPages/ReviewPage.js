import React from 'react';
import {useEffect} from 'react';
import Header from "../../../Components/Header/Header";
import HomeSidebar from '../../../Components/Sidebar/HomeSidebar';
import ReviewContent from '../../../Components/PageBodyContent/ReviewPage/ReviewPageContent';
import Footer from '../../../Components/Footer/Footer';
import { ReviewContext } from "../../../Hooks/Context/ReviewContext";

function ReviewPage(props){
    const {imgSrc,imgAlt, themeTitle,url} = props;
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return(
        <ReviewContext.Provider value={{imgSrc, imgAlt,themeTitle,url}}>
            <>
                <Header />
                <section class='relative grid grid-cols-12 gap-x-[0.5%] w-[100%] max-w-[90%] m-auto h-[fit-content]'>
                    <HomeSidebar/>
                    <ReviewContent />
                </section>
                <Footer />
            </>
        </ReviewContext.Provider>
    )
}
export default ReviewPage;