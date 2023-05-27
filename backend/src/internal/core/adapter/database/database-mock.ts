import { ITrail } from "../../../interfaces/trail-interface";
import { PDatabase } from "../../port/database-port";

export class ADatabaseMock implements PDatabase {
  async getTrails(studentId: string): Promise<ITrail[]> {
    return {} as ITrail[];
  }
  async putTrail(studentId: string, trail: ITrail): Promise<void> {}
}
