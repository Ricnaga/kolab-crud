import { describe, expect, it, renderWithTheme } from "@vitest-utils";
import { ButtonView } from "../Button.view";

describe("Component: CardTitleAuthorView", () => {
  it("should render Loading state correctly", () => {
    const { container } = renderWithTheme(
      <ButtonView isDisabled={false} isLoading={true} />
    );

    expect(container).toMatchSnapshot();
  });

  it("should render correctly", () => {
    const { container } = renderWithTheme(<ButtonView isDisabled={false} />);

    expect(container).toMatchSnapshot();
  });
});
