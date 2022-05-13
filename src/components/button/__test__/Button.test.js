import React from "react";
import { createRoot } from "react-dom/client";
import Button from "../Button";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

//making sure that the component renders as it is
it("renders without crashing", () => {
  //callback function to write the test
  const div = document.createElement("div");
  const root = createRoot(div);
  act(() => {
    root.render(<Button></Button>);
  });
});

it("renders button correctly", () => {
  //this is different render from the one in the ReactDom library
  const { getByTestId } = render(<Button label="Click Me"></Button>);

  expect(getByTestId("button")).toHaveTextContent("Click Me");
});
