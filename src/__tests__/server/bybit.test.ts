import * as Bitget from "../../server/libraries/bybit";

describe("getBybitData", () => {
  it("test", async () => {
    const res = await Bitget.getBybitTicker("BTCUSDT");
    console.log(res.result);
  });
});
