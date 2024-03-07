import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import { honorpage1, honorpage2, honorpage3, honorpage4, honorpage5 } from '../../../Assets/NavigationButtonData/HonorNavigation';
import React from 'react';
function HonorDeviceRoute(){
    return(
        <Routes>
            <Route  path="/honor" element={<DeviceCollections button={honorpage1} url='http://localhost:4001/honor/0/50'/>}>

            </Route>
            <Route  path="/honor/page-2" element={<DeviceCollections button={honorpage2} url='http://localhost:4001/honor/50/100'/>}>
    
            </Route>
            <Route  path="/honor/page-3" element={<DeviceCollections button={honorpage3} url='http://localhost:4001/honor/100/150'/>}>
    
            </Route>
            <Route  path="/honor/page-3" element={<DeviceCollections button={honorpage4} url='http://localhost:4001/honor/150/200'/>}>
    
            </Route>
            <Route  path="/honor/page-3" element={<DeviceCollections button={honorpage5} url='http://localhost:4001/honor/200/206'/>}>
    
            </Route>
        </Routes>
    )
}
export default HonorDeviceRoute