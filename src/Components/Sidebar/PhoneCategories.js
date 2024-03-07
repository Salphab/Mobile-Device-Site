import { Link } from "react-router-dom";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
function PhoneCategories(){
    return(
        <section class='relative bg-gray-100 block w-[100%] max-w-[100%] mb-[6%] h-[65vh]'>
                <div class='relative bg-black w-[100%] mb-[2%] max-w-[100%] h-[12%]'>
                    <div class='relative h-[100%] flex m-auto w-[100%] max-w-[50%]'>
                        <PhoneIphoneIcon className="relative text-white text-xl m-auto" />
                        <h1 class='relative text-white text-md m-auto font-semibold font-[montserrat]'>Phone Brands</h1>
                    </div>                       
                </div>
                <div class='relative flex w-[100%] max-w-[100%] h-[88%]'>
                    <div class='relative grid w-[100%] gap-x-[0.5%] max-w-[100%] h-[100%] grid-cols-12 grid-rows-6'>
                        <div class='relative col-start-1 col-end-5 row-start-1 row-end-7'>
                            <ul class='relative block w-[100%] max-w-[100%] h-[97%] border-r-[1px] border-gray-300'>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/apple'>Apple</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/samsung'>Samsung</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/oneplus'>OnePlus</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/google'>Google</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/tecno'>Tecno</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/infinix'>Infinix</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/huawei'>Huawei</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/xiaomi'>Xiaomi</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/oppo'>Oppo</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/asus'>Asus</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/vodafone'>Vodafone</Link></li>
                            </ul>
                        </div>
                        <div class='relative col-start-5 col-end-9 row-start-1 row-end-7'>
                        <ul class='relative block w-[100%] max-w-[100%] h-[97%] border-r-[1px] border-gray-300'>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/honor'>Honor</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/vivo'>Vivo</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/zte'>ZTE</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/nokia'>Nokia</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/realme'>Realme</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/itel'>Itel</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/meizu'>Meizu</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/blackberry'>Blackberry</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/nothing'>Nothing</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/nothing'>Ulefone</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/sharp'>Sharp</Link></li>
                            </ul>
                        </div>
                        <div class='relative col-start-9 col-end-13 row-start-1 row-end-7'>
                        <ul class='relative block w-[100%] max-w-[100%] h-[97%]'>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/gionee'>Gionee</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/alcatel'>Alcatel</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/sony'>Sony</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/lenovo'>Lenovo</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/motorola'>Motorola</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/microsoft'>Microsoft</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/htc'>HTC</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/lg'>LG</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/yezz'>Yezz</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/blackview'>Blackview</Link></li>
                                <li class='relative text-center hover:pt-[2%] text-md h-[8%] hover:bg-[black] hover:text-white font-[calibri] my-[4%]'><Link to='/cubot'>Cubot</Link></li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </section>
    )
}
export default PhoneCategories;