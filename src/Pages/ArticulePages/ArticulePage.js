import Header from "../../Components/Header/Header";
import HomeSidebar from "../../Components/Sidebar/HomeSidebar";
import { useEffect } from "react";
function ArticulePage(){
    let url_path = window.location.pathname;
    useEffect(()=>{
        console.log(url_path)
    })
    return(
        <>
            <Header />
            <section class='relative grid grid-cols-12 gap-x-[0.5%] w-[100%] max-w-[90%] m-auto h-[fit-content]'>
                <HomeSidebar/>
            </section>
        </>
    )
}
export default ArticulePage