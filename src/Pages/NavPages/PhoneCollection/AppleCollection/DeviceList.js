import CategoryInfoBoard from '../../../../Components/CategoryInfoBoard/CategoryInfoBoard';
import CategoryNavButton from '../../../../Components/CategoryNavButtons/CategoryNavButton';
import { context } from './DevicesCollection';
import {useContext} from 'react';
import Devices from './Devices';

function DeviceList(){
    const newcontext = useContext(context)
        return(
            <section class='relative bg-white block col-start-4 col-end-13 h-[fit-content]'>
                <CategoryInfoBoard count={newcontext[0][1]} />
                <Devices payload={newcontext[0][0]} />
                <CategoryNavButton button={newcontext[1]} />
            </section>
        )    
    }
export default DeviceList;