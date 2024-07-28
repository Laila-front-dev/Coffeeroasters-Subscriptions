import { servicesCards, servicesWorks } from "../data";
import { Button } from "./Button";

export function ServicesCard() {
  const cards = servicesCards.map((servicesCard) => (
    <div key={servicesCard.id} className="services__card | bg-accent-600">
      <img
        src={"./assets/images/home/desktop/" + servicesCard.imageId + ".svg"}
        alt={servicesCard.name}
      />
      <div className="flow">
        <h3 className="heading__3">{servicesCard.name}</h3>
        <p data-type="secondary">{servicesCard.description}</p>
      </div>
    </div>
  ));
  return <>{cards}</>;
}

export function ServicesWork() {
  const cards = servicesWorks.map((servicesWork, index) => (
    <div key={servicesWork.id} className="flow">
      <span
        className="clr-accent-100"
        style={{
          fontFamily: '"Fraunces", "serif"',
          fontWeight: "900",
          fontSize: "4.5rem",
          paddingBlockEnd: "2rem",
        }}
      >
        0{index + 1}
      </span>
      <h3 className="heading__3">{servicesWork.name}</h3>
      <p data-type="wide">{servicesWork.description}</p>
    </div>
  ));
  return (
    <>
      <div className="work__card d__grid gap__4">{cards}</div>
      <>
        <Button name="Create your plan" />
      </>
    </>
  );
}
