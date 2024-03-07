import {Routes, Route} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import VideoPage from '../Pages/NavPages/HomeNavigationPages/VideoPage';
import AboutPage from '../Pages/NavPages/HomeNavigationPages/AboutPage';
import PhonePage from '../Pages/NavPages/HomeNavigationPages/PhonePage';
import ReviewPage from '../Pages/NavPages/HomeNavigationPages/ReviewPage';
import NewsPage from '../Pages/NavPages/HomeNavigationPages/NewsPage';
import EventPage from '../Pages/NavPages/HomeNavigationPages/EventPage';
import ComparisonPage from '../Pages/NavPages/HomeNavigationPages/ComparisonPage';
function Main(){
    return(
    <Routes>
        <Route  path="/" element={<HomePage/>}>
            
        </Route>
        <Route  path="/about" element={<AboutPage/>}>
            
        </Route>
        <Route  path="/phones" element={<PhonePage/>}>
            
        </Route>
        <Route  path="/videos" element={<VideoPage/>}>
            
        </Route>
        <Route  path="/review" element={<ReviewPage/>}>
            
        </Route>
        <Route  path="/news" element={<NewsPage/>}>
            
        </Route>
        <Route  path="/events" element={<EventPage/>}>
            
        </Route>
        <Route  path="/compare" element={<ComparisonPage/>}>
            
        </Route>
   </Routes>
    )
}
export default Main;