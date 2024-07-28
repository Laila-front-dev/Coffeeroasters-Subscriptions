import { abouts } from "../data";

function AboutUs() {
  const aboutsUs = abouts.map((about) => (
    <div
      key={about.id}
      className="d__grid grid__template__column__two text__center"
    >
      <picture className="grid__column ">
        <source
          media="(min-width: 1200px)"
          srcSet={"./assets/images/about/desktop/" + about.imageId + ".jpg"}
        />
        <source
          media="(min-width: 768px)"
          srcSet={"./assets/images/about/tablet/" + about.imageId + ".jpg"}
        />
        <img
          className="border-radius-10"
          src={"./assets/images/about/mobile/" + about.imageId + ".jpg"}
          alt={about.name}
        />
      </picture>
      <div className="about__details |grid__row flow">
        <h2 className="heading__2">{about.name}</h2>
        <p data-type="primary">{about.description}</p>
      </div>
    </div>
  ));
  return <>{aboutsUs}</>;
}

export default AboutUs;
