import {Routes, Route} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import VideoPage from '../Pages/NavPages/HomeNavigationPages/VideoPage';
import DealPage from '../Pages/NavPages/HomeNavigationPages/DealsPage';
import AboutPage from '../Pages/NavPages/HomeNavigationPages/AboutPage';
import ReviewPage from '../Pages/NavPages/HomeNavigationPages/ReviewPage';
import NewsPage from '../Pages/NavPages/HomeNavigationPages/NewsPage';
import ComparisonPage from '../Pages/NavPages/HomeNavigationPages/ComparisonPage';
import ComputingPage from '../Pages/NavPages/HomeNavigationPages/ComputingPage';
function Main(){
    return(
    <Routes>
        <Route  path="/" element={<HomePage/>}>
            
        </Route>
        <Route  path="/about" element={<AboutPage/>}>
            
        </Route>
        <Route  path="/deals" element={<DealPage/>}>
            
        </Route>
        <Route  path="/videos" element={<VideoPage/>}>
            
        </Route>
        <Route  path="/review/" element={<ReviewPage/>}>
            
        </Route>
        <Route  path="/news" element={<NewsPage/>}>
            
        </Route>
        <Route  path="/compare" element={<ComparisonPage/>}>
            
        </Route>
        <Route  path="/computing" element={<ComputingPage/>}>
            
        </Route>
   </Routes>
    )
}
export default Main;