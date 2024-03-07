import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import { meizupage1, meizupage2 } from '../../../Assets/NavigationButtonData/MeizuNavigation';
import React from 'react';
function MeizuDeviceRoute(){
    return(
        <Routes>
            <Route  path="/meizu" element={<DeviceCollections button={meizupage1} url='http://localhost:4001/meizu/0/50'/>}>

            </Route>
            <Route  path="/meizu/page-2" element={<DeviceCollections button={meizupage2} url='http://localhost:4001/meizu/50/73'/>}>
    
            </Route>
        </Routes>
    )
}
export default MeizuDeviceRoute