export interface PHttpHandler {
  createTrail(req, res): Promise<void>;
  getTrail(req, res): Promise<void>;
  getTrails(req, res): Promise<void>;
  setTrailProgress(req, res): Promise<void>;
}
