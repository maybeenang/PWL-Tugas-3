import { render } from "@testing-library/react";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should render the home page", () => {
    const { getByText } = render(<HomePage />);
    const titleElement = getByText(/Muhammad Elang Permadani/i);
    expect(titleElement).toBeInTheDocument();
  });
});
