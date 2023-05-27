import { IProgress } from "./progress-interface";
import { IStep } from "./step-interface";

export interface ITrail {
  id: string;
  title: string;
  steps: Array<IStep>;
  progress: IProgress;
}
