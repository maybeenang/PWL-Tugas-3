import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("renders contact links", () => {
    render(<Footer />);
    const contactLinks = screen.getAllByRole("link");
    expect(contactLinks).toHaveLength(4);
  });
});
