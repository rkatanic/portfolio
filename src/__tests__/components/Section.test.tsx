import { render } from "@testing-library/react";
import Section from "../../components/Section";

describe("Section", (): void => {
  it("should render", (): void => {
    const { baseElement } = render(
      <Section id="section-test">
        <div>test page</div>
      </Section>
    );

    expect(baseElement).toMatchSnapshot();
  });
});
