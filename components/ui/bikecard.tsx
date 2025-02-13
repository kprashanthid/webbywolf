import React from "react";
import Image, { StaticImageData } from "next/image";
import { Typography } from "./typography";

type BikeCardProps = {
  imageSrc: StaticImageData;
  text: string;
};

function BikeCard({ imageSrc, text }: BikeCardProps) {
  return (
    <div className="bg-white flex flex-row sm:gap-8 gap-3 items-center">
      <Image
        src={imageSrc}
        alt={text}
        className="object-cover sm:w-36 sm:h-36 h-16 w-16"
      />
      <Typography className="sm:leading-7 w-4/6" variant="subheading">
        {text}
      </Typography>
    </div>
  );
}

export default BikeCard;
