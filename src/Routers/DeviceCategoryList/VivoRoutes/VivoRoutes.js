import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import { vivopage1, vivopage2, vivopage3, vivopage4, vivopage5,
        vivopage6, vivopage7, vivopage8, vivopage9, vivopage10} from '../../../Assets/NavigationButtonData/VivoNavigation';
import React from 'react';
function VivoDeviceRoute(){
    return(
        <Routes>
            <Route  path="/vivo" element={<DeviceCollections button={vivopage1} url='http://localhost:4001/vivo/0/50'/>}>

            </Route>
            <Route  path="/vivo/page-2" element={<DeviceCollections button={vivopage2} url='http://localhost:4001/vivo/50/100'/>}>
    
            </Route>
            <Route  path="/vivo/page-3" element={<DeviceCollections button={vivopage3} url='http://localhost:4001/vivo/100/150'/>}>
    
            </Route>
            <Route  path="/vivo/page-4" element={<DeviceCollections button={vivopage4} url='http://localhost:4001/vivo/150/200'/>}>
    
            </Route>
            <Route  path="/vivo/page-5" element={<DeviceCollections button={vivopage5} url='http://localhost:4001/vivo/200/250'/>}>
    
            </Route>
            <Route  path="/vivo/page-6" element={<DeviceCollections button={vivopage6} url='http://localhost:4001/vivo/250/300'/>}>
    
            </Route>
            <Route  path="/vivo/page-7" element={<DeviceCollections button={vivopage7} url='http://localhost:4001/vivo/300/327'/>}>
    
            </Route>
            <Route  path="/vivo/page-8" element={<DeviceCollections button={vivopage8} url='http://localhost:4001/vivo/300/350'/>}>
    
            </Route>
            <Route  path="/vivo/page-9" element={<DeviceCollections button={vivopage9} url='http://localhost:4001/vivo/350/400'/>}>
    
            </Route>
            <Route  path="/vivo/page-10" element={<DeviceCollections button={vivopage10} url='http://localhost:4001/vivo/350/407'/>}>
    
            </Route>
        </Routes>
    )
}
export default VivoDeviceRoute