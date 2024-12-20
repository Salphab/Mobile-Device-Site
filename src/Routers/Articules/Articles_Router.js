import { Routes, Route } from "react-router-dom";
import ArticulePage from "../../Pages/ArticulePages/ArticulePage";

function Articules(){
    return(
        <Routes>
            <Route path="/review/:title" element={<ArticulePage />}/>
        </Routes>
    )
}
export default Articules