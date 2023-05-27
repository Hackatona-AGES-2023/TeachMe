import { match } from "assert";
import { ITopic } from "../../interfaces/topic-interface";
import { ITrail } from "../../interfaces/trail-interface";
import { ALogger } from "../adapter/logger/logger-adapter";
import { TrailBuilder } from "../builder/trail-builder";
import { AIError } from "../errors/errors";
import { PAi } from "../port/ai-port";
import { PTrailService } from "../port/trail-service-port";

export class TrailService implements PTrailService {
  constructor(
    private readonly _logger: ALogger,
    private readonly _ai: PAi,
    private readonly _trailBuilder: TrailBuilder
  ) {}
  async execute(topic: string, trailId: string): Promise<ITrail> {
    try {
      this._logger.info({
        event: "TrailService.execute",
        details: "Process started",
      });

      const topicResponse = await this._ai.request(
        "liste em JSON 3 tópicos de " +
          topic +
          ", apenas os tópicos, apenas a parte entre []"
      );

      const topicTitles = topicResponse.match(/"([^"]*)"/g);

      if (!topicTitles) {
        throw new AIError("Could not interpret topics");
      }
      let msg =
        "liste, três tópicos de aprendizagem separados por aspas, sem explicação, sobre os tópicos: ";
      for (let topicTitle of topicTitles) {
        msg += topicTitle + "\n";
      }
      const stepResponse = await this._ai.request(msg);

      const stepTitles = stepResponse.match(/"([^"]*)"/g);

      if (!stepTitles) {
        throw new AIError("Could not interpret steps");
      }

      msg = "";
      stepTitles?.forEach((stepTitle) => {
        msg +=
          "me de a explicação de " +
          stepTitle +
          " conforme o seguinte exemplo: \n\n  " +
          stepTitle +
          ': "explicação...." ';
      });

      const contentsResponse = await this._ai.request(msg);

      let contents = contentsResponse.match(/"([^"]*)"/g);

      if (!contents) {
        throw new AIError("Could not interpret contents");
      }

      const trail = this._trailBuilder.build(
        stepTitles,
        topicTitles,
        contents,
        trailId,
        topic
      );

      return trail;
    } catch (err) {
      this._logger.error({
        event: "TrailService.execute",
        details: "Process error",
        error: err.message,
      });

      if (!err.statusCode) {
        err = new AIError(err.message);
      }

      throw err;
    }
  }
}
