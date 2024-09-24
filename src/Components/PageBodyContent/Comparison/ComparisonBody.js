import ComparisonSearch1 from './ComparisonSearch1';
import ComparisonSearch2 from './ComparisonSearch2';
import ComparisonSearch3 from './ComparisonSearch3';
import AllDevices from '../../../Assets/AllDevices';


function ComparisonBody(){
    const DevicesName = AllDevices;
    return(
        <section class='relative block bg-slate-50 rounded w-[100%] max-w-[100%] h-[fit-content] mt-[2%]'>
            <div class='relative w-[100%] h-[60vh] max-w-[100%]'>
                <div class='relative flex w-[100%] max-w-[85%] float-right h-[100%]'>
                    <ComparisonSearch1 Devices={DevicesName} />
                    <ComparisonSearch2 Devices={DevicesName} />
                    <ComparisonSearch3 Devices={DevicesName} />
                </div>
            </div>
        </section>
    )
}
export default ComparisonBody