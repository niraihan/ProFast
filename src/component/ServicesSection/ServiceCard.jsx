import React from 'react';

const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description } = service;

  return (
    <div className="bg-white hover:bg-primary/10 shadow-md rounded-2xl p-6 border hover:shadow-lg transition-all duration-300">
      <div className="flex justify-center mb-4">
        <Icon className="text-4xl text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-primary text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ServiceCard;
