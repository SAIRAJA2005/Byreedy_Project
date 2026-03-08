import "reflect-metadata";
import { Container } from "typedi";
import { NewsAggregator } from "./NewsAggregator";
import { APISource } from "./APISource";
import { RSSFeedSource } from "./RSSFeedSource";
import { NewsSourceToken } from "./NewsSource";

async function main() {

  Container.set(NewsSourceToken, [
    new RSSFeedSource(),
    new APISource()
  ]);

  const aggregator = Container.get(NewsAggregator);

  await aggregator.getLatestArticles();

}

main();