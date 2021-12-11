import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { send } from "emailjs-com";
import ContactForm from "../../components/contact/ContactForm";

jest.mock("emailjs-com", (): { send: jest.Mock<any, any> } => ({
  send: jest.fn(),
}));

describe("ContactForm", (): void => {
  const OLD_ENV = process.env;
  beforeEach((): void => {
    jest.resetModules();
    process.env = { ...OLD_ENV };
    jest.clearAllMocks();
  });

  afterAll((): void => {
    process.env = OLD_ENV;
  });

  it("should handle sending email", async (): Promise<void> => {
    process.env.REACT_APP_EMAIL_SERVICE_ID = undefined;
    process.env.REACT_APP_EMAIL_TEMPLATE_ID = undefined;
    process.env.REACT_APP_EMAIL_USER_ID = undefined;
    (send as jest.Mock).mockResolvedValue("success");
    const { getByLabelText, getByText } = render(<ContactForm />);

    fireEvent.change(getByLabelText("name"), {
      target: { value: "test name" },
    });
    fireEvent.change(getByLabelText("email"), {
      target: { value: "test@email.com" },
    });
    fireEvent.change(getByLabelText("subject"), {
      target: { value: "test subject" },
    });
    fireEvent.change(getByLabelText("message"), {
      target: { value: "This is just a testing message" },
    });

    fireEvent.click(getByText("Send email"));

    await waitFor((): void => {
      expect(send).toHaveBeenNthCalledWith(
        1,
        "email_service_id",
        "email_template_id",
        {
          email: "test@email.com",
          message: "This is just a testing message",
          name: "test name",
          subject: "test subject",
        },
        "email_user_id"
      );
    });
  });

  it("should handle email sending error", async (): Promise<void> => {
    (send as jest.Mock).mockRejectedValue("error");
    const { getByLabelText, getByText, queryByText } = render(<ContactForm />);

    fireEvent.change(getByLabelText("name"), {
      target: { value: "test name" },
    });
    fireEvent.change(getByLabelText("email"), {
      target: { value: "test@email.com" },
    });
    fireEvent.change(getByLabelText("subject"), {
      target: { value: "test subject" },
    });
    fireEvent.change(getByLabelText("message"), {
      target: { value: "This is just a testing message" },
    });

    fireEvent.click(getByText("Send email"));

    await waitFor((): void => {
      expect(getByText("Oh no, something went wrong.")).toBeInTheDocument();

      fireEvent.click(getByText("close.svg"));
      expect(
        queryByText("Oh no, something went wrong.")
      ).not.toBeInTheDocument();
    });
  });

  it("should not send email when form is empty", async (): Promise<void> => {
    const { getByText } = render(<ContactForm />);

    await act(async (): Promise<void> => {
      fireEvent.click(getByText("Send email"));
    });

    expect(send).not.toHaveBeenCalled();
  });
});
