import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import { infinixpage1, infinixpage2, infinixpage3, infinixpage4, infinixpage5} from '../../../Assets/NavigationButtonData/InfinixNavigation';
import React from 'react';
function InfinixDeviceRoute(){
    return(
        <Routes>
            <Route  path="/infinix" element={<DeviceCollections button={infinixpage1} url='http://localhost:4001/infinix/0/50'/>}>

            </Route>
            <Route  path="/infinix/page-2" element={<DeviceCollections button={infinixpage2} url='http://localhost:4001/infinix/50/100'/>}>
    
            </Route>
            <Route  path="/infinix/page-3" element={<DeviceCollections button={infinixpage3} url='http://localhost:4001/infinix/100/150'/>}>
    
            </Route>
            <Route  path="/infinix/page-4" element={<DeviceCollections button={infinixpage4} url='http://localhost:4001/infinix/150/200'/>}>
    
            </Route>
            <Route  path="/infinix/page-5" element={<DeviceCollections button={infinixpage5} url='http://localhost:4001/infinix/200/227'/>}>
    
            </Route>
        </Routes>
    )
}
export default InfinixDeviceRoute