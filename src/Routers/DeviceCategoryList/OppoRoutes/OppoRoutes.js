import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import { Oppopage1, Oppopage2, Oppopage3} from '../../../Assets/NavigationButtonData/OppoNavigation';
import React from 'react';
function OppoDeviceRoute(){
    return(
        <Routes>
            <Route  path="/oppo" element={<DeviceCollections button={Oppopage1} url='http://localhost:4001/oppo/0/50'/>}>

            </Route>
            <Route  path="/oppo/page-2" element={<DeviceCollections button={Oppopage2} url='http://localhost:4001/oppo/51/100'/>}>
    
            </Route>
            <Route  path="/oppo/page-3" element={<DeviceCollections button={Oppopage3} url='http://localhost:4001/oppo/101/118'/>}>
    
            </Route>
        </Routes>
    )
}
export default OppoDeviceRoute