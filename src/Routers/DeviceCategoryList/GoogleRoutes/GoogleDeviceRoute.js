import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import { googlepage1} from '../../../Assets/NavigationButtonData/GoogleNavigation';
import React from 'react';
function GoogleDeviceRoute(){
    return(
        <Routes>
            <Route  path="/google" element={<DeviceCollections button={googlepage1} url='http://localhost:4001/google/0/50'/>}>

            </Route>
        </Routes>
    )
}
export default GoogleDeviceRoute