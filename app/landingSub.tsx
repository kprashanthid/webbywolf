import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import BikerImage from ".././assets/images/Graphic-Right.png";
import { Button } from "@/components/ui/button";
import { Check, Phone } from "lucide-react";
import { bikeData, cardData, cardDataScroll } from "./localdata/locadata";
import BikeCard from "@/components/ui/bikecard";
import multiplebikes from ".././assets/images/multipleBikes.png";
import ImageWithDetails from "@/components/ui/image-withdetail";
import people from ".././assets/images/people.png";
import relaxation from ".././assets/images/relaxationtwelve_Create.png";
import Logo from "@/components/ui/logo";
import hero from "../assets/images/Hero.png";
import honda from "../assets/images/honda.png";
import bajaj from "../assets/images/Bajaj-Auto-Logo 1.png";
import tvs from "../assets/images/tvs.png";
import royal from "../assets/images/toyal.png";
import yamaha from "../assets/images/yamaha.png";
import ktm from "../assets/images/KTM-Logo.svg 1.png";
import aether from "../assets/images/AtherLogo 1.png";
import ola from "../assets/images/Ola-Electric 1.png";
import revolt from "../assets/images/rev.png";
import tork from "../assets/images/tork.png";
import ultra from "../assets/images/Ultraviolette_Logo 1.png";
import DetailCard from "@/components/ui/details-card";
import piano from "../assets/images/piano.png";
import play from "../assets/images/Playstore.png";
import singlebike from "../assets/images/singlebike.png";
import fourBikes from "../assets/images/fourbikes.png";
import bikesunrise from "../assets/images/3bikesunrise.png";
import halfthree from "../assets/images/threebikehalf.png";
import half from "../assets/images/half.png";
import multiple from "../assets/images/multiplebike.png";
import twobike from "../assets/images/twobikers.png";
import threebikes from "../assets/images/3bikes.png";
import twomotorcycle from "../assets/images/teomotorcycle.png";
import UserCard from "@/components/ui/usercard";
import arrowright from "../assets/images/buttonarrowright.png";
import arrowleft from "../assets/images/Buttonarrowleft.png";

export const SectionOne = () => {
  return (
    <div className="w-full flex flex-row">
      <div className="w-[52%] relative sm:pl-16 sm:top-72 top-16 flex sm:gap-5 gap-2 pl-5 flex-col">
        <p className="sm:text-[64px] text-[20px] font-bold leading-6 sm:leading-[64px]">
          Lorem ipsum dolor
          <br /> sit amet
        </p>
        <Typography
          variant="subheading"
          className="font-regular sm:text-[18px] text-[7px]"
        >
          Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis
          elit
          <br className="hidden sm:block" />
          sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi
          libero
          <br className="hidden sm:block" />
          imperdiet neque. Justo suspendisse tristique posuere quis eget
          viverra.
          <br className="hidden sm:block" />
          Nunc euismod ultrices etiam nulla habitasse.{" "}
        </Typography>

        <div className="flex flex-row gap-2">
          <input type="text" className="border sm:h-12 h-5 rounded-sm w-1/2" />
          <Button
            showIcon
            className="sm:w-32 sm:h-12 w-14 h-5 px-2 rounded-md bg-customBlue text-white text-[6px] sm:text-[15px] sm:font-semibold"
          >
            Submit
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <div className="sm:h-8 sm:w-8 h-3 w-3 rounded-full bg-customBlue flex justify-center items-center">
            <Check className="text-white sm:h-6 sm:w-6 h-1.5 w-1.5" />
          </div>
          <p className="sm:text-[15px] text-[8px] font-medium leading-6">
            No credit card required!
          </p>
        </div>
      </div>
      {/* right div */}
      <div className="w-[48%]">
        <Image
          src={BikerImage}
          alt="down arrow"
          className="w-full object-cover"
        />
        <div className="w-full h-2 shadow-2xl bg-gray-100"></div>
      </div>
    </div>
  );
};

