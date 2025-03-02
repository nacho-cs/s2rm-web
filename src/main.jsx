import { StrictMode, render } from "preact/compat";
import "./index.css";
import { Theme } from "@radix-ui/themes";
import { App } from "./App";
import "@radix-ui/themes/styles.css";

render(
  <StrictMode>
    <Theme
      accentColor="indigo"
      grayColor="slate"
      radius="small"
      appearance="dark"
      panelBackground="translucent">
      <App />
    </Theme>
  </StrictMode>,
  document.getElementById("app")
);
