import React from "react";
import { shallow } from "enzyme";
import Button from "../src/components/Button/index";

const wrapper = shallow(<Button />)
describe("button component", () => {
    const btn = wrapper.find("button")
    btn.simulate("click")
    it("btn", () => {
        expect(btn).toEqual({})
    })
  
})
