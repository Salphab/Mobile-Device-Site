import {Routes, Route} from 'react-router-dom';
import PrivacyPolicy from '../Pages/NavPages/FooterLinks/PrivacyPolicy';

function FooterLinks(){
    return(
    <Routes>
        <Route  path="/privacy-policy" element={<PrivacyPolicy/>}>
            
        </Route>
        
   </Routes>
    )
}
export default FooterLinks;