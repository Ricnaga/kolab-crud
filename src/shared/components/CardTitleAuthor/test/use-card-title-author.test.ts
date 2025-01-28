import ComposeDataProviders from "@/contexts/Compose";
import { describe, expect, it, renderHook, vi } from "@vitest-utils";
import { UseCardTitleAuthorProps } from "../card-title-author.types";
import {
    AUTHOR_NAME_DEFAULT,
    useCardTitleAuthor,
} from "../use-card-title-author.model";

const PROPS: UseCardTitleAuthorProps = {
  userId: "MOCKED_USER_ID",
  handleNavigate: vi.fn(),
};

describe("Hook: useCardTitleAuthor", () => {
  it("should render correctly", () => {
    const { result } = renderHook(() => useCardTitleAuthor(PROPS), {
      wrapper: ComposeDataProviders,
    });

    expect(result.current.authorName).toBe(AUTHOR_NAME_DEFAULT);
  });
});
