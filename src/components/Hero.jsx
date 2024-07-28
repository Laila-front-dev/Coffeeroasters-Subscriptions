import { Button } from "./Button";

function Hero() {
  const heading = "Great coffee made simple.";
  const title =
    "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.";
  return (
    <div className="flow">
      <h1 className="heading__1">{heading}</h1>
      <p>{title}</p>
      <Button name="Create your plan" />
    </div>
  );
}

export function HeroAbout() {
  const heading = "About Us";
  const title =
    "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.";
  return (
    <div className="flow">
      <h1 className="heading__1">{heading}</h1>
      <p>{title}</p>
    </div>
  );
}

export function HeroCreatePlan() {
  const heading = "Create a plan";
  const title =
    "Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.";
  return (
    <div className="flow">
      <h1 className="heading__1">{heading}</h1>
      <p>{title}</p>
    </div>
  );
}

export default Hero;
