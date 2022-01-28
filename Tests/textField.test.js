import React from "react";
import renderer from "react-test-renderer";
import TextField from "../src/components/TextField/index";
test("Text Field Component", () => {
  const tree = renderer
    .create(
      <TextField user={{type: "text", name: "Test", value: "value", placeholder: "holder", className: "classname", onChange: (()=>{}), onKeyPress: (()=>{}) }} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});