import AccountInfo from "./AccountInfo"
function InformationCollected(){
    return(
        <div class='relative block border-t-[1.5px] border-t-black w-[100%] max-w-[100%] m-auto h-[fit-content]'>
            <h1 class='relative pt-[1%] text-[1.5rem] ml-[2%] font-bold'>Information that are collected and how they are used</h1>
            <p class='relative mt-[1%] w-[100%] font-[helvetica] max-w-[100%] pl-[2%] pr-[2%] text-justify'>
            We may collect personal data from you when you visit our website, register on our site, subscribe to our newsletter, respond to a survey
            or fill out a form. The types of personal data we may collect include:
            </p>
            <ul class='relative w-[100%] max-w-[fit-content] ml-[7%] mt-[2%]'>
                <li class='relative list-disc italic text-[helvetica]'>Name</li>
                <li class='relative list-disc italic text-[helvetica]'>Email Address</li>
                <li class='relative list-disc italic text-[helvetica]'>Chosen Password</li>
                <li class='relative list-disc italic text-[helvetica]'>IP Address</li>
                <li class='relative list-disc italic text-[helvetica]'>Browser Information</li>
                <li class='relative list-disc italic text-[helvetica]'>Cookies nad usage data</li>
            </ul>
            <AccountInfo/>
        </div>
    )
}
export default InformationCollected