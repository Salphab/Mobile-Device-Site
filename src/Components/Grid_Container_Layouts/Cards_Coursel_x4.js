
import { Link } from "react-router-dom";
function Cards(){
    return(
        <div class='relative grid grid-cols-12 gap-x-[2%] grid-rows-6 mt-[2%] h-[40vh]'>
            <Link class='relative rounded col-start-1 col-end-4 border-[2px] row-start-1 row-end-7'>

            </Link>
            <Link class='relative rounded col-start-4 col-end-7 border-[2px] row-start-1 row-end-7'>
                
            </Link>
            <Link class='relative rounded col-start-7 col-end-10 border-[2px] row-start-1 row-end-7'>
                
            </Link>
            <Link class='relative rounded col-start-10 col-end-13 border-[2px] row-start-1 row-end-7'>
                
            </Link>
        </div>
    )
}
export default Cards;