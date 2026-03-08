import { Service } from "typedi";

@Service()
export class Logger {

  log(message: string) {
    console.log(`[LOG]: ${message}`);
  }

}