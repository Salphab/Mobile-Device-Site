import {Link} from 'react-router-dom';

function TopCoursel(){
    return(
                <div class='relative grid gap-x-[0.5%] gap-y-[0.5%] grid-cols-12 grid-rows-4 h-[65vh]'>
                    <Link to='' class='relative rounded bg-white col-start-1 col-end-8 row-start-1 row-end-5'>
                    
                    </Link>
                    <div class='relative mb-[1%] flex col-start-8 col-end-13 row-start-1 row-end-3'>
                        <Link to='' class='relative bg-white rounded mr-[.5%] w-[100%] max-w-[50%] h-[100%] bg-black'>

                        </Link>
                        <Link to='' class='relative bg-white rounded ml-[.5%] w-[100%] max-w-[50%] h-[100%] bg-black'>

                        </Link>
                    </div>
                    <Link to='' class='relative rounded bg-white col-start-8 col-end-13 row-start-3 row-end-5'>
                    
                    </Link>
                </div>
    )
}
export default TopCoursel;