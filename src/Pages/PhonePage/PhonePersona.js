import Header from "../../Components/Header/Header";
import { useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import PhoneInfoBody from "../../Components/PageBodyContent/PhoneInfo/PhoneInfoBody";
import { createContext } from "react";
import axios from "axios";

export const context = createContext();
function PhonePersona(props){
    const [payload,setPayload] = useState('');
    const {id} = useParams();
    const url = `${props.url}${id}`
    useEffect(()=>{
        document.title = payload.name;
        axios.get(url)
        .then((res)=>setPayload(res.data))
        .catch((error)=>console.log(error))
    })
    if(payload){
        return(
            <context.Provider value={payload} class="relative block w-[100%] max-w-[100%] h-[fit-content]">
                <Header />
                <PhoneInfoBody />
                <Footer />
            </context.Provider>
        )
    }
}
export default PhonePersona