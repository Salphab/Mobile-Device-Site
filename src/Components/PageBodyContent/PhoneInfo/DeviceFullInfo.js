import { context } from "../../../Pages/PhonePage/PhonePersona";
import { useContext } from "react";
import DeviceAnnounce from "./DeviceAnnounce";
import NetworkInfo from "./NetworkInfo";
import DisplayInfo from "./DisplayInfo";
import BodyInfo from "./BodyInfo";
import PlatformInfo from "./PlatformInfo";
import MemoryInfo from "./MemoryInfo";
import MainCameraInfo from "./MainCameraInfo";
import SelfieCameraInfo from "./SelfieCameraInfo";
import SoundInfo from "./SoundInfo";
import CommunicationInfo from "./CommunicationInfo";
import BatteryInfo from "./BatteryInfo";
import FeatureInfo from "./FeatureInfo";
import MiscInfo from "./MiscInfo";
import TestInfo from "./TestInfo";

function DeviceFullInfo(){
    const Context = useContext(context);
    const info = Context.detailSpec.length;
    const ComponentRouteArray = [<NetworkInfo />, <DeviceAnnounce />, <BodyInfo />, <DisplayInfo />,
                                <PlatformInfo />, <MemoryInfo />, <MainCameraInfo />, <SelfieCameraInfo />,
                                <SoundInfo />, <CommunicationInfo />, <FeatureInfo />, <BatteryInfo />,
                                <MiscInfo />, <TestInfo />]
    const RouteResult = ComponentRouteArray.slice(0,info-1)
    return(
        <section class='relative block w-[100%] max-w-[100%] mt-[.5%] h-[fit-content]'>
            {RouteResult.map((data)=>{return data})}
        </section>
    )
}

export default DeviceFullInfo;