export const SectionTwo = () => {
  return (
    <div className="w-full">
      {/* top div */}
      <div className="border-[1px] border-[#D4D4D4] pt-10 sm:ml-10 ml-5 shadow-2xl">
        <div className="w-full sm:pl-10 pl-5 flex flex-row">
          {/* top left */}
          <div className="w-1/2">
            <div className="flex flex-col sm:gap-5 gap-2">
              <p className="sm:text-[24px] text-[12px] font-semibold text-customBlue sm:leading-8">
                Lorem ipsum dolor sit
              </p>
              <p className="font-bold sm:text-[42px] text-[18px] sm:leading-[50px] leading-5">
                Lorem ipsum <br /> dolor sit amet
              </p>
              <p className="sm:text-[22px] text-[7px] font-regular sm:leading-9">
                Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
                facilisis donec dui. Mi porttitor ut aliquam mattis maecenas
                eget integer in nam. Non nisl iaculis at felis aliquet.
                Hendrerit tellus at purus lectus.
              </p>
            </div>
            <div className="sm:h-14 h-5"></div>
            <div className="flex flex-col sm:gap-6 gap-2">
              {bikeData.map((bike, index) => (
                <BikeCard
                  key={index}
                  imageSrc={bike.imageSrc}
                  text={bike.text}
                />
              ))}
            </div>
          </div>
          <Image src={multiplebikes} className="w-1/2 mt-3" alt="" />
        </div>
        {/* bottom div */}
        <div className="flex flex-col gap-12 mt-5">
          <div className="flex flex-row gap-5 pl-10">
            <Button
              showIcon
              className="sm:w-44 sm:h-12 w-20 h-5 rounded-md bg-customBlue text-white text-[8px] sm:text-[15px] font-semibold"
            >
              Loerum Ipsum
            </Button>
            <div className="flex flex-row items-center text-customBlue sm:gap-3 gap-1">
              <Phone className="text-customBlue sm:h-6 sm:w-6 h-2 w-2" />
              <span className="sm:text-[16px] text-[6px] font-semibold">
                123456789
              </span>
            </div>
          </div>

          <div className="sm:h-5 h-2 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] w-full"></div>
        </div>
      </div>
    </div>
  );
};

export const SectionThree = () => {
  return (
    <div className="sm:pl-20 pl-5 w-full">
      {/* top */}
      <div className="w-full flex flex-row sm:mt-28 mt-8 sm:gap-16 gap-5">
        {/* left div */}
        <div className="w-1/2 flex flex-col sm:gap-8 gap-3">
          <div className="flex flex-col sm:gap-5 gap-2">
            <p className="sm:text-[24px] text-[12px] font-semibold text-customBlue sm:leading-8">
              Lorem ipsum dolor sit amet
            </p>
            <p className="font-bold sm:text-[42px] text-[16px] sm:leading-[50px] leading-5">
              Lorem ipsum dolor sit
              <br className="hidden sm:block" /> amet consectetur. Eu{" "}
              <br className="hidden sm:block" />
              elit.
            </p>
            <p className="sm:text-[22px] text-[7px] font-regular sm:leading-9">
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam
              leo eleifend condimentum in vitae faucibus. Amet massa malesuada
              sit pretium. Donec pharetra erat lacus suspendisse ornare.
            </p>
          </div>
          <div className="flex flex-col sm:gap-10 gap-2">
            <ImageWithDetails />
            <ImageWithDetails />
            <ImageWithDetails />
          </div>
        </div>
        <Image
          src={people}
          alt="loading"
          className="sm:w-[650px] sm:h-[660px] sm:mt-16 mt-10 w-[180px] h-[320px]"
        />
      </div>
      {/* bottom */}
      <div className="sm:pl-12 pl-4">
        <div className="sm:h-5 h-2 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] w-full sm:mt-20 mt-5"></div>
      </div>
    </div>
  );
};

