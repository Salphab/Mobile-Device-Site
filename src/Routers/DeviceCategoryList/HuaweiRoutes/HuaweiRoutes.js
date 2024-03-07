import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { Huaweipage1, Huaweipage2, Huaweipage3, Huaweipage4, Huaweipage5, Huaweipage6 } from '../../../Assets/NavigationButtonData/HuaweiNavigation';
function HuaweiDeviceRoute(){
    return(
        <Routes>
            <Route  path="/huawei" element={<DeviceCollections button={Huaweipage1} url='http://localhost:4001/huawei/0/50'/>}>

            </Route>
            <Route  path="/huawei/page-2" element={<DeviceCollections button={Huaweipage2} url='http://localhost:4001/huawei/50/100'/>}>
    
            </Route>
            <Route  path="/huawei/page-3" element={<DeviceCollections button={Huaweipage3} url='http://localhost:4001/huawei/100/150'/>}>
    
            </Route>
            <Route  path="/huawei/page-4" element={<DeviceCollections button={Huaweipage4} url='http://localhost:4001/huawei/150/200'/>}>
    
            </Route>
            <Route  path="/huawei/page-5" element={<DeviceCollections button={Huaweipage5} url='http://localhost:4001/huawei/200/250'/>}>
    
            </Route>
            <Route  path="/huawei/page-6" element={<DeviceCollections button={Huaweipage6} url='http://localhost:4001/huawei/250/275'/>}>
    
            </Route>
        </Routes>
    )
}
export default HuaweiDeviceRoute