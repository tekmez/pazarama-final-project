import React from "react";
import renderer from "react-test-renderer";
import SearchFormPage from "../src/Pages/SearchFormPage/index";
test("Search Form Page Snap", () => {
  const tree = renderer
    .create(
      <SearchFormPage />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});