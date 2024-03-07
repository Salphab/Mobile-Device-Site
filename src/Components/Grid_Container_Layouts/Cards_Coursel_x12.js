import { Link } from "react-router-dom";
function Cardsx12(props){
    return(
        <section class='relative block w-[100%] mt-[2%] max-[100%] h-[85vh]'>
            <h2 class='relative w-[100%] text-[1.5rem] font-semibold  font-[Helvetica, Arial, Georgia, Tahoma, Roboto]'>{props.title}</h2>
            <div class='relative grid grid-cols-12 gap-x-[0.5%] grid-rows-6 h-[45%]'>
                <Link class='relative rounded mt-[2%] col-start-1 col-end-4 border-[1px] hover:border-[2px] hover:border-blue-500  row-start-1 row-end-7'>

                </Link>
                <Link class='relative rounded mt-[2%] col-start-4 col-end-7   border-[1px] hover:border-[2px] hover:border-blue-500 row-start-1 row-end-7'>
                    
                </Link>
                <Link class='relative rounded mt-[2%] col-start-7 col-end-10 border-[1px] hover:border-[2px] hover:border-blue-500 row-start-1 row-end-7'>
                    
                </Link>
                <Link class='relative rounded mt-[2%] col-start-10 col-end-13 border-[1px] hover:border-[2px] hover:border-blue-500 row-start-1 row-end-7'>
                    
                </Link>
            </div>
            <div class='relative grid grid-cols-12 gap-x-[0.5%] grid-rows-6 mt-[2%] h-[45%]'>
                <Link class='relative rounded mt-[2%] col-start-1 col-end-4 border-[1px] hover:border-[2px] hover:border-blue-500  row-start-1 row-end-7'>

                </Link>
                <Link class='relative rounded mt-[2%] col-start-4 col-end-7   border-[1px] hover:border-[2px] hover:border-blue-500 row-start-1 row-end-7'>
                    
                </Link>
                <Link class='relative rounded mt-[2%] col-start-7 col-end-10 border-[1px] hover:border-[2px] hover:border-blue-500 row-start-1 row-end-7'>
                    
                </Link>
                <Link class='relative rounded mt-[2%] col-start-10 col-end-13 border-[1px] hover:border-[2px] hover:border-blue-500 row-start-1 row-end-7'>
                    
                </Link>
            </div>
        </section>
       
    )
}
export default Cardsx12;