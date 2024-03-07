/* In other to make the filter element visible the component should
have filter property value set. else the filter element will not be visible 
on the component.
*/

function Themebanner(props){
    if(props.filter === 'true'){
        return(
            <div class='absolute grid grid-cols-12 grid-rows-6 z-50 bottom-[10%] w-[63vw] h-[10vh] max-w-[100%]'>
                <div class='relative col-start-1 col-end-5 row-start-1 row-end-7 mx-[2%] h-[100%]'>
                    <h2 class='relative text-white w-[100%] max-w-[fit-content] text-[1.7rem] font-bold py-[2%] px-[7%] bg-[rgba(0,0,0,0.6)]'>{props.BannerName}</h2>
                </div>
                        <div class='relative col-start-5 col-end-13 row-start-1 row-end-7 h-[100%]'>
                            <form class='relative float-right w-[100%] max-w-[70%] h-[100%]'>
                                <label class='relative  font-bold' htmlFor="search">Filter :</label>
                                <input class='relative rounded mt-[5%] w-[100%] max-w-[60%] border-[2px] border-gray-300 focus:border-black placeholder:text-[0.9rem] placeholder:text-black placeholder:px-[1%] placeholder:left-[2%] focus:outline-none mx-[2%] h-[50%] ' type="text" name="search" placeholder='Search'/>
                                <input class='relative bg-black text-white font-semibold w-[100%] max-w-[15%] h-[50%]' type='submit' />
                            </form>
                        </div>
            </div>
        )

    }
    return(
        <div class='absolute grid grid-cols-12 grid-rows-6 z-50 bottom-[10%] w-[63vw] h-[10vh] max-w-[100%]'>
                <div class='relative col-start-1 col-end-5 row-start-1 row-end-7 mx-[2%] h-[100%]'>
                    <h2 class='relative text-white w-[100%] max-w-[fit-content] text-[1.7rem] font-bold py-[2%] px-[7%] bg-[rgba(0,0,0,0.5)]'>{props.BannerName}</h2>
                </div>
        </div>
    )
}
   
export default Themebanner;