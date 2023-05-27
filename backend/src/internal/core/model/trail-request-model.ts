import { TrailRequestDto } from "../dto/trail-request-dto";

export class TrailRequestModel {
  readonly topic: string;
  readonly studentId: string;

  constructor(trailRequestDto: TrailRequestDto) {
    if (trailRequestDto.topic) this.topic = trailRequestDto.topic;
    if (trailRequestDto.studentId) this.studentId = trailRequestDto.studentId;

    this.validate();
  }

  validate() {
    //todo: implement validation
  }
}
