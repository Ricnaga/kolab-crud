import { describe, expect, it, renderWithTheme, vi } from "@vitest-utils";
import Profile from ".";

describe("Page: Profile", () => {
  it("should render correctly", () => {
    vi.doMock("@/infra/users", () => ({
      useUserQuery: () => ({ data: null, isLoading: false }),
    }));

    const { container } = renderWithTheme(<Profile />);

    expect(container).toMatchSnapshot();
  });
});
