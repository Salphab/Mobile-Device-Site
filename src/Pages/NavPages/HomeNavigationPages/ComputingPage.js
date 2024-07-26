import React from 'react';
import {useEffect} from 'react';
import Header from "../../../Components/Header/Header";
import HomeSidebar from '../../../Components/Sidebar/HomeSidebar';
import Footer from '../../../Components/Footer/Footer';

function ComputingPage(){
    useEffect(()=>{
        window.scrollTo(0,0)
    })
    return(
        <React.Fragment>
            <Header />
            <section class='relative grid grid-cols-12 gap-x-[0.5%] w-[100%] max-w-[95%] m-auto h-[fit-content]'>
                <HomeSidebar/>
                
            </section>
            <Footer />
        </React.Fragment>
    )
}
export default ComputingPage;