import React from 'react';
import Header from "../../../Components/Header/Header";
import HomeSidebar from '../../../Components/Sidebar/HomeSidebar';
import ComparisonContent from '../../../Components/PageBodyContent/Comparison/ComparisonContent';
import Footer from '../../../Components/Footer/Footer';

function ComparisonPage(){
    return(
        <React.Fragment>
            <Header />
            <section class='relative grid grid-cols-12 gap-x-[0.5%] w-[100%] max-w-[85%] m-auto h-[fit-content]'>
                <HomeSidebar/>
                <ComparisonContent />
            </section>
            <Footer />
        </React.Fragment>
    )
}
export default ComparisonPage;