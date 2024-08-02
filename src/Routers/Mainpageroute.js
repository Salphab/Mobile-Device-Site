import {Routes, Route} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import VideoPage from '../Pages/NavPages/HomeNavigationPages/VideoPage';
import DealPage from '../Pages/NavPages/HomeNavigationPages/DealsPage';
import AboutPage from '../Pages/NavPages/HomeNavigationPages/AboutPage';
import NewsPage from '../Pages/NavPages/HomeNavigationPages/NewsPage';
import ComparisonPage from '../Pages/NavPages/HomeNavigationPages/ComparisonPage';
import ComputingPage from '../Pages/NavPages/HomeNavigationPages/ComputingPage';
function Main(){
    return(
    <Routes>
        <Route  path="/" element={<HomePage/>} />
        <Route  path="/about" element={<AboutPage/>} />
        <Route  path="/deals" element={<DealPage/>} />
        <Route  path="/videos" element={<VideoPage/>} />
        <Route  path="/news" element={<NewsPage/>} />
        <Route  path="/compare" element={<ComparisonPage/>} />
        <Route  path="/computing" element={<ComputingPage/>} />
   </Routes>
    )
}
export default Main;