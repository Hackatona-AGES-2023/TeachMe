import { ITopic } from "./topic-interface";

export interface IStep {
  title: string;
  topics: Array<ITopic>;
}
