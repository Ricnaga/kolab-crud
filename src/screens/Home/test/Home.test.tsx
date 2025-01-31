import { describe, expect, it, renderWithTheme, vi } from "@vitest-utils";
import { HomeView } from "../Home.view";

vi.doMock("./components/CardPost", () => ({
  __esModule: true,
  CardPost: vi.fn(() => <div>Mocked CardPost Component</div>),
}));

vi.doMock("./components/ButtonAddPost", () => ({
  __esModule: true,
  ButtonAddPost: vi.fn(() => <div>Mocked ButtonAddPost Component</div>),
}));

describe("Page: HomeView", () => {
  it("should render Loading state correctly", () => {
    const { container } = renderWithTheme(
      <HomeView data={[]} isLoading={true} />
    );

    expect(container).toMatchSnapshot();
  });

  it("should render correctly", () => {
    const { container } = renderWithTheme(
      <HomeView data={[]} isLoading={false} />
    );

    expect(container).toMatchSnapshot();
  });
});
