import React from 'react';
import img1 from '../../assets/live-tracking.png'; // উপরের বড় ইমেজ
import img2 from '../../assets/safe-delivery.png';
import img3 from '../../assets/safe-delivery.png';

const features = [
  {
    id: 1,
    title: 'Live Parcel Tracking',
    description:
      'Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment\'s journey and get instant status updates for complete peace of mind.',
    image: img1,
  },
  {
    id: 2,
    title: '100% Safe Delivery',
    description:
      'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
    image: img2,
  },
  {
    id: 3,
    title: '24/7 Call Center Support',
    description:
      'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need it.',
    image: img3,
  },
];

const FeatureSection = () => {
  return (
    <div className="bg-base-100 py-12 px-4 md:px-10 lg:px-20">
      <div className="grid gap-6">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-base-400 rounded-xl shadow-sm ${
              index === 0 ? 'border border-primary' : ''
            }`}
          >
            {/* Image */}
            <div className="w-32 h-32 flex-shrink-0">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Divider line (horizontal on mobile, vertical on desktop) */}
            <div className="hidden md:block w-px h-24 bg-gray-300"></div>
            <div className="block md:hidden w-full h-px bg-gray-300"></div>

            {/* Text */}
            <div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
