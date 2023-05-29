import { PAi } from "../../port/ai-port";
import { PLogger } from "../../port/logger-port";

import { Configuration, OpenAIApi } from "openai";
import { PROPERTIES } from "../../../app/properties";
import { AIError } from "../../errors/errors";

export class AAi implements PAi {
  private _openai: OpenAIApi;
  constructor(private readonly _logger: PLogger) {
    const configuration = new Configuration({
      apiKey: PROPERTIES.API_KEY,
    });
    this._openai = new OpenAIApi(configuration);
  }
  async request(question: string): Promise<string> {
    try {
      this._logger.info({
        event: "AAi.request",
        details: "Process started",
        question,
      });

      const response = await this._openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }],
        temperature: 1,
      });

      const responseStr = response.data.choices[0].message?.content;

      if (!responseStr || !responseStr.length) {
        this._logger.warn({
          event: "AAi.request",
          details: "Process wawrn",
        });

        throw new AIError("empty AI response");
      }

      return responseStr;
    } catch (err) {
      console.log(JSON.stringify(err, null, 4));

      this._logger.error({
        event: "AAi.request",
        details: "Process error",
        error: err.message,
      });
      throw err;
    }
  }
}
