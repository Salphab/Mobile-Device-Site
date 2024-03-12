import ComparisonSearch from './ComparisonSearch';


function ComparisonBody(){
    return(
        <section class='relative  block w-[100%] max-w-[100%] h-[fit-content] mt-[2%] border-[1px]'>
            <div class='relative w-[100%] bg-gray-100 h-[60vh] max-w-[100%]'>
                <div class='relative flex w-[100%] max-w-[85%] float-right h-[100%]'>
                    <ComparisonSearch />
                    <ComparisonSearch />
                    <ComparisonSearch />
                </div>
            </div>
        </section>
    )
}
export default ComparisonBody