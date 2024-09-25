import { Link } from 'react-router-dom';
function Devices(props){
    const payload = props.payload;
        return(
            <section class='relative grid mt-[3%] grid-cols-5 ml-[1%] mr-[1%] gap-x-[4%]'>
                    {payload.map((data)=>{
                        return(
                            <Link key={data._id} to={`/${window.location.pathname.split('/')[1]}-brand/${data._id}`} class='relative rounded hover:border-[2px] hover:border-blue-500 px-[10%] py-[10%] mb-[30%]'>
                                <img class='relative pt-[7%]' src={data.img} alt={data.name}/>
                                <h1 class='relative text-center font-semibold font-[monserrat] mt-[5%] text-[0.9rem] leading-5'>{data.name}</h1>
                            </Link>
                    )    
                    })
                    }
            </section>
            
        )
}
export default Devices;