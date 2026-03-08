import { Service } from "typedi";

@Service()
export class Cache {

  private storage = new Map<string, any>();

  get(key: string) {
    return this.storage.get(key);
  }

  set(key: string, value: any) {
    this.storage.set(key, value);
  }

}