import { TrailRequestDto } from "../dto/trail-request-dto";
import { ValidationError } from "../errors/errors";

export class TrailRequestModel {
  readonly topic: string;
  readonly studentId: string;

  constructor(trailRequestDto: TrailRequestDto) {
    if (trailRequestDto.topic) this.topic = trailRequestDto.topic;
    if (trailRequestDto.studentId) this.studentId = trailRequestDto.studentId;

    this.validate();
  }

  validate() {
    if (!this.topic) throw new ValidationError("topic is required");
    if (!this.studentId) throw new ValidationError("studentId is required");
  }
}
