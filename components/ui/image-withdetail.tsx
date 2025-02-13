import Image from "next/image";
import React from "react";
import sure from "../../assets/images/suredrive.png";
import { Typography } from "./typography";

function ImageWithDetails() {
  return (
    <div className="flex flex-row sm:gap-4 gap-1">
      <Image src={sure} alt="" className="object-cover sm:h-9 sm:w-9 h-4 w-5" />
      <div className="flex flex-col sm:gap-2">
        <span className="sm:text-[20px] text-[8px] font-semibold sm:leading-7">
          Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
        </span>
        <Typography className="" variant="subheading">
          Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non
          viverra. Risus quam mattis senectus vitae interdum odio ornare gravida
          vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut
          tortor.
        </Typography>
      </div>
    </div>
  );
}

export default ImageWithDetails;
