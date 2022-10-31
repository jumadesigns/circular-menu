import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Circle from "./Circle";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Circle />
  </StrictMode>
);
