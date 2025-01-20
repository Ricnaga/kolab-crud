import { describe, expect, it, renderWithTheme } from "@vitest-utils";
import { CardSkeletonView } from "../CardSkeleton.view";

describe("Component: CardSkeleton", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<CardSkeletonView />);

    expect(container).toMatchSnapshot();
  });
});
