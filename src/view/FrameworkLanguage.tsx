import NodeJs from "../assets/icons/node-js.svg";
import ExpressJs from "../assets/icons/expressjs.png";
import Laravel from "../assets/icons/laravel.png";
import React from "../assets/icons/React.webp";
import Flutter from "../assets/icons/flutter.png";

const FrameworkLanguage = () => {
  return (
    <>
      <div className="mt-10 mb-20 items-center justify-center">
        <h2 className="text-center font-bold text-4xl mb-10">
          Framework & Language
        </h2>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4 justify-center">
          <div className="flex justify-center items-center">
            <img
              src={NodeJs}
              alt="Node.js Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={ExpressJs}
              alt="Express.js Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Laravel}
              alt="Node.js Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Flutter}
              alt="Node.js Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={React}
              alt="Node.js Logo"
              className="h-16 w-16 object-contain"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameworkLanguage;
