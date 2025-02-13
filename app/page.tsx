import Navbar from "@/components/ui/navbar";
import {
  SectionFive,
  SectionFour,
  SectionOne,
  SectionSix,
  SectionThree,
  SectionTwo,
} from "./landingSub";

export default function Home() {
  return (
    <div className="bg-gray-50 h-full">
      <Navbar />
      <SectionOne />
      <div className="sm:h-20 h-10"></div>
      <SectionTwo />
      <div className="sm:h-24 h-7"></div>
      <SectionThree />
      <div className="sm:h-40 h-11"></div>
      <SectionFour />
      <div className="sm:h-40 h-11"></div>
      <SectionFive />
      <div className="sm:h-40 h-11"></div>
      <SectionSix />
    </div>
  );
}
