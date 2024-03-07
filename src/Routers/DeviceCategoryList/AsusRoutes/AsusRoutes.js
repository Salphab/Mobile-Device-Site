import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import { asuspage1, asuspage2, asuspage3, asuspage4 } from '../../../Assets/NavigationButtonData/AsusNavigation';
import React from 'react';
function AsusDeviceRoute(){
    return(
        <Routes>
            <Route  path="/asus" element={<DeviceCollections button={asuspage1} url='http://localhost:4001/asus/0/50'/>}>

            </Route>
            <Route  path="/asus/page-2" element={<DeviceCollections button={asuspage2} url='http://localhost:4001/asus/50/100'/>}>
    
            </Route>
            <Route  path="/asus/page-3" element={<DeviceCollections button={asuspage3} url='http://localhost:4001/asus/100/150'/>}>
    
            </Route>
            <Route  path="/asus/page-3" element={<DeviceCollections button={asuspage4} url='http://localhost:4001/asus/150/199'/>}>
    
            </Route>
        </Routes>
    )
}
export default AsusDeviceRoute