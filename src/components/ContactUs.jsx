import { contacts } from "../data";

function ContactUs() {
  const contactUs = contacts.map((contact) => (
    <ul key={contact.id}>
      <li>
        <img
          src={"./assets/images/about/desktop/" + contact.imageId + ".svg"}
          alt={contact.country}
        />
      </li>
      <li>{contact.country}</li>
      <ol role="list" className="adresse__details">
        <li>{contact.adresse}</li>
        <li>{contact.city}</li>
        <li>{contact.district}</li>
        <li>{contact.phone}</li>
      </ol>
    </ul>
  ));
  return (
    <div className="d__grid grid__template__column__three gap">{contactUs}</div>
  );
}

export default ContactUs;
