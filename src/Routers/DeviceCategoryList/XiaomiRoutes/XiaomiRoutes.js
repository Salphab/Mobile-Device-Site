import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import { Xiaomipage1, Xiaomipage2, Xiaomipage3, Xiaomipage4,
        Xiaomipage5, Xiaomipage6, Xiaomipage7 } from '../../../Assets/NavigationButtonData/XiaomiNavigation';
import React from 'react';
function XiaomiDeviceRoute(){
    return(
        <Routes>
            <Route  path="/xiaomi" element={<DeviceCollections button={Xiaomipage1} url='http://localhost:4001/xiaomi/0/50'/>}>

            </Route>
            <Route  path="/xiaomi/page-2" element={<DeviceCollections button={Xiaomipage2} url='http://localhost:4001/xiaomi/50/100'/>}>
    
            </Route>
            <Route  path="/xiaomi/page-3" element={<DeviceCollections button={Xiaomipage3} url='http://localhost:4001/xiaomi/100/150'/>}>
    
            </Route>
            <Route  path="/xiaomi/page-4" element={<DeviceCollections button={Xiaomipage4} url='http://localhost:4001/xiaomi/150/200'/>}>
    
            </Route>
            <Route  path="/xiaomi/page-5" element={<DeviceCollections button={Xiaomipage5} url='http://localhost:4001/xiaomi/200/250'/>}>
    
            </Route>
            <Route  path="/xiaomi/page-6" element={<DeviceCollections button={Xiaomipage6} url='http://localhost:4001/xiaomi/250/300'/>}>
    
            </Route>
            <Route  path="/xiaomi/page-7" element={<DeviceCollections button={Xiaomipage7} url='http://localhost:4001/xiaomi/300/327'/>}>
    
            </Route>
        </Routes>
    )
}
export default XiaomiDeviceRoute