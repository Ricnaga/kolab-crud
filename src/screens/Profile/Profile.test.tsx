import { describe, expect, it, renderWithTheme } from "@vitest-utils";
import Profile from ".";

describe("Page: Profile", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<Profile />);

    expect(container).toMatchSnapshot();
  });
});
