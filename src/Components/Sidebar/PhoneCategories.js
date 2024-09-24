import {Link} from 'react-router-dom';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
function PhoneCategories(){
    return(
        <section class='relative bg-slate-50 block w-[100%] max-w-[100%] mb-[4%] h-[65vh]'>
                <div class='relative bg-black w-[100%] mb-[2%] max-w-[100%] h-[12%]'>
                    <div class='relative h-[100%] flex m-auto w-[100%] max-w-[50%]'>
                        <PhoneIphoneIcon className="relative text-white text-xl m-auto" />
                        <h1 class='relative text-white text-md m-auto font-semibold font-[montserrat]'>Phone Brands</h1>
                    </div>                       
                </div>
                <div class='relative flex w-[100%] max-w-[100%] h-[88%]'>
                        <ul class='relative block h-[98%] border-r-[1.5px] border-gray-300 w-[100%] max-w-[33.33%]'>
                                <Link to='/apple' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Apple</li></Link>
                                <Link to='/samsung' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Samsung</li></Link>
                                <Link to='/oneplus' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>oneplus</li></Link>
                                <Link to='/google'  class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Google</li></Link>
                                <Link to='/tecno' class='relative text-center hover:pt-[2%]  font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Tecno</li></Link>
                                <Link to='/infinix' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Infinix</li></Link>
                                <Link to='/huawei' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Huawei</li></Link>
                                <Link to='/xiaomi' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Xiaomi</li></Link>
                                <Link to='/oppo' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Oppo</li></Link>
                                <Link to='/asus' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Asus</li></Link>
                                <Link to='/vodafone' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Vodaphone</li></Link>
                        </ul>
                        <ul class='relative block h-[98%] border-r-[1.5px] border-gray-300 w-[100%] max-w-[33.33%]'>
                                <Link to='/honor' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Honor</li></Link>
                                <Link to='/vivo' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Vivo</li></Link>
                                <Link to='/zte' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>ZTE</li></Link>
                                <Link to='/nokia' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Nokia</li></Link>
                                <Link to='/realme' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Realme</li></Link>
                                <Link to='/itel' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Itel</li></Link>
                                <Link to='/meizu' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Meizu</li></Link>
                                <Link to='/blackberry' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Blakcberry</li></Link>
                                <Link to='/nothing' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Nothing</li></Link>
                                <Link to='/ulefone' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Ulefone</li></Link>
                                <Link to='/sharp' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Sharp</li></Link>
                        </ul>
                        <ul class='relative block h-[98%] w-[100%] max-w-[33.33%]'>
                                <Link to='/gionee' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Gionee</li></Link>
                                <Link to='/alcatel' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Alcatel</li></Link>
                                <Link to='/sony' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Sony</li></Link>
                                <Link to='/lenovo' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Lenovo</li></Link>
                                <Link to='/motorola' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Motorola</li></Link>
                                <Link to='/microsoft' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Microsoft</li></Link>
                                <Link to='/htc' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>HTC</li></Link>
                                <Link to='/lg' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>LG</li></Link>
                                <Link to='/yezz' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Yezz</li></Link>
                                <Link to='/blackview' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Blackview</li></Link>
                                <Link to='/cubot' class='relative text-center hover:pt-[2%] font-[monserrat]'><li class='relative m-auto py-[3.5%] hover:text-white rounded hover:bg-blue-500 w-[100%] max-w-[90%]'>Cubot</li></Link>                         
                        </ul>
                    </div>
            </section>
    )
}
export default PhoneCategories;