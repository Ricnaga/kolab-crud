import ComposeDataProviders from "@/contexts/Compose";
import { ResultHook } from "@/shared/types/global.types";
import {
  beforeEach,
  describe,
  expect,
  it,
  renderHook,
  vi,
} from "@vitest-utils";
import {
  useDialogAddPost,
  UseDialogAddPostReturnType,
} from "../use-dialog-add-post.model";

let resultHook: ResultHook<UseDialogAddPostReturnType>;

describe("Hook: useDialogAddPost", () => {
  beforeEach(() => {
    const { result } = renderHook(
      () => useDialogAddPost({ children: undefined }),
      {
        wrapper: ComposeDataProviders,
      }
    );
    resultHook = result;
  });

  it("should retrieve data", () => {
    expect(resultHook.current.isDisabled).toBeTruthy();
  });

  it("should test functions", () => {
    const spySubmit = vi.spyOn(resultHook.current, "onSubmit");
    const spyHandleClose = vi.spyOn(resultHook.current, "handleClose");

    resultHook.current.onSubmit();
    resultHook.current.handleClose();

    expect(spySubmit).toHaveBeenCalled();
    expect(spyHandleClose).toHaveBeenCalled();
  });
});
