import { ITrail } from "../../../interfaces/trail-interface";
import { PDatabase } from "../../port/database-port";

export class ADatabaseMock implements PDatabase {
  private data;
  async getTrails(studentId: string): Promise<ITrail[]> {
    if (this.data[studentId]) {
      return this.data[studentId];
    }
    return [];
  }
  async putTrail(studentId: string, trail: ITrail): Promise<void> {
    if (!this.data[studentId]) {
      const trailId = trail.id;
      const aux: any = trail;
      delete aux.id;
      this.data[studentId] = { [trailId]: aux };
    } else {
      this.data[studentId].push(trail);
    }
  }
  async deleteTrail(studentId: string, trailId: string): Promise<void> {
    if (this.data[studentId]) {
      if (this.data[studentId][trailId]) {
        delete this.data[studentId][trailId];
      }
    }
  }
}
