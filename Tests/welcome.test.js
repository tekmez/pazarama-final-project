import React from "react";
import { shallow } from "enzyme";
import Welcome from "../src/Pages/Welcome/index";
import renderer from "react-test-renderer";

const wrapper = shallow(<Welcome />)

describe("p", () => {
    it("p", () => {
        expect(wrapper.find("p").text()).toEqual("You can easily create your application form by using the application form I have prepared to use in your job applications.")
    })
    it("h", () => {
        expect(wrapper.find("h1").text()).toEqual("Welcome Application Form")
    })
})

test(" Welcome snap", () => {
  const tree = renderer
    .create(
      <Welcome />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});