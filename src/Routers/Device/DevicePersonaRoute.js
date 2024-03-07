
import { Route, Routes } from "react-router-dom";
import PhonePersona from "../../Pages/PhonePage/PhonePersona";

function AppleDevices(){
    return(
        <Routes>
            <Route path='apple-brand/:id' element={<PhonePersona url='http://localhost:4001/apple/'/>}>

            </Route>
            <Route path='alcatel-brand/:id' element={<PhonePersona url='http://localhost:4001/alcatel/'/>}>
                
            </Route>
            <Route path='asus-brand/:id' element={<PhonePersona url='http://localhost:4001/asus/'/>}>
                
            </Route>
            <Route path='google-brand/:id' element={<PhonePersona url='http://localhost:4001/google/'/>}>
                
            </Route>
            <Route path='honor-brand/:id' element={<PhonePersona url='http://localhost:4001/honor/'/>}>
                
            </Route>
            <Route path='huawei-brand/:id' element={<PhonePersona url='http://localhost:4001/huawei/'/>}>
                
            </Route>
            <Route path='infinix-brand/:id' element={<PhonePersona url='http://localhost:4001/infinix/'/>}>
                
            </Route>
            <Route path='meizu-brand/:id' element={<PhonePersona url='http://localhost:4001/meizu/'/>}>
                
            </Route>
            <Route path='oneplus-brand/:id' element={<PhonePersona url='http://localhost:4001/oneplus/'/>}>
                
            </Route>
            <Route path='oppo-brand/:id' element={<PhonePersona url='http://localhost:4001/oppo/'/>}>
                
            </Route>
            <Route path='realme-brand/:id' element={<PhonePersona url='http://localhost:4001/realme/'/>}>
                
            </Route>
            <Route path='samsung-brand/:id' element={<PhonePersona url='http://localhost:4001/samsung/'/>}>
                
            </Route>
            <Route path='tecno-brand/:id' element={<PhonePersona url='http://localhost:4001/tecno/'/>}>
                
            </Route>
            <Route path='vivo-brand/:id' element={<PhonePersona url='http://localhost:4001/vivo/'/>}>
                
            </Route>
            <Route path='voda-brand/:id' element={<PhonePersona url='http://localhost:4001/voda/'/>}>
                
            </Route>
            <Route path='xiaomi-brand/:id' element={<PhonePersona url='http://localhost:4001/xiaomi/'/>}>
                
            </Route>
            <Route path='zte-brand/:id' element={<PhonePersona url='http://localhost:4001/zte/'/>}>
                
            </Route>
        </Routes>
    )
}
export default AppleDevices