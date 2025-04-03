import * as Bitget from "../../server/libraries/bybit";

describe("getBybitData", () => {
  it("test", async () => {
    const res = await Bitget.getBybitTicker();
    console.log(res.result);
  });
});
