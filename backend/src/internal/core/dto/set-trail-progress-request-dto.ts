import { IProgress } from "../../interfaces/progress-interface";

export class SetTrailProgressRequestDto {
  studentId: string;
  trailId: string;
  progress: IProgress;

  constructor(body: any, params: any) {
    if (body.progress) {
      this.progress = body.progress;
    }

    if (params.studentId) {
      this.studentId = params.studentId;
    }

    if (params.trailId) {
      this.trailId = params.trailId;
    }
  }
}
