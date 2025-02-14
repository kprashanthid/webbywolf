import bikedat1 from "../../assets/images/bikedata1.png";
import bikedat2 from "../../assets/images/bikedat2.png";
import bikedat3 from "../../assets/images/bikedata3.png";
import colorCity from "../../assets/images/city-color.png";
import buddha from "../../assets/images/buddha.png";
import kimono from "../../assets/images/kimonogirl.png";
import orange from "../../assets/images/orange.png";
import clock from "../../assets/images/icon clock.png";
import plug from "../../assets/images/iconplug.png";
import star from "../../assets/images/Icon start.png";
import clound from "../../assets/images/icon clock.png";
import user1 from "../../assets/images/user1.png";
import user2 from "../../assets/images/user2.png";
import user3 from "../../assets/images/user3.png";
import user4 from "../../assets/images/user4.png";
import { StaticImageData } from "next/image";

export const bikeData = [
  {
    imageSrc: bikedat1,
    text: "Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.",
  },
  {
    imageSrc: bikedat2,
    text: "Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.",
  },
  {
    imageSrc: bikedat3,
    text: "Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.",
  },
];

export const cardData = [
  {
    image: colorCity,
    heading: "Lorem ipsum dolor sit amet consectetur.",
    subHeading:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
  },
  {
    image: buddha,
    heading: "Lorem ipsum dolor sit amet consectetur.",
    subHeading:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
  },
  {
    image: kimono,
    heading: "Lorem ipsum dolor sit amet consectetur.",
    subHeading:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
  },
  {
    image: orange,
    heading: "Lorem ipsum dolor sit amet consectetur.",
    subHeading:
      "Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.",
  },
];

export const cardDataScroll = [
  {
    icon: clound,
    textData:
      "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    profilePic: user1,
    name: "Jane Cooper",
  },
  {
    icon: star,
    textData:
      "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    profilePic: user2,
    name: "Ralph Edwards",
  },
  {
    icon: plug,
    textData:
      "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    profilePic: user3,
    name: "Courtney Henry",
  },
  {
    icon: clock,
    textData:
      "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    profilePic: user4,
    name: "Cameron Williamson",
  },
];
