import { Service } from "typedi";
import { NewsSource } from "./NewsSource";

@Service()
export class MockNewsSource implements NewsSource {

  async fetchArticles(): Promise<string[]> {

    return [
      "MOCK: Test Article 1",
      "MOCK: Test Article 2",
      "MOCK: Test Article 3"
    ];

  }

}