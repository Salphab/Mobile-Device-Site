import { useState, useEffect, useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ReviewContext } from "../../../Hooks/Context/ReviewContext";

function GeneralReviewList() {
    const { url } = useContext(ReviewContext);
    const [PhoneReview, setPhoneReview] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const textHoverEffects = useRef([]);

    const mouseOver = (index) => {
        textHoverEffects.current[index].style.color = '#0E4FE3';
    };

    const mouseLeave = (index) => {
        textHoverEffects.current[index].style.color = 'black';
    };

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setPhoneReview(res.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });      
    },
    [url]);

    if (!isLoading && PhoneReview.data?.length > 0) {
        return (
            <section className="relative grid gap-2 grid-cols-3 w-full max-w-full h-fit border border-solid">
                {PhoneReview.data.map((data, index) => {
                    const imageUrl = 'http://localhost:1337' + (data.attributes.exhibition?.data?.attributes?.formats?.small?.url || '');
                    const altText = data.attributes.exhibition?.data?.attributes?.alternativeText || 'Image';
                    const title = data.attributes.meta.title || 'No Title';
                    const publishDate = data.attributes.meta.Publish_date || 'Unknown';
                    let content_href = data.attributes.meta.title.replaceAll(" ","_")              
                    return (
                        <Link
                            key={data.id}
                            to={content_href+"_id"+data.id}
                            onMouseOver={() => mouseOver(index)}
                            onMouseLeave={() => mouseLeave(index)}
                            className="relative shadow-xl shadow-gray-400 block rounded bg-slate-50 h-[50vh]"
                        >
                            <img
                                loading="lazy"
                                className="relative rounded-t mb-[2%]"
                                src={imageUrl}
                                alt={altText}
                            />
                            <h2
                                ref={(el) => (textHoverEffects.current[index] = el)}
                                className="relative w-full px-[2%] text-md mt-[5%] text-black leading-5 max-w-[95%] font-bold font-[monserrat] text-justify"
                            >
                                {title}
                            </h2>
                            <h2 className="absolute ml-[2%] bottom-[6%]">
                                <span className="font-[monserrat] text-sm font-semibold text-black">Published on:</span>{' '}
                                <span className="relative text-sm text-gray-500 font-[monserrat]">{publishDate}</span>
                            </h2>
                        </Link>
                    );
                })}
            </section>
        );
    }

    return (
        <section className="relative w-full max-w-full h-[100vh] flex items-center justify-center">
            <p>Nothing is seen here</p>
        </section>
    );
}

export default GeneralReviewList;
