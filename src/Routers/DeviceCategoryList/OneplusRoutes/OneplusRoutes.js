import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { onepluspage1, onepluspage2,} from '../../../Assets/NavigationButtonData/OneplusNavigation';
function OneplusDeviceRoute(){
    return(
        <Routes>
            <Route  path="/oneplus" element={<DeviceCollections button={onepluspage1} url='http://localhost:4001/oneplus/0/50'/>}>

            </Route>
            <Route  path="/oneplus/page-2" element={<DeviceCollections button={onepluspage2} url='http://localhost:4001/oneplus/51/100'/>}>
    
            </Route>
        </Routes>
    )
}
export default OneplusDeviceRoute