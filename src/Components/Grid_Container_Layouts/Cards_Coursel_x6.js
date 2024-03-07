import { Link } from "react-router-dom";
function CardsX6(props){
    return(
        <div class='relative grid grid-cols-12 gap-x-[0.5%] grid-rows-6 mt-[2%] h-[40vh]'>
            <Link class='relative col-start-1 col-end-13 row-start-1 row-end-1'>
                <h2 class='relative w-[100%] text-[1.5rem] font-semibold  font-[Helvetica, Arial, Georgia, Tahoma, Roboto]'>{props.title}</h2>
            </Link>
            <Link class='relative rounded mt-[2%] col-start-1 col-end-3 border-[1px] hover:border-[2px] hover:border-blue-500  row-start-2 row-end-7'>

            </Link>
            <Link class='relative rounded mt-[2%] col-start-3 col-end-5 border-[1px] hover:border-[2px] hover:border-blue-500 row-start-2 row-end-7'>
                
            </Link>
            <Link class='relative rounded mt-[2%] col-start-5 col-end-7 border-[1px] hover:border-[2px] hover:border-blue-500 row-start-2 row-end-7'>
                
            </Link>
            <Link class='relative rounded mt-[2%] col-start-7 col-end-9 border-[1px] hover:border-[2px] hover:border-blue-500 row-start-2 row-end-7'>
                
            </Link>
            <Link class='relative rounded mt-[2%] col-start-9 col-end-11 border-[1px] hover:border-[2px] hover:border-blue-500 row-start-2 row-end-7'>
                
            </Link>
            <Link class='relative rounded mt-[2%] col-start-11 col-end-13 border-[1px] hover:border-[2px] hover:border-blue-500 row-start-2 row-end-7'>
                
            </Link>
        </div>
    )
}
export default CardsX6;