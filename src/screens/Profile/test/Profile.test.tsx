import { describe, expect, it, renderWithTheme } from "@vitest-utils";
import { ProfileView } from "../Profile.view";

describe("Page: Profile", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<ProfileView />);

    expect(container).toMatchSnapshot();
  });
});
