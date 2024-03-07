import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import { realmepage1, realmepage2, realmepage3, realmepage4 } from '../../../Assets/NavigationButtonData/RealmeNavigation';
import React from 'react';
function RealmeDeviceRoute(){
    return(
        <Routes>
            <Route  path="/realme" element={<DeviceCollections button={realmepage1} url='http://localhost:4001/realme/0/50'/>}>

            </Route>
            <Route  path="/realme/page-2" element={<DeviceCollections button={realmepage2} url='http://localhost:4001/realme/50/100'/>}>
    
            </Route>
            <Route  path="/realme/page-3" element={<DeviceCollections button={realmepage3} url='http://localhost:4001/realme/100/150'/>}>
    
            </Route>
            <Route  path="/realme/page-3" element={<DeviceCollections button={realmepage4} url='http://localhost:4001/realme/150/183'/>}>
    
            </Route>
        </Routes>
    )
}
export default RealmeDeviceRoute