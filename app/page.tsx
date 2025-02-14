import Navbar from "@/components/ui/navbar";
import {
  SectionFive,
  SectionFour,
  SectionOne,
  SectionSix,
  SectionThree,
  SectionTwo,
  SectionSeven,
  SectionEighth,
  SectionNineth,
  SectionTenth,
} from "./landingSub";

export default function Home() {
  return (
    <div className="bg-white h-full">
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
      <div className="sm:h-40 h-11"></div>
      <SectionSeven />
      <div className="sm:h-40 h-11"></div>
      <SectionEighth />
      <div className="sm:h-44 h-11"></div>
      <SectionNineth />
      <div className="sm:h-48 h-16"></div>
      <SectionTenth />
      <div className="sm:h-48 h-16"></div>
    </div>
  );
}
