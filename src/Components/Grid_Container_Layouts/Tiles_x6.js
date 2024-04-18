
function TileX6(props){
    return(
        <section class='relative block w-[100%] mt-[4%] max-w-[100%] h-[fit-content]'>
            <h1 class='relative text-[1.5rem] font-semibold font-[monserrat]'>{props.title}</h1>
            <div class='relative grid grid-cols-12 gap-x-[2%] gap-y-[2%] grid-rows-6 h-[80vh]'>
                <a class='relative rounded col-start-1 col-end-7 row-start-1 row-end-3 border-[1px]'>

                </a>
                <a class='relative rounded col-start-7 col-end-13 row-start-1 row-end-3 border-[1px]'>

                </a>
                <a class='relative rounded col-start-1 col-end-7 row-start-3 row-end-5 border-[1px]'>

                </a>
                <a class='relative rounded col-start-7 col-end-13 row-start-3 row-end-5 border-[1px]'>

                </a>
                <a class='relative rounded col-start-1 col-end-7 row-start-5 row-end-7 border-[1px]'>

                </a>
                <a class='relative rounded col-start-7 col-end-13 row-start-5 row-end-7 border-[1px]'>

                </a>
            </div>
            <div class='relative flex mt-[2%] w-[100%] max-w-[100%] h-[5%]'>
                <a href="" class='relative text-lg w-[100%] max-w-[fit-content] px-[5%] py-[1%] h-[70%] text-center rounded bg-[#00264d] text-white m-auto font-semibold' to=''>More Posts</a>
            </div>
        </section>
    )
}
export default TileX6;