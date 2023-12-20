import React from "react";
import User from "./User";
import frameImg from "../assets/frame.png";
import yogaImage from "../assets/yogaImage.png";
const Yoga = () => {
  return (
    <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
        <h1 className="text-[1.875rem] font-semibold leading-[2.375rem] text-richblack-5">
            Yoga Class Admission Form
          </h1>
      <div className="mx-auto flex w-11/12 max-w-maxContent flex-col-reverse justify-between gap-y-12 py-12 md:flex-row md:gap-y-0 md:gap-x-12">
        <div className="mx-auto w-11/12 max-w-[450px] md:mx-0">
          
          <p className="mt-4 text-[1.125rem] leading-[1.625rem]">
            <span className="text-richblack-100">
              Build skills for today, tomorrow, and beyond
            </span>{" "}
          </p>
          {<User />}
        </div>
        <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
          <img
            src={frameImg}
            alt="Pattern"
            width={558}
            height={504}
            loading="lazy"
          />
          <img
            src={yogaImage}
            alt="Students"
            width={558}
            height={504}
            loading="lazy"
            className="absolute -top-4 right-4 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default Yoga;
