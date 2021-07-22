import { toLower } from "./utils";

describe("utils", () => {
  test("toLower", () => {
    expect(toLower("Abc")).toBe("abc");
  });
});
