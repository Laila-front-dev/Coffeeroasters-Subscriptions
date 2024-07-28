// import ServicesCard from "./ServicesCard";
import { ServicesCard } from "./Cards";
function Services() {
  const heading = "Why choose us?";
  const title =
    "A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.";
  return (
    <>
      <div className="services__datails | bg-primary-800 flow">
        <h2 className="heading__2">{heading}</h2>
        <p>{title}</p>
      </div>
      <div className="services__content d__grid gap">
        <ServicesCard />
      </div>
    </>
  );
}

export default Services;
