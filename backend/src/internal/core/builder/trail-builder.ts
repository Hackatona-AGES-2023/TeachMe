import { ITopic } from "../../interfaces/topic-interface";
import { ITrail } from "../../interfaces/trail-interface";
import { PLogger } from "../port/logger-port";

export class TrailBuilder {
  constructor(private readonly _logger: PLogger) {}
  build(
    stepTitles: string[],
    topicTitles: string[],
    contents: string[],
    trailId: string,
    title: string
  ): ITrail {
    let trail: ITrail = {
      id: trailId,
      title,
      steps: [],
      progress: { done: 0, total: 0, pending: 0 },
    };
    stepTitles?.forEach((stepTitle) => {
      let topics: Array<ITopic> = [];
      topicTitles.forEach((topicTitle, i) => {
        topics.push({ content: contents[i], title: topicTitle });
      });

      trail.steps.push({ title: stepTitle, topics });
    });

    return trail;
  }
}
