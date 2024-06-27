import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="">
        <ul className="flex gap-6 font-lato text-gray-500">
          <li className="md:text-3xl underline underline-offset-4 decoration-black">
            <a href="#">Facebook</a>
          </li>
          <li className="md:text-3xl underline underline-offset-4 decoration-black">
            <a href="#">Instagram</a>
          </li>
          <li className="md:text-3xl underline underline-offset-4 decoration-black">
            <a href="#">Twitter</a>
          </li>
        </ul>
      </div>
      <div className="flex gap-2">
        <img className="md:h-20" src="./assets/Help-Avatar.svg" alt="help"/>
        <div className="flex flex-col gap-1">
            <p className="font-playfair font-thin md:text-2xl">Need assistance?</p>
            <a className="font-lato font-medium md:text-2xl underline underline-offset-4" href="#">Talk to a Specialist</a>
        </div> 
      </div>
    </div>
  );
};

export default Footer;
