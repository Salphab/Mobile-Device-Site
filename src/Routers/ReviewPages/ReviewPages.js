import {Routes, Route} from 'react-router-dom';
import ReviewPage from '../../Pages/NavPages/HomeNavigationPages/ReviewPage';
function ReviewPages(){
    return(
    <Routes>
        <Route  path="/review" element={<ReviewPage imgAlt='page theme image' themeTitle='Phone Review' url='http://localhost:1337/api/reviews?populate=*' />} />
        <Route  path="/review/xiaomi" element={<ReviewPage imgAlt='page theme image' themeTitle='Phone Review' url='http://localhost:1337/api/reviews?filters[category][$eq]=Xiaomi&populate=*' />} />
        <Route  path="/review/apple" element={<ReviewPage imgAlt='page theme image' themeTitle='Phone Review' url='http://localhost:1337/api/reviews?filters[category][$eq]=Apple&populate=*' />} />
        <Route  path="/review/samsung" element={<ReviewPage imgAlt='page theme image' themeTitle='Phone Review' url='http://localhost:1337/api/reviews?filters[category][$eq]=Samsung&populate=*' />} />
   </Routes>
    )
}
export default ReviewPages;