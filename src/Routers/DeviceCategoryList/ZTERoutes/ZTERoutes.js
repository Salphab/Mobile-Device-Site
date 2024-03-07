import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import { ZTEpage1, ZTEpage2, ZTEpage3, ZTEpage4,
        ZTEpage5, ZTEpage6, ZTEpage7} from '../../../Assets/NavigationButtonData/ZTENavigation';  
import React from 'react';
function ZTEDeviceRoute(){
    return(
        <Routes>
            <Route  path="/zte" element={<DeviceCollections button={ZTEpage1} url='http://localhost:4001/zte/0/50'/>}>

            </Route>
            <Route  path="/zte/page-2" element={<DeviceCollections button={ZTEpage2} url='http://localhost:4001/zte/50/100'/>}>
    
            </Route>
            <Route  path="/zte/page-3" element={<DeviceCollections button={ZTEpage3} url='http://localhost:4001/zte/100/150'/>}>
    
            </Route>
            <Route  path="/zte/page-4" element={<DeviceCollections button={ZTEpage4} url='http://localhost:4001/zte/150/200'/>}>
    
            </Route>
            <Route  path="/zte/page-5" element={<DeviceCollections button={ZTEpage5} url='http://localhost:4001/zte/200/250'/>}>
    
            </Route>
            <Route  path="/zte/page-6" element={<DeviceCollections button={ZTEpage6} url='http://localhost:4001/zte/250/300'/>}>
    
            </Route>
            <Route  path="/zte/page-7" element={<DeviceCollections button={ZTEpage7} url='http://localhost:4001/zte/300/318'/>}>
    
            </Route>
        </Routes>
    )
}
export default ZTEDeviceRoute