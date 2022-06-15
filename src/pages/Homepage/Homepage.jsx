import { Carosule } from "../../components/Carosule/Carosule";
import { Contact } from "../../components/Contact/Contact";
import { Explanation } from "../../components/Explanation/Explanation";
import { Hero } from "../../components/Hero/Hero";

export const Homepage = () => {
  return (
    <>
      <Carosule />
      <Explanation />
      <Hero />
      <Contact />
    </>
  );
};
