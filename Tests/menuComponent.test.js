import React from "react";
import renderer from "react-test-renderer";
import Menu from "../src/components/Menu/index";
test("Menu Component", () => {
  const tree = renderer
    .create(
      <Menu />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});