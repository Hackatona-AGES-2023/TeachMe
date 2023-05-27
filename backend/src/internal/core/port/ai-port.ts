export interface PAi {
  request(question: string): Promise<string>;
}
