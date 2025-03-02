import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Theme } from "@radix-ui/themes";
import { App } from "./App";
import "@radix-ui/themes/styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Theme
      accentColor="jade"
      grayColor="slate"
      radius="small"
      appearance="dark"
      panelBackground="translucent">
      <App />
    </Theme>
  </StrictMode>
);
