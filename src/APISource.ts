import { Service } from "typedi";
import { NewsSource } from "./NewsSource";

@Service()
export class APISource implements NewsSource {

  async fetchArticles(): Promise<string[]> {
    return [
      "API: Global Economy Update",
      "API: AI Startups Raising Millions",
      "API: Node.js New Version Released"
    ];
  }

}