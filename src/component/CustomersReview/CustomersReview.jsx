import React, { useState } from 'react';

import { FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// আমাদের কাস্টমারদের রিভিউ ডেটা (আপনি এটি Firebase থেকে আনতে পারেন)
const testimonialsData = [
    {
        id: 1,
        name: 'Rasel Ahamed',
        title: 'CTO',
        quote: 'A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.',
        avatar: 'https://i.pravatar.cc/150?u=rasel'
    },
    {
        id: 2,
        name: 'Awlad Hossin',
        title: 'Senior Product Designer',
        quote: 'Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!',
        avatar: 'https://i.pravatar.cc/150?u=awlad'
    },
    {
        id: 3,
        name: 'Nasir Uddin',
        title: 'CEO',
        quote: 'This product has completely changed my daily routine. The support is fantastic and I feel more energetic. Highly recommended for everyone sitting long hours.',
        avatar: 'https://i.pravatar.cc/150?u=nasir'
    },
    {
        id: 4,
        name: 'Fatima Akter',
        title: 'Marketing Head',
        quote: 'I was skeptical at first, but Posture Pro delivered. It\'s comfortable to wear and I\'ve noticed a significant improvement in my posture in just a few weeks.',
        avatar: 'https://i.pravatar.cc/150?u=fatima'
    }
];

const CustomersReview = () => {
    // বর্তমান স্লাইড ট্র্যাক করার জন্য state
    const [currentIndex, setCurrentIndex] = useState(1); // আমরা দ্বিতীয় আইটেমকে ডিফল্ট হিসেবে সেন্টারে রাখব

    // পরের স্লাইডে যাওয়ার ফাংশন
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    };

    // আগের স্লাইডে যাওয়ার ফাংশন
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
    };


    return (
        <section className="bg-gray-50 py-12 md:py-24">
            <div className="container mx-auto px-4">
                
                {/* সেকশনের হেডিং */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        What our customers are saying
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-600">
                        Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease.
                    </p>
                </div>

                {/*  স্লাইডার */}
                <div className="relative flex items-center justify-center">
                    {/* daisyUI ক্যারোসেল কন্টেইনার */}
                    <div className="carousel w-full">
                        {testimonialsData.map((testimonial, index) => {
                            // সেন্টারে থাকা কার্ডটি বড় এবং উজ্জ্বল হবে
                            const isActive = index === currentIndex;
                            // সেন্টারের বাম ও ডানের কার্ডগুলো একটু ছোট এবং কম উজ্জ্বল হবে
                            const isAdjacent = Math.abs(currentIndex - index) === 1 ||
                                (currentIndex === 0 && index === testimonialsData.length - 1) ||
                                (currentIndex === testimonialsData.length - 1 && index === 0);

                            let cardClass = 'carousel-item relative w-full md:w-1/2 lg:w-1/3 p-4 transition-all duration-500 ease-in-out';

                            if (isActive) {
                                cardClass += ' transform scale-100 opacity-100 z-10';
                            } else if (isAdjacent) {
                                cardClass += ' transform scale-90 opacity-40';
                            } else {
                                cardClass += ' hidden'; // অন্য সব কার্ড হাইড থাকবে
                            }

                            return (
                                <div id={`slide${index}`} key={testimonial.id} className={cardClass}>
                                    <div className={`card w-full bg-white shadow-xl p-8 rounded-2xl ${isActive ? 'border-2 border-teal-400' : ''}`}>
                                        <figure className="text-teal-500 text-5xl mb-4">
                                            <FaQuoteLeft />
                                        </figure>
                                        <div className="card-body p-0">
                                            <p className="text-gray-600 mb-6 text-center">{testimonial.quote}</p>
                                            <div className="flex items-center justify-center flex-col">
                                                <div className="avatar mb-3">
                                                    <div className="w-16 rounded-full ring ring-teal-500 ring-offset-base-100 ring-offset-2">
                                                        <img src={testimonial.avatar} alt={testimonial.name} />
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                                                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* নেভিগেশন বাটন */}
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-20">
                        <button onClick={prevSlide} className="btn btn-circle bg-white border-gray-200 hover:bg-teal-400 hover:text-white">
                            <FiChevronLeft size={24} />
                        </button>
                        <button onClick={nextSlide} className="btn btn-circle bg-white border-gray-200 hover:bg-teal-400 hover:text-white">
                            <FiChevronRight size={24} />
                        </button>
                    </div>

                </div>
                {/* পেজিনেশন ডট */}
                <div className="flex justify-center w-full py-4 gap-2">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-teal-500 scale-125' : 'bg-gray-300'}`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomersReview;