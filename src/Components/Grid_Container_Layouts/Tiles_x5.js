import {Link} from 'react-router-dom';
function Tile(props){
    return(
        <section class='relative mt-[2%] mb-[10%] block w-[100%] max-w-[100%] h-[160vh]'>
            <h1 class='relative mt-[1%] text-[1.5rem] font-semibold font-[Helvetica, Arial, Georgia, Tahoma, Roboto]'>{props.title}</h1>
            <div class='relative grid gap-x-[0.5%] mt-[2%] gap-y-[0.5%] grid-cols-12 grid-rows-6 h-[90%]'>
                <Link class='relative rounded col-start-1 col-end-13 border-[2px] row-start-1 row-end-2'>

                </Link>
                <Link class='relative rounded col-start-1 col-end-13 border-[2px] row-start-2 row-end-3'>

                </Link>
                <Link class='relative rounded col-start-1 col-end-13 border-[2px] row-start-3 row-end-4'>

                </Link>
                <Link class='relative rounded col-start-1 col-end-13 border-[2px] row-start-4 row-end-5'>

                </Link>
                <Link class='relative rounded col-start-1 col-end-13 border-[2px] row-start-5 row-end-7'>

                </Link>
            </div>
            <div class='relative flex mt-[1%] w-[100%] max-w-[100%] h-[6%]'>
                <Link class='relative text-lg w-[100%] max-w-[fit-content] px-[5%] py-[1%] h-[70%] text-center rounded bg-[#00264d] text-white m-auto font-semibold' to=''>More News</Link>
            </div>
        </section>
        
    )
}
export default Tile;