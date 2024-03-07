import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import { vodafonepage1, vodafonepage2 } from '../../../Assets/NavigationButtonData/VodafoneNavigation';
import React from 'react';
function VodafoneDeviceRoute(){
    return(
        <Routes>
            <Route  path="/vodafone" element={<DeviceCollections button={vodafonepage1} url='http://localhost:4001/vodafone/0/50'/>}>

            </Route>
            <Route  path="/vodafone/page-2" element={<DeviceCollections button={vodafonepage2} url='http://localhost:4001/vodafone/50/87'/>}>
    
            </Route>
        </Routes>
    )
}
export default VodafoneDeviceRoute