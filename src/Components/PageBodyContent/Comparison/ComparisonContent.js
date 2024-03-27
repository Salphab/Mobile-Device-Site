import ComparisonTheme from "./ComparisonPageTheme";
import { ComparisonContext } from "../../../Hooks/Context/ComparisonContext";
import ComparisonBody from "./ComparisonBody";
import Network from "../Components/Network";
import { useEffect, useState } from "react";
import axios from "axios";

const imgUrl = require('../../../Assets/Img/comparison 2.jpg');
const imgAlt = 'page theme image';
const parameter1 = window.location.search;
const phone1 = new URLSearchParams(parameter1).get('phone1');
const endPoint1 = `http://localhost:4001/device/${phone1}`;
const parameter2 = window.location.search;
const phone2 = new URLSearchParams(parameter2).get('phone2');
const endPoint2 = `http://localhost:4001/device/${phone2}`;
const parameter3 = window.location.search;
const phone3 = new URLSearchParams(parameter3).get('phone3');
const endPoint3 = `http://localhost:4001/device/${phone3}`;


function ComparisonContent(){
    const [data1, setData1] = useState('');
    const [data2, setData2] = useState('');
    const [data3, setData3] = useState('');
    useEffect(()=>{
        document.title = 'Compare Smartphones, Tablets, and other Devices: Comprehensive side-by-side comparison';
        if (endPoint1) {
            axios.get(endPoint1)
                .then(res => {
                    setData1(res.data);
                })
                .catch(error => console.log(error));
        }
    },[setData1])
    useEffect(()=>{
        if (endPoint2) {
            axios.get(endPoint2)
                .then(res => {
                    setData2(res.data);
                })
                .catch(error => console.log(error));
        }
    },[setData2])
    useEffect(()=>{
        if (endPoint3) {
            axios.get(endPoint3)
                .then(res => {
                    setData3(res.data);
                })
                .catch(error => console.log(error));
        }
    },[setData2])
    return(
        <ComparisonContext.Provider value={{imgUrl, imgAlt, data1, data2, data3}}>
            <section class='relative block col-start-4 col-end-13 h-[fit-content]'>
                <ComparisonTheme />
                <ComparisonBody />
                <Network />
            </section>
        </ComparisonContext.Provider>
    )
}
export default ComparisonContent;