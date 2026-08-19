import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MehfilRadio from "./MehfilRadio";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MehfilRadio />
  </StrictMode>,
);
