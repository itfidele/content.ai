import { TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";
import { GEN_AI_API_KEY } from "~/utils/env";


export class AIServer {
  private client: TextServiceClient;

  constructor() {
    this.client = new TextServiceClient({
      authClient: new GoogleAuth().fromAPIKey(GEN_AI_API_KEY),
    });
  }

  async generateText({topic,platform}:{topic:string,platform:string}): Promise<string> {
    const content_ai:any = await this.client.generateText({
        model:'models/text-bison-001',
        prompt:{
            text:`You are a post content creator. write a short ${platform} content about  "${topic}" and make it at least 200 words long. use plain text only. follow the instructions below: - no more than 200 words, - be creative`,
        },
    });

    const generatedText = content_ai[0]?.candidates[0]?.output || 'Failed to generate text.';

    console.log(generatedText);    

    return generatedText;
  }
}