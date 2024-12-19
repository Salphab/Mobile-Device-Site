import Header from '../../../../Components/Header/Header';
import AppleSidebar from '../../../../Components/Sidebar/AppleSidebar';
import DeviceList from './DeviceList';
import axios from 'axios';
import Footer from '../../../../Components/Footer/Footer';
import { createContext, useEffect, useState} from 'react';


export const context = createContext();

export function DeviceCollections(props){
    const [phonePayload, setPhonePayload] = useState('');
    const [bannerPayload,setBannerPayload] = useState('')
    useEffect(()=>{
        console.log(props.payload.phone_url)
        axios.get(props.payload.phone_url)
        .then((res)=>{
            setPhonePayload(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
        axios.get(props.payload.banner_url)
        .then((res)=>{
            setBannerPayload(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[props.payload.phone_url,props.payload.banner_url])

    if(phonePayload){
        return(
            <context.Provider value={[phonePayload,props.button,props.label,bannerPayload]} class='relative block'>
                <Header/>
                <section class='relative grid grid-cols-12 gap-x-[0.5%] w-[100%] max-w-[90%] m-auto h-[fit-content]'>
                    <AppleSidebar />
                    <DeviceList />
                </section>
                <Footer />
            </context.Provider>
        )
    }
}