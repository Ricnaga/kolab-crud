import { describe, expect, it, renderWithTheme } from "@vitest-utils";
import { CardSkeleton } from ".";

describe("Component: CardSkeleton", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<CardSkeleton />);

    expect(container).toMatchSnapshot();
  });
});
