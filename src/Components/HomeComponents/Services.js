import React from 'react';
import 'boxicons';

const Services = () => {
  return (
    <div className="py-10">
        <div className="md:flex md:flex-row justify-center gap-3 flex flex-col items-center">

            {/* FIRST */}
            <div className="bg-[#DADBDD] flex flex-col justify-center items-center px-5 rounded-md md:h-[212px] md:w-[300px] h-[100px] w-[312px]">
            <div className="bg-white rounded-full flex justify-center items-center h-[40px] w-[40px]">
                <box-icon name='truck' type='solid' color="#4130CD"></box-icon>
            </div>
            <h1 className="font-medium">Super Fast and Free Delivery</h1>
            </div>

            {/* SECOND & THIRD */}
            <div className="flex md:flex-col gap-3 ">
                <div className="flex flex-col justify-center items-center bg-[#DADBDD] h-[100px] md:w-[200px] rounded-md w-[150px]">
                    <div className="bg-white rounded-full flex justify-center items-center h-[40px] w-[40px]">
                        <box-icon name='shield-quarter' color="#4130CD">
                        </box-icon>
                    </div>
                    <h1 className="font-medium text-center">Non-contact Shipping</h1>
                </div>

                <div className="flex flex-col justify-center items-center bg-[#DADBDD] h-[100px] md:w-[200px] rounded-md w-[150px]">
                    <div className="bg-white rounded-full flex justify-center items-center h-[40px] w-[40px]">
                    <box-icon name='coin-stack' type='solid' color="#4130CD">
                    </box-icon>
                    </div>
                    <h1 className="font-medium text-center">Money-back Guaranteed</h1>
                </div>
            </div>

            {/* FOURTH */}
            <div className="bg-[#DADBDD] flex flex-col justify-center items-center px-5 rounded-md md:h-[212px] md:w-[300px] h-[100px] w-[312px]">
                <div className="bg-white rounded-full flex justify-center items-center h-[40px] w-[40px]">
                <box-icon name='check-shield' type='solid' color="#4130CD" ></box-icon>
                </div>
                <h1 className="font-medium">Super Secure Payment System</h1>
            </div>
        </div>
    </div>
  )
}

export default Services