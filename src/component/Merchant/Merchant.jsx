import React from 'react';
import locationImg from '../../assets/location-merchant.png'
const Merchant = () => {
    return (
        <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine" className=" bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat bg-[#03373D] rounded-4xl text-white">
            <div className="hero-content flex-col lg:flex-row-reverse p-20">
                <img
                    src={locationImg}
                    className=" max-w-md rounded-lg "
                />
                <div>
                    <h1 className="text-5xl font-bold">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="py-6">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>
                    <button className="btn btn-primary rounded-full">Become a Merchant</button>
                    <button className="btn btn-primary rounded-full ms-2">Earn with Profast Courier</button>
                </div>
            </div>
        </div>
    );
};

export default Merchant;