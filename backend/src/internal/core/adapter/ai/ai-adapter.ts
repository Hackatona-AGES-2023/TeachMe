import { PAi } from "../../port/ai-port";
import { PLogger } from "../../port/logger-port";

export class AAi implements PAi {
  constructor(private readonly _logger: PLogger) {}
  async request(question: string): Promise<string> {
    return "teu rabo";
  }
}
