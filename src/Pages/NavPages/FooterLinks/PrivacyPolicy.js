import Header from "../../../Components/Header/Header";
import PrivacyHeader from "../../../Components/Footer/PrivacyPolicy/PrivacyHeader";
import InformationCollected from "../../../Components/Footer/PrivacyPolicy/InformationCollected";
import Activity from "../../../Components/Footer/PrivacyPolicy/Activity";
import Cookies from "../../../Components/Footer/PrivacyPolicy/Cookies";
import Advertisement from "../../../Components/Footer/PrivacyPolicy/Advertisement";
import Children from "../../../Components/Footer/PrivacyPolicy/Children";
import DataSecurity from "../../../Components/Footer/PrivacyPolicy/DataSecurity";
import Transfer from "../../../Components/Footer/PrivacyPolicy/Transfer";
import Footer from "../../../Components/Footer/Footer";
import Links from "../../../Components/Footer/PrivacyPolicy/Links";

import {useEffect} from 'react';
function PrivacyPolicy(){
    useEffect(()=>{
        document.title = 'Privacy Policy - Website'
    })
    return(
        <div class='relative h-[fit-content]'>
            <Header/>
            <main class='relative block w-[100%] max-w-[80%] h-[fit-content] m-auto'>
                <PrivacyHeader />
                <InformationCollected />
                <Activity />
                <Cookies />
                <Advertisement />
                <Links />
                <Children />
                <DataSecurity />
                <Transfer />
            </main>
            <Footer/>
        </div>
    )
}
export default PrivacyPolicy;