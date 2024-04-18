import ComparisonTheme from "./ComparisonPageTheme";
import { ComparisonContext,} from "../../../Hooks/Context/ComparisonContext";
import ComparisonBody from "./ComparisonBody";
import Network from "../Components/Network";
import Display from "../Components/Display";
import StretchAdBar from '../../Ads/StretchAdBar';
import Memory from "../Components/Memory";
import OS from "../Components/OS";
import Body from "../Components/Body";
import RearCamera from "../Components/RearCamera";
import FrontCamera from "../Components/FrontCamera";
import Battery from "../Components/Battery";
import Sound from "../Components/Sound";
import Connections from "../Components/Connections";
import Feature from "../Components/Feature";
import Skin from "../Components/Misc";
import Disclaimer from '../../Disclaimer/Disclaimer'
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
    const [data1, setData1] = useState();
    const [data2, setData2] = useState();
    const [data3, setData3] = useState();
    useEffect(()=>{
        document.title = 'Compare Smartphones, Tablets, and other Devices: Comprehensive side-by-side comparison';
        if (phone1) {
            axios.get(endPoint1)
                .then(res => {
                    setData1(res.data);
                    console.log(res.data)
                })
                .catch(error => console.log(error));
        }
    },[setData1])
    useEffect(()=>{
        if (phone2) {
            axios.get(endPoint2)
                .then(res => {
                    setData2(res.data);
                })
                .catch(error => console.log(error));
        }
    },[setData2])
    useEffect(()=>{
        if (phone3) {
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
                <StretchAdBar/>
                <Display />
                <Body />
                <OS />
                <Memory />
                <RearCamera />
                <FrontCamera />
                <Battery />
                <Sound />
                <Connections />
                <Feature />
                <Skin />
                <Disclaimer />
            </section>
        </ComparisonContext.Provider>
    )
}
export default ComparisonContent;