import Header from '../../../../Components/Header/Header';
import AppleSidebar from '../../../../Components/Sidebar/AppleSidebar';
import DeviceList from './DeviceList';
import axios from 'axios';
import Footer from '../../../../Components/Footer/Footer';
import { createContext, useEffect, useState} from 'react';


export const context = createContext();

export function DeviceCollections(props){
    const [payload, setpayload] = useState('');
    useEffect(()=>{
        axios.get(props.url)
        .then((res)=>{
            setpayload(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[props.url])

    if(payload){
        return(
            <context.Provider value={[payload,props.button]} class='relative block'>
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