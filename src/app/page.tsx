import Hero from "@/components/Heor";
import Advisor from "@/components/Advisor";
import AboutUs from "@/components/AboutUs";
import NextWebsite from "@/components/NextWebsite";
import Team from "@/components/Team";
import Services from "@/components/Services";
import GreatThing from "@/components/GreatThing";
import Subscribe from "@/components/Subscribe";


const page = () => {
  return (
    <div>
      <Hero/>
      <Advisor/>
        <AboutUs/>
        <NextWebsite/>
        <Team/>
        <div className="spacener"></div>
        <Services/>
        <GreatThing/>
        <Subscribe/>
    </div>
  );
};

export default page;