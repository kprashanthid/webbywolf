import Image, { StaticImageData } from "next/image";
import React from "react";
import { Typography } from "./typography";

type DeatailCardProps = {
  image: StaticImageData;
  heading: string;
  subHeading: string;
};

function DetailCard({ image, heading, subHeading }: DeatailCardProps) {
  return (
    <div className="sm:w-[444px] w-40 ">
      <Image src={image} alt="loading" className=" rounded-t-xl" />
      <div className="bg-white sm:pb-20 pb-5 sm:px-5 px-2">
        <div className="flex flex-col  sm:gap-4 gap-1">
          <Typography
            variant="subheading"
            className="font-semibold sm:text-[18px] text-[6px]  sm:mt-7 mt-2"
          >
            {heading}
          </Typography>
          <Typography
            variant="subheading"
            className="sm:text-[18px] text-[6px]"
          >
            {subHeading}
          </Typography>
        </div>
        <div className="sm:mt-9 mt-3  sm:px-5 px-2">
          <span className="text-customBlue sm:text-[16px] text-[6px] font-semibold">
            Learn More
          </span>
          <div className="h-[2px] bg-customBlue sm:w-[84px] w-7"></div>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
