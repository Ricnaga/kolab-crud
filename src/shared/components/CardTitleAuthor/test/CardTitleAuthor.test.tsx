import { CardRoot } from "@chakra-ui/react";
import { describe, expect, it, renderWithTheme, vi } from "@vitest-utils";
import { CardTitleAuthorViewProps } from "../card-title-author.types";
import { CardTitleAuthorView } from "../CardTitleAuthor.view";

const PROPS: CardTitleAuthorViewProps = {
  authorName: "MOCKED_AUTHOR_NAME",
  handleNavigate: vi.fn(),
  isLoading: false,
};

describe("Component: CardTitleAuthorView", () => {
  it("should render Loading state correctly", () => {
    const renderProps: CardTitleAuthorViewProps = { ...PROPS, isLoading: true };

    const { container } = renderWithTheme(
      <CardRoot>
        <CardTitleAuthorView {...renderProps} />
      </CardRoot>
    );

    expect(container).toMatchSnapshot();
  });

  it("should render correctly", () => {
    const { container } = renderWithTheme(
      <CardRoot>
        <CardTitleAuthorView {...PROPS} />
      </CardRoot>
    );

    expect(container).toMatchSnapshot();
  });
});
