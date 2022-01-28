import React from "react";
import renderer from "react-test-renderer";
import AdminListInfo from "../src/components/AdminListInfo/index";
test(" without data", () => {
  const tree = renderer
    .create(
      <AdminListInfo />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test(" with data", () => {
    const tree = renderer
      .create(
        <AdminListInfo
          user={{
            firstName: "zeus",
            lastName: "poseidon",
            age: "25",
            ıdn: "123",
            reason: "sad",
            address: "dasd",
            date: "2022",
            status: "pending",
            ticketNumber: "1515",
          }}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
