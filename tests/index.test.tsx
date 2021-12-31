import Home from "../pages/index";
import { render } from "@testing-library/react";

describe("test home page", () => {
  it("snap shot", () => {
    const dom = render(<Home />);

    expect(dom).toMatchSnapshot();
  });
});
