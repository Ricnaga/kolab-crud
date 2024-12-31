import { USER_ID } from "@application/data/environment";
import { Accordion, Card } from "@chakra-ui/react";
import {
  beforeEach,
  describe,
  expect,
  it,
  RenderResult,
  renderWithTheme,
  vi,
} from "@vitest-utils";
import { AccordionItemContentComments } from ".";

let layout: RenderResult;

describe("Home Component: AccordionItemContentComments", () => {
  beforeEach(() => {
    vi.resetModules();

    const screen = renderWithTheme(
      <Accordion.Root>
        <Accordion.Item value="0">
          <Card.Root>
            <AccordionItemContentComments
              isEnabled={true}
              post={{
                body: "BODY_MOCKED",
                id: 0,
                title: "title MOCKED",
                userId: parseInt(USER_ID, 10),
              }}
            />
          </Card.Root>
        </Accordion.Item>
      </Accordion.Root>
    );

    layout = screen;
  });

  it("should render correctly", () => {
    vi.doMock("@/infra/comments", () => ({
      useCommentsQuery: () => ({ data: [], isLoading: false }),
    }));

    vi.doMock("@/infra/users", () => ({
      useUserQuery: () => ({ data: null, isLoading: false }),
    }));

    expect(layout).toMatchSnapshot();
  });
  
});
