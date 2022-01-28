import React from "react";
import renderer from "react-test-renderer";
import LoginPage from "../src/Pages/LoginPage/index";
test(" LoginPage", () => {
  const tree = renderer
    .create(
      <LoginPage />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});