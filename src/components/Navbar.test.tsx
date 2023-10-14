import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  it("should render the logo and navigation links", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const logo = screen.getByText("Eng.");
    expect(logo).toBeInTheDocument();

    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByText("About");
    expect(aboutLink).toBeInTheDocument();

    const contactLink = screen.getByText("Contact");
    expect(contactLink).toBeInTheDocument();
  });
});
