import { fetchData } from "../client/fetch";

describe("fetchData", () => {
  it("should fetch data successfully", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ message: "success" }),
    } as any);

    const result = await fetchData("http://example.com");
    expect(result).toEqual({ message: "success" });
  });

  it("should throw an error on failed fetch", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 404,
    } as any);

    await expect(fetchData("http://example.com")).rejects.toThrow(
      "HTTP error! status: 404"
    );
  });
});
