import fs from "fs";
import { ITrail } from "../../../interfaces/trail-interface";
import { PDatabase } from "../../port/database-port";

export class ADatabaseMock implements PDatabase {
  private data;
  constructor() {
    this.data = {};
  }
  async getTrails(studentId: string): Promise<ITrail[]> {
    if (this.data[studentId]) {
      const trail: ITrail[] = [];

      Object.keys(this.data[studentId]).forEach((trailId, i) => {
        trail.push({
          id: trailId,
          progress: this.data[studentId][trailId].progress,
          steps: this.data[studentId][trailId].steps,
          title: this.data[studentId][trailId].title,
        });
      });
      return trail;
    }
    return [];
  }
  async putTrail(studentId: string, trail: ITrail): Promise<void> {
    console.log("studentId: " + studentId);
    if (!this.data[studentId]) {
      const trailId = trail.id;
      const aux: any = trail;
      delete aux.id;
      this.data[studentId] = { [trailId]: aux };
    } else {
      this.data[studentId] = { [trail.id]: [] };
      this.data[studentId][trail.id].push(trail);
    }
    console.log(JSON.stringify(this.data, null, 4));
  }
  async deleteTrail(studentId: string, trailId: string): Promise<void> {
    if (this.data[studentId]) {
      if (this.data[studentId][trailId]) {
        delete this.data[studentId][trailId];
      }
    }
  }
}
