import { ITrail } from "../../interfaces/trail-interface";
import { PLogger } from "../port/logger-port";

export class TrailBuilder {
  constructor(private readonly _logger: PLogger) {}
  build(aiResponse: string): ITrail {
    return {} as ITrail;
  }
}
