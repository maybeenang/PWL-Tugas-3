import { render } from "@testing-library/react";
import ContactPage from "./ContactPage";

describe("ContactPage", () => {
  it("renders the contact page", () => {
    const { getByText } = render(<ContactPage />);
    const headingElement = getByText(/Let's get in touch with me/i);
    expect(headingElement).toBeInTheDocument();
  });

  it("renders the contact form", () => {
    const { getByLabelText } = render(<ContactPage />);
    const nameInput = getByLabelText(/Name/i);
    expect(nameInput).toBeInTheDocument();

    const emailInput = getByLabelText(/Email/i);
    expect(emailInput).toBeInTheDocument();

    const messageInput = getByLabelText(/Message/i);
    expect(messageInput).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    const { getByRole } = render(<ContactPage />);
    const submitButton = getByRole("button", { name: /Send/i });
    expect(submitButton).toBeInTheDocument();
  });
});
