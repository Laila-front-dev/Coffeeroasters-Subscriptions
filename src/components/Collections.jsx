import { collections } from "../data";

function Collections() {
  const listCollections = collections.map((collection) => (
    <div key={collection.id} className="collection">
      <img
        src={"./assets/images/home/desktop/" + collection.imageId + ".png"}
        alt={collection.name}
      />
      <div className="flow">
        <h3 className="heading__3">{collection.name}</h3>
        <p data-type="wide">{collection.description}</p>
      </div>
    </div>
  ));

  return <>{listCollections}</>;
}

export default Collections;
