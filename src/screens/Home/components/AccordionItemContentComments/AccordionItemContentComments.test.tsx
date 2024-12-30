import { Accordion, Card } from "@chakra-ui/react";
import {
  beforeEach,
  describe,
  expect,
  it,
  renderWithTheme,
  vi,
} from "@vitest-utils";
import {
  AccordionItemContentComments,
  AccordionItemContentCommentsProps,
} from ".";
import { USER_ID } from "@application/data/environment";

vi.doMock("@/infra/comments", () => ({
  useCommentsQuery: () => ({ data: [], isLoading: false }),
}));

vi.doMock("@/infra/users", () => ({
  useUserQuery: () => ({ data: null, isLoading: false }),
}));

const MOCKED_BASE_PROPS: AccordionItemContentCommentsProps = {
  post: {
    body: "body MOCKED",
    id: 0,
    title: "title MOCKED",
    userId: parseInt(USER_ID, 10),
  },
  isEnabled: true,
};

const renderComponent = (
  props: AccordionItemContentCommentsProps = MOCKED_BASE_PROPS
) =>
  renderWithTheme(
    <Accordion.Root>
      <Accordion.Item value="0">
        <Card.Root>
          <AccordionItemContentComments {...props} />
        </Card.Root>
      </Accordion.Item>
    </Accordion.Root>
  );

describe("Home Component: AccordionItemContentComments", () => {
  beforeEach(() => vi.resetModules());

  it("should render correctly", () => {
    expect(renderComponent()).toMatchSnapshot();
  });

  it("should renderwith comments loading State", () => {
    vi.doMock("@/infra/comments", () => ({
      useCommentsQuery: () => ({ data: [], isLoading: true }),
    }));

    const MOCKED_PROPS: AccordionItemContentCommentsProps = {
      ...MOCKED_BASE_PROPS,
      isEnabled: true,
    };

    expect(renderComponent(MOCKED_PROPS)).toMatchSnapshot();
  });

  it("should renderwith User loading State", () => {
    vi.doMock("@/infra/comments", () => ({
      useCommentsQuery: () => ({ data: [], isLoading: false }),
    }));

    vi.doMock("@/infra/users", () => ({
      useUserQuery: () => ({
        data: null,
        isLoading: true,
      }),
    }));
    expect(renderComponent()).toMatchSnapshot();
  });
});
