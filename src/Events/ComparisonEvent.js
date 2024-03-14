import AllDevices from '../Assets/AllDevices';

function ComparisonEvent(e){
    const result = AllDevices.filter((data)=>{
                return data.includes(e.target.value)
            })
    return result;
}
export default ComparisonEvent;