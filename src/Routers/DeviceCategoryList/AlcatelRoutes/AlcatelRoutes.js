import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import { Alcatelpage1, Alcatelpage2, Alcatelpage3, Alcatelpage4,
        Alcatelpage5, Alcatelpage6, Alcatelpage7, Alcatelpage8, Alcatelpage9} from '../../../Assets/NavigationButtonData/AlcatelNavigation';  
import React from 'react';
function AlcatelDeviceRoute(){
    return(
        <Routes>
            <Route  path="/alcatel" element={<DeviceCollections button={Alcatelpage1} url='http://localhost:4001/alcatel/0/50'/>}>

            </Route>
            <Route  path="/alcatel/page-2" element={<DeviceCollections button={Alcatelpage2} url='http://localhost:4001/alcatel/50/100'/>}>
    
            </Route>
            <Route  path="/alcatel/page-3" element={<DeviceCollections button={Alcatelpage3} url='http://localhost:4001/alcatel/100/150'/>}>
    
            </Route>
            <Route  path="/alcatel/page-4" element={<DeviceCollections button={Alcatelpage4} url='http://localhost:4001/alcatel/150/200'/>}>
    
            </Route>
            <Route  path="/alcatel/page-5" element={<DeviceCollections button={Alcatelpage5} url='http://localhost:4001/alcatel/200/250'/>}>
    
            </Route>
            <Route  path="/alcatel/page-6" element={<DeviceCollections button={Alcatelpage6} url='http://localhost:4001/alcatel/250/300'/>}>
    
            </Route>
            <Route  path="/alcatel/page-7" element={<DeviceCollections button={Alcatelpage7} url='http://localhost:4001/alcatel/300/350'/>}>
    
            </Route>
            <Route  path="/alcatel/page-8" element={<DeviceCollections button={Alcatelpage8} url='http://localhost:4001/alcatel/350/400'/>}>
    
            </Route>
            <Route  path="/alcatel/page-9" element={<DeviceCollections button={Alcatelpage9} url='http://localhost:4001/alcatel/400/407'/>}>
    
            </Route>
        </Routes>
    )
}
export default AlcatelDeviceRoute