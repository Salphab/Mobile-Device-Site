import { Link } from "react-router-dom";

function PopularBrands(){
    return(
        <div class='relative bg-white my-[1%] rounded shadow-md shadow-gray-400 flex w-[100%] max-w-[100%] h-[7vh]'>
            <h3 class='relative font-[monserrat] font-semibold  mt-[1%] ml-[3%]'>Popular reviews : </h3>
            <ul class='relative flex w-[100%] max-w-[75%]'>
                <li className="relative hover:bg-gray-600 font-[monserrat] bg-black text-sm text-white h-[fit-content] px-[1.5%] py-[.5%] w-[100%] max-w-[fit-content] ml-[1%] mt-[1.3%] rounded-full"><Link to='/review/apple' href="">Apple</Link></li>
                <li className="relative hover:bg-gray-600 font-[monserrat] bg-black text-sm text-white h-[fit-content] px-[1.5%] py-[.5%] w-[100%] max-w-[fit-content] ml-[1%] mt-[1.3%] rounded-full"><Link to='/review/samsung' href="">Samsung</Link></li>
                <li className="relative hover:bg-gray-600 font-[monserrat] bg-black text-sm text-white h-[fit-content] px-[1.5%] py-[.5%] w-[100%] max-w-[fit-content] ml-[1%] mt-[1.3%] rounded-full"><Link to='/review/xiaomi' href="">Xiaomi</Link></li>
                <li className="relative hover:bg-gray-600 font-[monserrat] bg-black text-sm text-white h-[fit-content] px-[1.5%] py-[.5%] w-[100%] max-w-[fit-content] ml-[1%] mt-[1.3%] rounded-full"><Link to='/review/huawei' href="">Huawei</Link></li>
                <li className="relative hover:bg-gray-600 font-[monserrat] bg-black text-sm text-white h-[fit-content] px-[1.5%] py-[.5%] w-[100%] max-w-[fit-content] ml-[1%] mt-[1.3%] rounded-full"><Link to='/review/tecno' href="">Tecno</Link></li>
                <li className="relative hover:bg-gray-600 font-[monserrat] bg-black text-sm text-white h-[fit-content] px-[1.5%] py-[.5%] w-[100%] max-w-[fit-content] ml-[1%] mt-[1.3%] rounded-full"><Link to='/review/infinix' href="">Infinix</Link></li>
                <li className="relative hover:bg-gray-600 font-[monserrat] bg-black text-sm text-white h-[fit-content] px-[1.5%] py-[.5%] w-[100%] max-w-[fit-content] ml-[1%] mt-[1.3%] rounded-full"><Link to='/review/oppo' href="">Oppo</Link></li>
                <li className="relative hover:bg-gray-600 font-[monserrat] bg-black text-sm text-white h-[fit-content] px-[1.5%] py-[.5%] w-[100%] max-w-[fit-content] ml-[1%] mt-[1.3%] rounded-full"><Link to='/review/google' href="">Google</Link></li>
                <li className="relative hover:bg-gray-600 font-[monserrat] bg-black text-sm text-white h-[fit-content] px-[1.5%] py-[.5%] w-[100%] max-w-[fit-content] ml-[1%] mt-[1.3%] rounded-full"><Link to='/review/realme' href="">Realme</Link></li>
            </ul>
        </div>
    )
}
export default PopularBrands;