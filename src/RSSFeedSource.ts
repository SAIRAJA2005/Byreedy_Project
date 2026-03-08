import { Service } from "typedi";
import { NewsSource } from "./NewsSource";

@Service()
export class RSSFeedSource implements NewsSource {

  async fetchArticles(): Promise<string[]> {
    return [
      "RSS: Breaking News - Tech Market Growth",
      "RSS: AI Transforming Software Industry",
      "RSS: New JavaScript Framework Released"
    ];
  }

}