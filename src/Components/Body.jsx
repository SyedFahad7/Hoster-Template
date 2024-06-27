import React from "react";

const Body = () => {
  return (
    <div className="space-y-4 lg:flex">
      <div className="flex items-center justify-center lg:flex-1 lg:order-2">
        <img
          src="./assets/Blue-Shape.svg"
          alt="1st"
          className="-rotate-45 h-64 md:h-80 lg:h-2/6"
        />
        <img
          src="./assets/Pink-Shape.svg"
          alt="2nd"
          className="absolute -rotate-[30deg] h-64 md:h-80 lg:h-2/6"
        />
        <img
          src="./assets/Purple-Shape.svg"
          alt="3rd"
          className="absolute -rotate-[15deg] h-64 md:h-80 lg:h-2/6"
        />
        <img
          src="./assets/Hero-Model.png"
          alt="hero"
          className="absolute h-64 md:h-80 lg:h-2/6"
        />
      </div>
      <div className="flex flex-col gap-4 lg:flex-1 lg:order-1">
        <h1 className="text-5xl font-bold font-playfair leading-tight md:text-6xl">
          Host Your Website in Less than 5 Minutes
        </h1>
        <p className="font-lato text-gray-400 md:text-2xl">
          With Hoster , get your website up and running in no less than 5
          minutes with the most competitive pricing packages available online.
        </p>
        <br></br>
        <form action="" className="flex flex-col gap-6 md:flex-row">
          <input
            className=" w-3/4 rounded-md placeholder:text-black placeholder:opacity-40 px-4 py-3 md:text-xl bg-gray-400"
            type="email"
            placeholder="Enter your Email address"
          />
          <button className=" w-3/4 bg-cyan-800 text-white px-4 py-3 hover:bg-cyan-700 md:text-base md:rounded-3xl ">
            Join the Waitlist
          </button>
        </form>
        <div className="flex gap-2 md:gap-5 md:text-center md:items-center">
          <img className="md:h-10" src="/assets/Checkmark.svg" alt="mark" />
          <p className="text-black-300 font-serif font-semibold md:text-xl">
            No Spam, ever. Unsubscribe anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Body;
