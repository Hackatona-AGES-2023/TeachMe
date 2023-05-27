export class TrailRequestDto {
  studentId: string;
  topic: string;

  constructor(body: any, params: any) {
    if (body.topic) this.topic = body.topic;
    if (params.studentId) this.studentId = body.studentId;
  }
}
