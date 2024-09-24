import {Link} from 'react-router-dom';
function CardsX6(props){
    return(
        <div class='relative grid grid-cols-12 gap-x-[0.5%] grid-rows-6 mt-[2%] h-[40vh]'>
            <div class='relative ml-[1%] col-start-1 col-end-13 row-start-0 row-end-1'>
                <h2 class='relative w-[100%] text-[1.5rem] font-semibold  font-[monserrat]'>{props.title}</h2>
            </div>
            <Link to='' class='relative rounded bg-white col-start-1 col-end-3 border-[1px] hover:border-[2px] hover:border-blue-500  row-start-1 row-end-7'>

            </Link>
            <Link to='' class='relative rounded bg-white col-start-3 col-end-5 border-[1px] hover:border-[2px] hover:border-blue-500 row-start-1 row-end-7'>
                
            </Link>
            <Link to='' class='relative rounded bg-white col-start-5 col-end-7 border-[1px] hover:border-[2px] hover:border-blue-500 row-start-1 row-end-7'>
                
            </Link>
            <Link to='' class='relative rounded bg-white col-start-7 col-end-9 border-[1px] hover:border-[2px] hover:border-blue-500 row-start-1 row-end-7'>
                
            </Link>
            <Link to='' class='relative rounded bg-white col-start-9 col-end-11 border-[1px] hover:border-[2px] hover:border-blue-500 row-start-1 row-end-7'>
                
            </Link>
            <Link to='' class='relative rounded bg-white col-start-11 col-end-13 border-[1px] hover:border-[2px] hover:border-blue-500 row-start-1 row-end-7'>
                
            </Link>
        </div>
    )
}
export default CardsX6;