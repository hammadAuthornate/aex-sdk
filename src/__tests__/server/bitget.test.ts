import * as Bitget from "../../server/libraries/bitget";

describe("getBitgetData", () => {
  it("test", async () => {
    const res = await Bitget.getBitgetTicker();
    console.log(res);
  });
});
