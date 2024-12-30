import { describe, expect, it, renderWithTheme, vi } from "@vitest-utils";
import Home from ".";

vi.doMock("./components/AccordionItemContentComments", () => vi.fn());

describe("Page: Home", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<Home />);

    expect(container).toMatchSnapshot();
  });

  it("should render loading state correctly", () => {
    vi.doMock("@/infra/posts", () => ({
      usePostsQuery: () => ({
        data: [],
        isLoading: true,
      }),
    }));

    const { container } = renderWithTheme(<Home />);

    expect(container).toMatchSnapshot();
  });
});
