import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import { Applepage1, Applepage2, Applepage3 } from '../../../Assets/NavigationButtonData/AppleNavigation';
import React from 'react';
function AppleDeviceRoute(){
    return(
        <Routes>
            <Route  path="/apple" element={<DeviceCollections button={Applepage1} url='http://localhost:4001/apple/0/50'/>}>

            </Route>
            <Route  path="/apple/page-2" element={<DeviceCollections button={Applepage2} url='http://localhost:4001/apple/51/100'/>}>
    
            </Route>
            <Route  path="/apple/page-3" element={<DeviceCollections button={Applepage3} url='http://localhost:4001/apple/101/118'/>}>
    
            </Route>
        </Routes>
    )
}
export default AppleDeviceRoute