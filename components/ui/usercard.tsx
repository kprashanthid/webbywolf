import { StaticImageData } from "next/image";
import React from "react";
import { Typography } from "./typography";
import Image from "next/image";

type UserCardProps = {
  text: string;
  profileImage: StaticImageData;
  icon: StaticImageData;
  name: string;
};

function UserCard({ text, profileImage, icon, name }: UserCardProps) {
  return (
    <div className="bg-white sm:py-14 sm:px-8 py-5 px-3 flex flex-col sm:gap-5 gap-1 sm:rounded-xl rounded-md">
      {icon && (
        <Image src={icon} alt="loading" className="sm:h-16 h-6 sm:w-16 w-6" />
      )}
      <Typography variant="subheading">{text}</Typography>
      <div className="flex flex-row sm:gap-5 gap-2 items-center sm:mt-3 mt-1">
        <Image
          src={profileImage}
          alt="loading"
          className="sm:h-16 h-6 sm:w-16 w-6"
        />
        <Typography variant="subheading">{name}</Typography>
      </div>
    </div>
  );
}

export default UserCard;
