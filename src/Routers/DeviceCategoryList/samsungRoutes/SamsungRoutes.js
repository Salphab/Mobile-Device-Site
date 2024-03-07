import {DeviceCollections} from '../../../Pages/NavPages/PhoneCollection/AppleCollection/DevicesCollection';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { samsungpage1, samsungpage2, samsungpage3, samsungpage4,
        samsungpage5, samsungpage6, samsungpage7, samsungpage8,
        samsungpage9, samsungpage10, samsungpage11, samsungpage12,
        samsungpage13, samsungpage14, samsungpage15, samsungpage16,
        samsungpage17, samsungpage18, samsungpage19, samsungpage20,
        samsungpage21, samsungpage22, samsungpage23, samsungpage24,
        samsungpage25, samsungpage26, samsungpage27, samsungpage28
        } from '../../../Assets/NavigationButtonData/SamsungNavigation';

function SamsungDeviceRoute(){
    return(
        <Routes>
            <Route  path="/samsung" element={<DeviceCollections button={samsungpage1} url='http://localhost:4001/samsung/0/50'/>}>

            </Route>
            <Route  path="/samsung/page-2" element={<DeviceCollections button={samsungpage2} url='http://localhost:4001/samsung/51/101'/>}>
    
            </Route>
            <Route  path="/samsung/page-3" element={<DeviceCollections button={samsungpage3} url='http://localhost:4001/samsung/102/152'/>}>
    
            </Route>
            <Route  path="/samsung/page-4" element={<DeviceCollections button={samsungpage4} url='http://localhost:4001/samsung/153/203'/>}>
    
            </Route>
            <Route  path="/samsung/page-5" element={<DeviceCollections button={samsungpage5} url='http://localhost:4001/samsung/204/254'/>}>
    
            </Route>
            <Route  path="/samsung/page-6" element={<DeviceCollections button={samsungpage6} url='http://localhost:4001/samsung/255/305'/>}>
    
            </Route>
            <Route  path="/samsung/page-7" element={<DeviceCollections button={samsungpage7} url='http://localhost:4001/samsung/306/356'/>}>
    
            </Route>
            <Route  path="/samsung/page-8" element={<DeviceCollections button={samsungpage8} url='http://localhost:4001/samsung/357/407'/>}>
    
            </Route>
            <Route  path="/samsung/page-9" element={<DeviceCollections button={samsungpage9} url='http://localhost:4001/samsung/408/458'/>}>
    
            </Route>
            <Route  path="/samsung/page-10" element={<DeviceCollections button={samsungpage10} url='http://localhost:4001/samsung/459/509'/>}>
    
            </Route>
            <Route  path="/samsung/page-11" element={<DeviceCollections button={samsungpage11} url='http://localhost:4001/samsung/510/560'/>}>
    
            </Route>
            <Route  path="/samsung/page-12" element={<DeviceCollections button={samsungpage12} url='http://localhost:4001/samsung/561/611'/>}>
    
            </Route>
            <Route  path="/samsung/page-13" element={<DeviceCollections button={samsungpage13} url='http://localhost:4001/samsung/612/663'/>}>
    
            </Route>
            <Route  path="/samsung/page-14" element={<DeviceCollections button={samsungpage14} url='http://localhost:4001/samsung/664/714'/>}>
    
            </Route>
            <Route  path="/samsung/page-15" element={<DeviceCollections button={samsungpage15} url='http://localhost:4001/samsung/715/765'/>}>
    
            </Route>
            <Route  path="/samsung/page-16" element={<DeviceCollections button={samsungpage16} url='http://localhost:4001/samsung/766/816'/>}>
    
            </Route>
            <Route  path="/samsung/page-17" element={<DeviceCollections button={samsungpage17} url='http://localhost:4001/samsung/817/867'/>}>
    
            </Route>
            <Route  path="/samsung/page-18" element={<DeviceCollections button={samsungpage18} url='http://localhost:4001/samsung/868/918'/>}>
    
            </Route>
            <Route  path="/samsung/page-19" element={<DeviceCollections button={samsungpage19} url='http://localhost:4001/samsung/919/969'/>}>
    
            </Route>
            <Route  path="/samsung/page-20" element={<DeviceCollections button={samsungpage20} url='http://localhost:4001/samsung/970/1020'/>}>
    
            </Route>
            <Route  path="/samsung/page-21" element={<DeviceCollections button={samsungpage21} url='http://localhost:4001/samsung/1021/1071'/>}>
    
            </Route>
            <Route  path="/samsung/page-22" element={<DeviceCollections button={samsungpage22} url='http://localhost:4001/samsung/1072/1122'/>}>
    
            </Route>
            <Route  path="/samsung/page-23" element={<DeviceCollections button={samsungpage23} url='http://localhost:4001/samsung/1123/1173'/>}>
    
            </Route>
            <Route  path="/samsung/page-24" element={<DeviceCollections button={samsungpage24} url='http://localhost:4001/samsung/1174/1224'/>}>
    
            </Route>
            <Route  path="/samsung/page-25" element={<DeviceCollections button={samsungpage25} url='http://localhost:4001/samsung/1225/1275'/>}>
    
            </Route>
            <Route  path="/samsung/page-26" element={<DeviceCollections button={samsungpage26} url='http://localhost:4001/samsung/1276/1327'/>}>
    
            </Route>
            <Route  path="/samsung/page-27" element={<DeviceCollections button={samsungpage27} url='http://localhost:4001/samsung/1328/1378'/>}>
    
            </Route>
            <Route  path="/samsung/page-28" element={<DeviceCollections button={samsungpage28} url='http://localhost:4001/samsung/1379/1429'/>}>
    
            </Route>
        </Routes>
    )
}
export default SamsungDeviceRoute