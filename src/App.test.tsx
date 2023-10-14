import { render, screen } from "@testing-library/react";
import userevent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("should home page", () => {
    render(<App />);
    const titleElement = screen.getByText(/Muhammad Elang Permadani/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("should render the logo and navigation links", () => {
    render(<App />);
    const logo = screen.getByText("Eng.");
    expect(logo).toBeInTheDocument();

    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByText("About");
    expect(aboutLink).toBeInTheDocument();

    const contactLink = screen.getByText("Contact");
    expect(contactLink).toBeInTheDocument();
  });

  it("should render the about page", async () => {
    render(<App />);
    const aboutLink = screen.getByText("About");
    await userevent.click(aboutLink);
    const headingElement = screen.getByText(/About me/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("should render the contact page", async () => {
    render(<App />);
    const contactLink = screen.getByText("Contact");
    await userevent.click(contactLink);
    const headingElement = screen.getByText(/Let's get in touch with me/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("should render the contact form", async () => {
    render(<App />);
    const contactLink = screen.getByText("Contact");
    await userevent.click(contactLink);
    const nameInput = screen.getByLabelText(/Name/i);
    expect(nameInput).toBeInTheDocument();

    const emailInput = screen.getByLabelText(/Email/i);
    expect(emailInput).toBeInTheDocument();

    const messageInput = screen.getByLabelText(/Message/i);
    expect(messageInput).toBeInTheDocument();
  });

  it("should render the submit button", async () => {
    render(<App />);
    const contactLink = screen.getByText("Contact");
    await userevent.click(contactLink);
    const submitButton = screen.getByRole("button", { name: /Send/i });
    expect(submitButton).toBeInTheDocument();
  });
});
