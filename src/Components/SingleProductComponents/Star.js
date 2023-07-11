import React from 'react';
import {FaStar, FaStarHalfAlt} from 'react-icons/fa';
import {AiOutlineStar} from 'react-icons/ai';

const Star = ({ stars, reviews }) => {

    const ratingStar = Array.from({length:5}, (elem, index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {
                    stars >= index + 1 ? <FaStar className="text-[#FCA700]"/> : stars >= number ? <FaStarHalfAlt className="text-[#FCA700]"/> : <AiOutlineStar className="text-[#FCA700]"/>
                }
            </span>
        )
    });


    return (
        <div className="flex gap-5 items-center my-3">
            <p className="flex">{ratingStar}</p>
            <p>({reviews} curtomer reviews)</p>
        </div>
    )
}

export default Star