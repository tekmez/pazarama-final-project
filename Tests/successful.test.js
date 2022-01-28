import React from "react";
import renderer from "react-test-renderer";
import SuccessfulPage from "../src/Pages/SuccessfulPage/index";
test(" without data", () => {
  const tree = renderer
    .create(
      <SuccessfulPage />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});