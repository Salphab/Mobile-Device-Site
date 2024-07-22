/* In other to make the filter element visible the component should
have filter property value set. else the filter element will not be visible 
on the component.
*/

function Themebanner(props){
    if(props.filter === 'true'){
        return(
            <div class='absolute grid grid-cols-12 grid-rows-6 z-50 bottom-0 w-[100%] h-[10vh] max-w-[100%]'>
                <div class='relative flex col-start-1 col-end-13 row-start-1 row-end-7 h-[100%] bg-[rgba(0,0,0,0.6)]'>
                    <h2 class='relative text-white font-[monserrat] w-[100%] max-w-[fit-content] text-[1.8rem] font-bold ml-4 m-auto'>{props.BannerName}</h2>
                    <form class='relative flex float-right w-[100%] max-w-[50%] h-[100%]'>
                        <label class='relative italic  font-bold font-[monserrat] m-auto mx-3 text-white' htmlFor="search">Filter :</label>
                        <input class='relative rounded m-auto w-[100%] max-w-[50%] focus:border-black placeholder:text-[0.9rem] pl-[1%] placeholder:font-[monserrat] placeholder:text-black placeholder:px-[1%] placeholder:left-[2%] focus:outline-none mx-1 h-[50%] ' type="text" name="search" placeholder='Search by device'/>
                        <input class='relative bg-blue-900 rounded text-white font-semibold text-sm font-[monserrat] m-auto mx-0 w-[100%] max-w-[15%] h-[50%]' type='submit' />
                    </form>
                </div>  
            </div>
        )

    }
    return(
        <div class='absolute grid grid-cols-12 grid-rows-6 z-50 bottom-0 w-[100%] h-[10vh] max-w-[100%]'>
                <div class='relative col-start-1 col-end-13 row-start-1 row-end-7 bg-[rgba(0,0,0,0.5)] h-[100%]'>
                    <h2 class='relative text-white w-[100%] font-[monserrat] max-w-[fit-content] text-[1.8rem] font-bold py-[1%] px-[3%]'>{props.BannerName}</h2>
                </div>
        </div>
    )
}
   
export default Themebanner;