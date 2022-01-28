import React from "react";
import renderer from "react-test-renderer";
import Info from "../src/components/UserInfo/index";
test("User Info Component", () => {
  const tree = renderer
    .create(
      <Info user={{firstName: "Deneme", lastName: "Test", age: "25", reason: "reason", address: "address", status: "status", answer: "answer", tc: "IDn"}} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});