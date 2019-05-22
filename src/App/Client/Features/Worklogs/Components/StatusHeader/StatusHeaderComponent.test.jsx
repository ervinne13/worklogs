import React from "react";
import { create } from "react-test-renderer";
import StatusHeaderComponent from "../StatusHeaderComponent";

describe("Status header component", () => {
    test("it matches the snapshot", () => {
        const component = create(<StatusHeaderComponent />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});