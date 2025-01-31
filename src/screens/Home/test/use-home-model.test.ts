import ComposeDataProviders from "@/contexts/Compose";
import { describe, expect, it, renderHook } from "@vitest-utils";
import { useHome } from "../use-home.model";

describe("Hook: useHome", () => {
  it("should retrieve data", () => {
    const { result } = renderHook(() => useHome(), {
      wrapper: ComposeDataProviders,
    });

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.data.length).toBe(0);
  });
});