export const SectionFour = () => {
  return (
    <div className="flex flex-col sm:gap-40 gap-12">
      {/* Top div */}
      <div className="relative">
        <Image
          src={relaxation}
          className="sm:h-[652px] h-[280px]"
          alt="relaxation image"
        />
        <div className="absolute top-0 flex flex-col items-center gap-2  w-full">
          <div className="flex  justify-start w-full sm:mt-11 mt-6  sm:pl-20 pl-7">
            <Logo />
          </div>
          <div className="w-full flex flex-col sm:gap-7 gap-2 items-center">
            <Typography
              variant="heading"
              className="text-center sm:leading-[50px] text-white"
            >
              Lorem ipsum dolor sit amet consectetur. Quis <br /> adipiscing
              purus egestas aliquam viverra mi.
            </Typography>
            <Typography
              variant="subheading"
              className=" text-white text-center"
            >
              Lorem ipsum dolor sit amet consectetur. Mattis justo euismod
              volutpat vestibulum <br /> nisi at ac risus amet. Mi accumsan
              sagittis justo pellentesque id sed. Id tellus id <br />
              luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl
              porta massa diam <br />
              condimentum nulla quam.
            </Typography>
            <Typography
              variant="subheading"
              className=" text-white text-center"
            >
              Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec
              condimentum <br />
              ultrices non. Ornare semper in tincidunt pellentesque cras mauris
              in vitae. At viverra <br /> quis eu malesuada vel et porttitor.
              Nulla luctus quam lacus lacus non at. Tincidunt <br />
              morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt
              cursus vitae leo.
            </Typography>
          </div>
        </div>
      </div>
      {/* bottom div */}
      <div className="flex flex-col sm:gap-28 gap-10">
        <Typography variant="heading" className="text-center sm:leading-[50px]">
          Lorem ipsum dolor sit amet <br /> consectetur. Commodo leo amet.
        </Typography>
        {/* image div*/}
        <div className="flex flex-col sm:gap-12 gap-4 items-center">
          <div className="flex flex-row sm:gap-32 gap-8 items-center">
            <Image
              src={hero}
              alt="loading"
              className="sm:h-24 h-8 sm:w-24 w-8"
            />
            <Image
              src={honda}
              alt="loading"
              className="sm:h-24 h-8 sm:w-32 w-9"
            />
            <Image
              src={bajaj}
              alt="loading"
              className="sm:h-24 h-8 sm:w-40 w-12"
            />
            <Image
              src={tvs}
              alt="loading"
              className="sm:h-16 h-4 sm:w-52 w-16"
            />
          </div>
          <div className="flex flex-row sm:gap-32 gap-8 items-center">
            <Image
              src={royal}
              alt="loading"
              className="sm:h-16 h-4 sm:w-60 w-20"
            />
            <Image
              src={yamaha}
              alt="loading"
              className="sm:h-16 h-4 sm:w-44 w-16"
            />
            <Image
              src={ktm}
              alt="loading"
              className="sm:h-14 h-5 sm:w-36 w-12"
            />
            <Image
              src={aether}
              alt="loading"
              className="sm:h-20 h-5 sm:w-52 w-16"
            />
          </div>
          <div className="flex flex-row sm:gap-32 gap-8 items-center">
            <Image
              src={ola}
              alt="loading"
              className="sm:h-24 h-8 sm:w-48 w-16"
            />
            <Image
              src={revolt}
              alt="loading"
              className="sm:h-20 h-5 sm:w-44 w-14"
            />
            <Image
              src={ultra}
              alt="loading"
              className="sm:h-20 h-5 sm:w-72 w-24"
            />
            <Image
              src={tork}
              alt="loading"
              className="sm:h-36 h-12 sm:w-24 w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const SectionFive = () => {
  return (
    <div className="w-full flex flex-col sm:px-20 px-5 sm:gap-20 gap-5">
      {/* top div */}
      <div className="w-1/2">
        <div className="flex flex-col sm:gap-5 gap-2">
          <p className="sm:text-[24px] text-[12px] font-semibold text-customBlue sm:leading-8">
            Lorem ipsum dolor sit amet
          </p>
          <p className="font-bold sm:text-[42px] text-[16px] sm:leading-[50px] leading-5">
            LOREM IPSUM dolor sit
          </p>
          <p className="sm:text-[22px] text-[7px] font-regular sm:leading-9">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis
            facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget
            integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus
            at purus lectus.
          </p>
        </div>
      </div>
      {/* bottomdiv */}
      <div className="grid grid-cols-2 sm:gap-16 gap-6 sm:pl-36">
        {cardData.map((data) => {
          return (
            <DetailCard
              key={data.heading}
              image={data.image}
              heading={data.heading}
              subHeading={data.subHeading}
            />
          );
        })}
      </div>
    </div>
  );
};

export const SectionSix = () => {
  return (
    <div>
      <div className="relative">
        <Image
          src={piano}
          className="sm:h-[652px] h-[280px]"
          alt="relaxation image"
        />
        <div className="absolute top-0 flex flex-col items-center gap-2  w-full">
          <div className="flex  justify-start w-full sm:mt-11 mt-6  sm:pl-20 pl-7">
            <Logo />
          </div>
          <div className="w-full flex flex-col sm:gap-7 gap-2 items-center justify-center sm:mt-16 mt-6">
            <Typography
              variant="heading"
              className="text-center sm:leading-[50px] text-white"
            >
              dolor sit amet consectetur. Quis <br /> adipiscing purus egestas
              aliquam viverra
              <br /> mi. dolor sit amet consectetur. Quis <br /> adipiscing
            </Typography>
          </div>
        </div>
      </div>
      {/* bottom div */}
      <div className="sm:h-40 h-11"></div>
      <div className="sm:px-44 px-14">
        <Typography variant="heading" className="text-center">
          REQUEST A QUOTE
        </Typography>
        <form className="sm:mt-32 mt-10">
          <div className="grid grid-cols-2 sm:gap-5 gap-2">
            <div className="flex flex-col sm:gap-5 gap-1.5">
              <span className="sm:text-sm text-[5px] leading-4">Name</span>
              <input
                type="text"
                className="bg-[#F4F4F4] border-[0.5px] w-full sm:-mt-0 -mt-1 hover:bg-[#9F9F9F] sm:h-12 h-4 rounded-sm"
              />
            </div>
            <div className="flex flex-col sm:gap-5 gap-1.5">
              <span className="sm:text-sm text-[5px]  leading-4">E-mail</span>
              <input
                type="email"
                className="bg-[#F4F4F4] border-[0.5px] w-full sm:-mt-0 -mt-1 hover:bg-[#9F9F9F] sm:h-12 h-4 rounded-sm"
              />
            </div>
            <div className="flex flex-col sm:gap-5 gap-1">
              <span className="sm:text-sm text-[5px]  leading-4">
                Phone Number
              </span>
              <input
                type="text"
                className="bg-[#F4F4F4] border-[0.5px] w-full sm:-mt-0 -mt-1 hover:bg-[#9F9F9F] sm:h-12 h-4 rounded-sm"
              />
            </div>
            <div className="flex flex-col sm:gap-5 gap-1.5">
              <span className="sm:text-sm text-[5px] leading-4">
                Time Frame*
              </span>
              <input
                type="text"
                className="bg-[#F4F4F4] border-[0.5px] w-full sm:-mt-0 -mt-1 hover:bg-[#9F9F9F] sm:h-12 h-4 rounded-sm"
              />
            </div>
            <div className="flex flex-col sm:gap-5 gap-1.5">
              <span className="sm:text-sm text-[5px] leading-4">Size</span>
              <input
                type="text"
                className="bg-[#F4F4F4] border-[0.5px] w-full sm:-mt-0 -mt-1 hover:bg-[#9F9F9F] sm:h-12 h-4 rounded-sm"
              />
            </div>
            <div className="flex flex-col sm:gap-5 gap-1.5">
              <span className="sm:text-sm text-[5px] leading-4">Quantity</span>
              <input
                type="text"
                className="bg-[#F4F4F4] border-[0.5px] w-full sm:-mt-0 -mt-1 hover:bg-[#9F9F9F] sm:h-12 h-4 rounded-sm"
              />
            </div>
          </div>
          <div className="flex flex-col sm:gap-5 gap-1.5 sm:mt-5 mt-1.5">
            <span className="sm:text-sm text-[5px] leading-4">
              Please Describe Your Project
            </span>
            <textarea className="sm:h-[229px] h-[75px]  bg-[#F4F4F4] hover:bg-[#9F9F9F]" />
          </div>
        </form>
      </div>
      <div className="flex flex-col sm:gap-10 gap-3.5 items-center sm:mt-10">
        <span className="sm:text-[18px] text-[6px] leading-[60px]">
          By submitting this form you agree to our{" "}
          <span className="border-b-[1px] border-black">Terms of Service</span>
            and 
          <span className="border-b-[1px] border-black">Privacy Policy.</span> 
        </span>
        <Button
          showIcon
          className="sm:h-12 sm:w-44 w-18 h-5 px-2 rounded-md bg-customBlue text-white text-[6px] sm:text-[15px] sm:font-semibold"
        >
          Loerum Ipsum
        </Button>
      </div>
    </div>
  );
};

export const SectionSeven = () => {
  return <Image src={play} alt="loading" />;
};

export const SectionEighth = () => {
  return (
    <div className="w-full flex flex-row sm:px-20 px-5 sm:gap-9 gap-3 bg-[#F1F5F9] sm:pt-20 pt-5">
      <div className="w-1/2">
        <div>
          <div className="flex flex-row ">
            <div className="flex flex-col">
              <p className=" sm:text-[24px] text-[12px] font-semibold text-[#475569] sm:leading-8">
                NO LIMITS
              </p>
              <p className="sm:mt-4 mt-1 font-bold sm:text-[42px] text-[#0F172A]  text-[16px] sm:leading-[50px] leading-5">
                Lorem ipsum dolor sit amet
              </p>
              <p className="sm:mt-9 mt-3 sm:text-[22px] text-[7px] text-[#0F172A] font-regular sm:leading-9">
                Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
                porttitor pharetra tempor quis arcu. Ipsum nullam.
              </p>
              <Button
                showIcon
                className="sm:h-12 sm:mt-9 mt-3 sm:w-44 w-16 h-5 px-2 rounded-md bg-customBlue text-white text-[5px] sm:text-[15px] sm:font-semibold"
              >
                Loerum Ipsum
              </Button>
            </div>
            <Image
              src={threebikes}
              alt="loading"
              className="sm:h-[240px] h-[80px] sm:w-32 w-12 sm:mt-[195px] mt-[75px]"
            />
          </div>
          <div className="flex flex-row justify-between items-end sm:mt-9 mt-5">
            <Image src={twobike} alt="loading" className="sm:w-32 w-12" />
            <Image
              src={multiple}
              alt="loading"
              className=" w-[120px] sm:w-[460px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:gap-8 gap-3 max:w-1/2 w-1/2">
        <div className="flex flex-row sm:gap-8 gap-3 items-end">
          <Image src={singlebike} alt="loading" className="sm:h-52 h-16" />
          <Image
            src={fourBikes}
            alt="loading"
            className="sm:h-64 h-20  w-[100px] sm:w-full"
          />
        </div>
        <Image
          src={bikesunrise}
          alt="loading"
          className="sm:h-[300px] h-[100px] "
        />
        <div className="flex flex-row sm:gap-8 gap-3 items-end">
          <Image
            src={halfthree}
            alt="loading"
            className="sm:h-20 h-7 sm:w-full w-12"
          />
          <Image
            src={half}
            alt="loading"
            className="sm:h-20 h-7 w-[110px] sm:w-[460px]"
          />
        </div>
      </div>
    </div>
  );
};

export const SectionNineth = () => {
  return (
    <div className="w-full  relative  sm:pt-16 pt-5 sm:pr-20 pr-6 bg-[#F8F8F8] ">
      <div className="sm:ml-20 ml-5 flex flex-row jus">
        <div className="w-1/2">
          <Image
            src={twomotorcycle}
            alt="loading"
            className="absolute sm:h-[550px] h-[160px] w-[160px] sm:w-[550px] sm:-mt-24 -mt-9 sm:-ml-20 -ml-5"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <p className=" sm:text-[24px] text-[12px] font-semibold text-customBlue sm:leading-8">
            Lorem ipsum
          </p>
          <p className="sm:mt-4 mt-1 font-bold sm:text-[42px] text-[#0F172A]  text-[16px] sm:leading-[50px] leading-5">
            <span className="text-customBlue"> Lorem </span>ipsum dolor sit{" "}
            <br /> amet consectetur. Enim
            <br /> donec.
          </p>
          <p className="sm:mt-4 mt-1 sm:text-[18px] text-[5px] text-[#0F172A] font-regular sm:leading-9">
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim{" "}
            <br />
            amet non.
          </p>
          <div className="grid grid-cols-2 sm:gap-4 gap-1 sm:mt-12 mt-4">
            <span className="sm:text-xl text-[7px] font-semibold sm:leading-6 leading-2">
              Lorem Ipsum
            </span>
            <span className="sm:text-xl text-[7px] font-semibold sm:leading-6 leading-2">
              Lorem Ipsum
            </span>
            <span className="sm:text-xl text-[7px] font-semibold sm:leading-6 leading-2">
              Lorem Ipsum
            </span>
            <span className="sm:text-xl text-[7px] font-semibold sm:leading-6 leading-2">
              Lorem Ipsum
            </span>
            <span className="sm:text-xl text-[7px] font-semibold sm:leading-6 leading-2">
              Lorem Ipsum
            </span>
            <span className="sm:text-xl text-[7px] font-semibold sm:leading-6 leading-2">
              Lorem Ipsum
            </span>
          </div>
          <Button
            showIcon
            className="sm:h-12 sm:mb-16 mb-6 sm:mt-9 mt-3 sm:w-44 w-16 h-5 px-2 rounded-md bg-customBlue text-white text-[5px] sm:text-[15px] sm:font-semibold"
          >
            Loerum Ipsum
          </Button>
        </div>
      </div>
      <div className="sm:pr-16 pr-6">
        <div className="sm:h-5 h-2 bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] w-full sm:mt-20 mt-5"></div>
      </div>
    </div>
  );
};

export const SectionTenth = () => {
  return (
    <div className="bg-[#155ADA] sm:px-20 px-0 sm:py-20 py-5">
      <div className="flex flex-row items-center justify-between sm:mb:20 mb-5 sm:px-0 px-5">
        <div className="flex flex-col w-[65%]">
          <p className=" sm:text-[24px] text-[12px] font-semibold text-white sm:leading-8">
            Join other Sun harvesters
          </p>
          <p className="sm:mt-4 mt-1 font-bold sm:text-[42px] text-white  text-[16px] sm:leading-[50px] leading-5">
            Lorem ipsum dolor sit amet
          </p>
          <p className="sm:mt-9 mt-3 sm:text-[22px] text-[7px] text-white font-regular sm:leading-9">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae
            porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>
        </div>

        <Button
          showIcon
          className="sm:h-12  sm:w-44 w-16 h-5 text-[#211c1c] px-2 rounded-md bg-white text-[5px] sm:text-[15px] sm:font-semibold"
        >
          Loerum Ipsum
        </Button>
      </div>
      <div>
        <div className="flex overflow-x-auto space-x-4 sm:p-4 p-1">
          {cardDataScroll.map((data) => {
            return (
              <UserCard
                key={data.name}
                text={data.textData}
                profileImage={data.profilePic}
                icon={data.icon}
                name={data.name}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-row sm:mt-20 mt-5 sm:px-0 px-5">
        <Image
          src={arrowright}
          alt="loading"
          className="sm:h-12 sm:w-12 h-6 w-6"
        />
        <Image
          src={arrowleft}
          alt="loading"
          className="sm:h-12 sm:w-12 h-6 w-6"
        />
      </div>
    </div>
  );
};
