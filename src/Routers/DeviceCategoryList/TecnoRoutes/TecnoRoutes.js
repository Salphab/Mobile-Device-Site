import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import { tecnopage1, tecnopage2 } from '../../../Assets/NavigationButtonData/TecnoNavigation';
import React from 'react';
function TecnoDeviceRoute(){
    return(
        <Routes>
            <Route  path="/tecno" element={<DeviceCollections button={tecnopage1} url='http://localhost:4001/tecno/0/50'/>}>

            </Route>
            <Route  path="/tecno/page-2" element={<DeviceCollections button={tecnopage2} url='http://localhost:4001/tecno/51/100'/>}>
    
            </Route>
            <Route  path="/tecno/page-3" element={<DeviceCollections button={tecnopage1} url='http://localhost:4001/tecno/101/118'/>}>
    
            </Route>
        </Routes>
    )
}
export default TecnoDeviceRoute