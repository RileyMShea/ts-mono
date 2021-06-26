import React from "react";
import ReactDOM from "react-dom";
import { meaningOfLife } from "@packages/foo";
import { Button } from "@packages/components";

ReactDOM.render(
  <React.StrictMode>
    {meaningOfLife}
    <Button />
  </React.StrictMode>,
  document.getElementById("root")
);
