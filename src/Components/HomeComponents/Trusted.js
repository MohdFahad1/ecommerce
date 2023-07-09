import React from 'react';
import company1 from '../../Assets/company1.png';
import company2 from '../../Assets/company2.png';
import company3 from '../../Assets/company3.png';
import company4 from '../../Assets/company4.png';
import company5 from '../../Assets/company5.png';
import company6 from '../../Assets/company6.png';

const Trusted = () => {
    return (
        <div className="py-5">
            <div className="bg-[#F7F8FB] py-5 flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-center text-xl font-semibold">Trusted By 1000+ Companies</h1>
                </div>
                <div className="md:flex md:justify-center md:gap-5 grid grid-cols-2">
                    <img src={company1} alt="company" className="h-[110px] w-[140px]" />
                    <img src={company2} alt="company" className="h-[110px] w-[140px]" />
                    <img src={company3} alt="company" className="h-[110px] w-[140px]" />
                    <img src={company4} alt="company" className="h-[110px] w-[140px]" />
                    <img src={company5} alt="company" className="h-[110px] w-[140px]" />
                    <img src={company6} alt="company" className="h-[110px] w-[140px]" />
                </div>
            </div>
        </div>
    )
}

export default Trusted