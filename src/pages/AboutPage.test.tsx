import { render } from "@testing-library/react";
import AboutPage from "./AboutPage";

describe("AboutPage", () => {
  it("renders the about page", () => {
    const { getByText } = render(<AboutPage />);
    const headingElement = getByText(/About me/i);
    expect(headingElement).toBeInTheDocument();
  });
});
