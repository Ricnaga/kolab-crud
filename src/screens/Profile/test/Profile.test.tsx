import { describe, expect, it, renderWithTheme } from "@vitest-utils";
import { ProfileView } from "../Profile.view";

describe("Page: ProfileView", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<ProfileView />);

    expect(container).toMatchSnapshot();
  });
});
