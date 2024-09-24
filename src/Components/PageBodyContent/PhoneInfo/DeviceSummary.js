import { Link } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import CompareIcon from '@mui/icons-material/Compare';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CameraIcon from '@mui/icons-material/Camera';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import MemoryIcon from '@mui/icons-material/Memory';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import Battery50Icon from '@mui/icons-material/Battery50';
import { useContext} from "react";
import { context } from "../../../Pages/PhonePage/PhonePersona";


function DeviceSummary(){
    const Context = useContext(context);
    return(
        <div class='relative bg-slate-50 flex w-[100%] max-w-[100%] h-[59vh]'>
                    <div class='relative block mr-[0.5%] border-r-[1px] w-[100%] max-w-[35%] h-[98%] mt-[0.5%]'>
                        <div class='relative w-[100%] max-w-[80%] h-[65%] m-auto'>
                            <Link to={window.location.url}>
                                <img class='relative m-auto py-[2%] h-[100%]' src={Context.img} alt={Context.name}/>
                            </Link>
                        </div>
                            <Link to='' class='relative bg-black mb-[1%] mt-[5%] flex m-auto rounded-full h-[9%] w-[100%] hover:bg-gray-600 max-w-[45%]'>
                                <VisibilityIcon className='relative my-auto ml-[13%] text-md p-[3%] text-white'/>
                                <span class='relative font-[montserrat] my-auto ml-[3%] text-sm text-white'>REVIEW</span>
                            </Link>
                            <Link to='' class='relative mt-[2%] flex m-auto rounded-full h-[9%] w-[100%] max-w-[45%] bg-green-600 hover:bg-green-500'>
                                <CompareIcon className='relative my-auto ml-[10%] text-md p-[3%] text-white'/>
                                <span class='relative font-[montserrat] my-auto ml-[1%] text-sm text-white'>COMPARE</span>
                            </Link>
                    </div>
                    <div class='relative w-[100%] grid gap-x-[1%] grid-cols-12 grid-row-6 max-w-[68%] m-auto h-[98%]'>
                        <div class='relative block col-start-1 col-end-6 row-start-1 row-end-7 border-r-[1px] px-[2%]'>
                            <div class='relaive flex hover:border-blue-500 hover:border-[1.5px] w-[100%] max-w-[100%] h-[fit-content] border-[1.5px] border-black rounded mt-[1%] mb-[2%]'>
                                <div class='relative flex w-[100%] max-w-[25%] h-[80%] my-auto ml-[1%]'>
                                    <CalendarMonthIcon className='relative m-auto text-blue-500 text-[1.7rem]' />
                                </div>
                                <div class='relative block w-[100%] max-w-[75%]'>
                                    <h2 class='relative text-[0.8rem] font-[montserrat] font-semibold'>Announced</h2>
                                    <p class='relative font-[helverica] text-gray-500 text-[0.8rem]'>{Context.detailSpec[1].specifications[0].value}</p>
                                </div>
                            </div>
                            <div class='relaive w-[100%] hover:border-blue-500 hover:border-[1.5px] flex max-w-[100%] h-[fit-content] border-[1.5px] border-black rounded mb-[2%]'>
                                <div class='relative flex w-[100%] max-w-[25%] h-[80%] my-auto ml-[1%]'>
                                    <CameraIcon className='relative m-auto text-blue-500 text-[1.7rem]' />
                                </div>
                                <div class='relative block w-[100%] max-w-[75%]'>
                                    <h2 class='relative text-sm text-[0.8rem] font-[montserrat] font-semibold'>Camera</h2>
                                    <p class='relative font-[helverica] text-[0.8rem] text-gray-500'>{Context.quickSpec[2].value} / {Context.quickSpec[3].value}</p>
                                </div>
                            </div>
                            <div class='relaive w-[100%] hover:border-blue-500 hover:border-[1.5px] flex max-w-[100%] h-[fit-content] border-[1.5px] border-black rounded mb-[2%]'>
                                <div class='relative flex w-[100%] max-w-[25%] h-[80%] my-auto ml-[1%]'>
                                    <DisplaySettingsIcon className='relative m-auto text-blue-500 text-[1.7rem]' />
                                </div>
                                <div class='relative block w-[100%] max-w-[75%]'>
                                    <h2 class='relative text-sm text-[0.8rem] font-[montserrat] font-semibold'>Display</h2>
                                    <p class='relative font-[helverica] text-[0.8rem] text-gray-500'>{Context.quickSpec[0].value} inches</p>
                                    <p class='relative font-[helverica] text-[0.8rem] text-gray-500'>{Context.quickSpec[1].value}</p>
                                </div>
                            </div>
                            <div class='relaive flex w-[100%] hover:border-blue-500 hover:border-[1.5px] max-w-[100%] h-[fit-content] border-[1.5px] border-black rounded mb-[2%]'>
                                <div class='relative flex w-[100%] max-w-[25%] h-[80%] my-auto ml-[1%]'>
                                    <MemoryIcon className='relative m-auto text-blue-500 text-[1.7rem]' />
                                </div>
                                <div class='relative block w-[100%] max-w-[75%]'>
                                    <h2 class='relative text-sm text-[0.8rem] font-[montserrat] font-semibold'>Hardware</h2>
                                    <p class='relative font-[helverica] text-[0.8rem] text-gray-500'>"{Context.quickSpec[4].value}</p>
                                    <p class='relative font-[helverica] text-[0.8rem] text-gray-500'>"{Context.quickSpec[5].value}</p>
                                </div>
                            </div>
                            <div class='relaive flex w-[100%] hover:border-blue-500 hover:border-[1.5px] max-w-[100%] h-[fit-content] border-[1.5px] border-black rounded mb-[2%]'>
                                <div class='relative flex w-[100%] max-w-[25%] h-[80%] my-auto ml-[1%]'>
                                    <AppShortcutIcon className='relative m-auto text-blue-500 text-[1.7rem]' />
                                </div>
                                <div class='relative block w-[100%] max-w-[75%]'>
                                    <h2 class='relative text-sm text-[0.8rem] font-[montserrat] font-semibold'>OS</h2>
                                    <p class='relative font-[helverica] text-[0.8rem] text-gray-500'>"{Context.detailSpec[4].specifications[0].value}</p>
                                </div>
                            </div>
                            <div class='relaive flex w-[100%] hover:border-blue-500 hover:border-[1.5px] max-w-[100%] h-[fit-content] border-[1.5px] border-black rounded'>
                                <div class='relative flex w-[100%] max-w-[25%] h-[80%] my-auto ml-[1%]'>
                                    <Battery50Icon className='relative m-auto text-blue-500 text-[1.7rem]' />
                                </div>
                                <div class='relative block w-[100%] max-w-[75%]'>
                                    <h2 class='relative text-[0.8rem] font-[montserrat] font-semibold'>Battery</h2>
                                    <p class='relative font-[helverica] text-gray-500 text-[0.8rem]'>{Context.quickSpec[6].value}</p>
                                </div>
                            </div>
                        </div>
                        <div class='relative block col-start-5 col-end-9 row-start-1 row-end-7'>
                            
                        </div>
                    </div>
                </div>
    )
}
export default DeviceSummary;