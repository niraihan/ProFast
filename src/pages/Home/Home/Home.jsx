import React from 'react';
import Banner from '../../../component/Banner/Banner';
import ServicesSection from '../../../component/ServicesSection/ServicesSection';
import BrandSection from '../../../component/BrandSection/BrandSection';
import FeatureSection from '../../../component/FeatureSection/FeatureSection';
import Merchant from '../../../component/Merchant/Merchant';
import CustomersReview from '../../../component/CustomersReview/CustomersReview';
import FaqSection from '../../../component/FaqSection/FaqSection';

const Home = () => {
    return (
        <div className='bg-[#EAECED]'>
            <Banner></Banner>
            <ServicesSection></ServicesSection>
            <BrandSection></BrandSection>
            <FeatureSection></FeatureSection>
            <Merchant></Merchant>
            <CustomersReview></CustomersReview>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;