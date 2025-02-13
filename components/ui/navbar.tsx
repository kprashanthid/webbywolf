import Logo from "./logo";
import Image from "next/image";
import downarrow from "../../assets/images/Vector 1.png";

const Navbar = () => {
  return (
    <div className="absolute sm:h-24 h-10 w-full flex items-center sm:px-20 px-5 justify-between">
      <Logo />
      <div className="flex sm:gap-10 gap-2">
        <div>
          <p className="flex items-center sm:gap-1.5 sm:px-4 py-2 text-[#1959AC] text-[10px] sm:text-[18px] font-medium">
            Lorem Ipsum
            <Image src={downarrow} alt="down arrow" width={12} height={12} />
          </p>
        </div>
        <div>
          <p className="flex items-center sm:gap-1.5 sm:px-4 py-2 text-[#1959AC] text-[10px] sm:text-[18px] font-medium">
            Lorem Ipsum
            <Image src={downarrow} alt="down arrow" width={12} height={12} />
          </p>
        </div>{" "}
        <div>
          <p className="flex items-center sm:gap-1.5 sm:px-4 py-2 text-[#1959AC] text-[10px] sm:text-[18px] font-medium">
            Lorem Ipsum
            <Image src={downarrow} alt="down arrow" width={12} height={12} />
          </p>
        </div>
      </div>
      <button className="bg-white font-semibold sm:text-[15px] rounded-md text-black sm:w-32 w-16 text-[8px] sm:h-10 h-5 shadow-lg hover:bg-white">
        Sign In
      </button>
    </div>
  );
};

export default Navbar;
