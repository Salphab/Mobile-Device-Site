import React from 'react';
import {useEffect} from 'react';
import Header from '../Components/Header/Header';
import HomeBody from '../Components/PageBodyContent/HomePage/Homebodysection';
import Footer from '../Components/Footer/Footer';
function HomePage(){
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return(
        <div class="relative block w-[100%] max-w-[100%] h-[fit-content]">
            <Header />
            <HomeBody/>
            <Footer/>
        </div>
    )
}
export default HomePage;