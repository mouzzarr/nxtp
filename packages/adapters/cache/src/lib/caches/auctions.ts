import { BidStatus, StoredBid, getNtpTimeSeconds, Bid } from "@connext/nxtp-utils";

import { StoreChannel } from "../entities";
import { Cache } from "./cache";

export class AuctionsCache extends Cache {
  private readonly prefix = "bids";
  /**
   * Stores bid to redis
   *
   * @param bid The signed bid we're going to store
   * @returns Returns the number of bids for a txId
   */
  public async storeBid(bid: Bid): Promise<number> {
    const txid = bid.transactionId;
    const router = bid.data.router;
    const curTimeInSecs = await getNtpTimeSeconds();

    await this.data.hset(
      `${this.prefix}:${txid}:${router}`,
      "payload",
      JSON.stringify(bid),
      "status",
      BidStatus.Pending,
      "lastUpdate",
      curTimeInSecs,
    );

    const count = (await this.data.keys(`${this.prefix}:${txid}:*`)).length;

    await this.data.publish(StoreChannel.NewBid, JSON.stringify(bid));

    return count;
  }

  /**
   * Updates the status of bid
   *
   * @param bid The signed bid we're going to update
   * @param bidStatus The status of bid
   * @returns 1 - added, 0 - updated
   */
  public async updateBid(bid: Bid, bidStatus: BidStatus): Promise<number> {
    const txid = bid.transactionId;
    const router = bid.data.router;
    const curTimeInSecs = await getNtpTimeSeconds();

    const res = await this.data.hset(
      `${this.prefix}:${txid}:${router}`,
      "payload",
      JSON.stringify(bid),
      "status",
      bidStatus,
      "lastUpdate",
      curTimeInSecs,
    );

    if (res >= 1) return 1;
    else return res;
  }

  /**
   * Gets the bids by transactionId
   *
   * @param transactionId The transactionId of the bids that we're going to get
   * @returns Auction bids that were stored with the status
   */
  public async getBidsByTransactionId(transactionId: string): Promise<StoredBid[]> {
    const storedBids: StoredBid[] = [];

    const bidStream = this.data.scanStream({
      match: `${this.prefix}:${transactionId}:*`,
    });

    return new Promise((res, rej) => {
      bidStream.on("data", async (resultKeys: string) => {
        for (const key of resultKeys) {
          // 1 - "payload" - key
          // 2 - value for the `payload`
          // 3 - "status" - key
          // 4 - value for the `status`
          // 5 - `lastUpdate` - key
          // 6 - value for the `lastUpdate`
          const record = await this.data.hgetall(key);
          const bidStatus = record["status"];
          const lastUpdate = Number(record["lastUpdate"]);

          storedBids.push({
            payload: JSON.parse(record["payload"]) as Bid,
            status: bidStatus as BidStatus,
            lastUpdate,
          });
        }
      });
      bidStream.on("end", async () => {
        res(storedBids);
      });
    });
  }
}