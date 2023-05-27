import { ITrail } from "../../interfaces/trail-interface";

export interface PDatabase {
  getTrails(studentId: string): Promise<Array<ITrail>>;
  putTrail(studentId: string, trail: ITrail): Promise<void>;
}
