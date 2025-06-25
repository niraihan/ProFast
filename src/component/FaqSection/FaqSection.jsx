import React from 'react';

const FaqSection = () => {
    return (
        <div className='p-24 rounded-4xl '>
            <div className="text-center mb-12 ">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                   Frequently Asked Question (FAQ)
                </h2>
                <p className="max-w-3xl mx-auto text-gray-600">
                   Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title font-semibold">How does this posture corrector work?</div>
                <div className="collapse-content text-sm">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
            </div>
            <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title font-semibold">How do I update my profile information?</div>
                <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
            </div>
            <div className='flex items-center justify-center mt-8'>
                <button className='btn btn-primary'>See More FAQ </button>
            </div>
        </div>
    );
};

export default FaqSection;