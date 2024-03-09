import React from 'react';
import Header from "../../../Components/Header/Header";
import HomeSidebar from '../../../Components/Sidebar/HomeSidebar';
import EventPageContent from '../../../Components/PageBodyContent/EventsPage/EventPageContent';

function EventPage(){
    return(
        <React.Fragment>
            <Header />
            <section class='relative grid grid-cols-12 gap-x-[0.5%] w-[100%] max-w-[85%] m-auto h-[fit-content]'>
                <HomeSidebar/>
                <EventPageContent />
            </section>
        </React.Fragment>
    )
}
export default EventPage;