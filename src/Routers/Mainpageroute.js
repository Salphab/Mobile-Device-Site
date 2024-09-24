import {Routes, Route} from 'react-router-dom';
import HomePage from '../Pages/HomePage';
import VideoPage from '../Pages/NavPages/HomeNavigationPages/VideoPage';
import DealPage from '../Pages/NavPages/HomeNavigationPages/DealsPage';
import AboutPage from '../Pages/NavPages/HomeNavigationPages/AboutPage';
import TechPage from '../Pages/NavPages/HomeNavigationPages/TechPage';
import ComparisonPage from '../Pages/NavPages/HomeNavigationPages/ComparisonPage';
function Main(){
    return(
    <Routes>
        <Route  path="/" element={<HomePage/>} />
        <Route  path="/about" element={<AboutPage/>} />
        <Route  path="/deals" element={<DealPage/>} />
        <Route  path="/videos" element={<VideoPage/>} />
        <Route  path="/tech" element={<TechPage/>} />
        <Route  path="/compare" element={<ComparisonPage/>} />
   </Routes>
    )
}
export default Main;