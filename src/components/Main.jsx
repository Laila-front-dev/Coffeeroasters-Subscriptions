import Hero from "./Hero";
import Collections from "./Collections";
import Services from "./Services";
import Works from "./Works";
import { HeroAbout, HeroCreatePlan } from "./Hero";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Questions from "./Questions";

function Main() {
  return (
    <main>
      <section className="hero__section container">
        <Hero />
      </section>
      <section className="collections__section container | d__grid grid__template__column justify__items__center gap">
        <Collections />
      </section>
      <section className="services__section container">
        <Services />
      </section>
      <section className="services__work container">
        <Works />
      </section>
    </main>
  );
}

export function MainAbout() {
  return (
    <main>
      <section className=" hero__section hero__about container">
        <HeroAbout />
      </section>
      <section className="about__us container">
        <AboutUs />
      </section>
      <section className="section__contact | container">
        <h2 className="heading__2 clr-primary-400">Our headquarters</h2>
        <ContactUs />
      </section>
    </main>
  );
}

export function MainCreatePlane() {
  return (
    <main style={{ position: "relative" }}>
      <section className="hero__section hero__create__plane container">
        <HeroCreatePlan />
      </section>
      <section className="services__work plan__work container">
        <Works />
      </section>
      <section className="container section__question">
        <Questions />
      </section>
    </main>
  );
}

export default Main;
