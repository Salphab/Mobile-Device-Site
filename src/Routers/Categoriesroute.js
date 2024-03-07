import AppleDeviceRoute from './DeviceCategoryList/AppleRoutes/AppleRoute';
import SamsungDeviceRoute from './DeviceCategoryList/samsungRoutes/SamsungRoutes';
import GoogleDeviceRoute from './DeviceCategoryList/GoogleRoutes/GoogleDeviceRoute';
import HuaweiDeviceRoute from './DeviceCategoryList/HuaweiRoutes/HuaweiRoutes';
import InfinixDeviceRoute from './DeviceCategoryList/InfinixRoutes/InfinixRoutes';
import OneplusDeviceRoute from './DeviceCategoryList/OneplusRoutes/OneplusRoutes';
import TecnoDeviceRoute from './DeviceCategoryList/TecnoRoutes/TecnoRoutes';
import XiaomiDeviceRoute from './DeviceCategoryList/XiaomiRoutes/XiaomiRoutes';
import AsusDeviceRoute from './DeviceCategoryList/AsusRoutes/AsusRoutes';
import OppoDeviceRoute from './DeviceCategoryList/OppoRoutes/OppoRoutes';
import HonorDeviceRoute from './DeviceCategoryList/HonorRoutes/HonorRoutes';
import VodafoneDeviceRoute from './DeviceCategoryList/VodafoneRoutes/VodafoneRoutes';
import RealmeDeviceRoute from './DeviceCategoryList/RealmeRoutes/RealmeRoutes';
import MeizuDeviceRoute from './DeviceCategoryList/MeizuRoutes/MeizuRoutes';
import ZTEDeviceRoute from './DeviceCategoryList/ZTERoutes/ZTERoutes';
import AlcatelDeviceRoute from './DeviceCategoryList/AlcatelRoutes/AlcatelRoutes';
import VivoDeviceRoute from './DeviceCategoryList/VivoRoutes/VivoRoutes';

function Categories(){
    return(
        <>
            <AppleDeviceRoute />
            <SamsungDeviceRoute />
            <GoogleDeviceRoute />
            <HuaweiDeviceRoute />
            <InfinixDeviceRoute />
            <OneplusDeviceRoute />
            <TecnoDeviceRoute />
            <XiaomiDeviceRoute />
            <AsusDeviceRoute />
            <OppoDeviceRoute />
            <HonorDeviceRoute />
            <VodafoneDeviceRoute />
            <RealmeDeviceRoute />
            <MeizuDeviceRoute />
            <ZTEDeviceRoute />
            <AlcatelDeviceRoute />
            <VivoDeviceRoute />
        </>
    )
}
export default Categories;

