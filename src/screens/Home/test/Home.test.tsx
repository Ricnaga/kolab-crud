import { describe, expect, it, renderWithTheme } from "@vitest-utils";
import { HomeView } from "../Home.view";

describe("Page: Home", () => {
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
