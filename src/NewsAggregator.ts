import { Service, Inject } from "typedi";
import { NewsSource, NewsSourceToken } from "./NewsSource";
import { Logger } from "./Logger";
import { Cache } from "./Cache";

@Service()
export class NewsAggregator {

  constructor(
    @Inject(NewsSourceToken)
    private sources: NewsSource[],
    private logger: Logger,
    private cache: Cache
  ) {}

  async getLatestArticles() {

    const cached = this.cache.get("articles");

    if (cached) {
      this.logger.log("Returning articles from cache...");
      cached.forEach((article: string) => this.logger.log(article));
      return;
    }

    this.logger.log("Fetching articles from sources...");

    const allArticles: string[] = [];

    for (const source of this.sources) {
      const articles = await source.fetchArticles();
      allArticles.push(...articles);
    }

    this.cache.set("articles", allArticles);

    allArticles.forEach(article => this.logger.log(article));
  }

}