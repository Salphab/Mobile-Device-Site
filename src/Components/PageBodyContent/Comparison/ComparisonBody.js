import ComparisonSearch from './ComparisonSearch';
import AllDevices from '../../../Assets/AllDevices';


function ComparisonBody(){
    const DevicesName = AllDevices;
    return(
        <section class='relative  block w-[100%] max-w-[100%] h-[fit-content] mt-[2%] border-[1px]'>
            <div class='relative w-[100%] bg-gray-100 h-[60vh] max-w-[100%]'>
                <div class='relative flex w-[100%] max-w-[85%] float-right h-[100%]'>
                    <ComparisonSearch Devices={DevicesName} />
                    <ComparisonSearch Devices={DevicesName} />
                    <ComparisonSearch Devices={DevicesName} />
                </div>
            </div>
        </section>
    )
}
export default ComparisonBody