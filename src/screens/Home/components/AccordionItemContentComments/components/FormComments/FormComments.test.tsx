import {
  beforeEach,
  describe,
  expect,
  it,
  renderWithTheme,
  vi,
} from "@vitest-utils";
import { FormComments } from ".";

describe("Home Component: AccordionItemContentComments", () => {
  beforeEach(() => vi.resetModules());

  it("should render correctly", () => {
    const { container } = renderWithTheme(
      <FormComments
        comment={{
          body: "BODY_MOCKED",
          email: "EMAIL_MOCKED",
          id: 1,
          name: "NAME_MOCKED",
          postId: 1,
        }}
        postId="1"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
