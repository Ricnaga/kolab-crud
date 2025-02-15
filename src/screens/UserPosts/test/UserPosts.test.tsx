import { describe, expect, it, renderWithTheme, vi } from "@vitest-utils";
import { UserPostsView } from "../UserPosts.view";

describe("Page: UserPostsView", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(
      <UserPostsView handleBack={vi.fn()} />
    );

    expect(container).toMatchSnapshot();
  });
});
