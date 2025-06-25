import React from "react";
import Marquee from "react-fast-marquee";

// Logo images
// import amazon from "../../assets/brands/amazon.png";
import amazon2 from "../../assets/brands/amazon_vector.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstad from "../../assets/brands/randstad.png";
import start1 from "../../assets/brands/start-people 1.png";
import start from "../../assets/brands/start.png";

const brands = [
//   { id: 1, name: "amazon", img: amazon },
  { id: 2, name: "amazon2", img: amazon2 },
  { id: 3, name: "casio", img: casio },
  { id: 4, name: "moonstar", img: moonstar },
  { id: 5, name: "randstad", img: randstad },
  { id: 6, name: "start-people", img: start1},
  { id: 7, name: "start", img: start },
];

const BrandSection = () => {
  return (
    <div className="bg-base-200 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-primary">We've helped thousands of sales teams</h2>
      <Marquee speed={50} pauseOnHover={true} direction="left">
        <div className="flex gap-20">
          {brands.map((brand) => (
            <div key={brand.id} className="w-32 h-32 flex justify-center items-center">
              <img
                src={brand.img}
                alt={brand.name}
                className="w-full h-full object-contain  hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default BrandSection;
