import { useState } from "react";

function Icons() {
  const [icons, setIcons] = useState(["facebook", "instagram", "twitter"]);

  return (
    <ul className="d__flex align__center">
      {icons.map((icon, index) => (
        <li key={index} style={{ marginInline: "1rem" }}>
          <a href={"https://www." + icon + ".com/"} target="_blank">
            <img
              src={"./assets/images/shared/desktop/icon-" + icon + ".svg"}
              alt={icon}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Icons;
