import { TextServiceClient } from "@google-ai/generativelanguage";
import { GoogleAuth } from "google-auth-library";
import { GEN_AI_API_KEY } from "~/utils/env";




export class AIServer {
  private client: TextServiceClient;

  constructor(api_key:string) {
    console.log('api_key=',api_key);
    this.client = new TextServiceClient({

      authClient: new GoogleAuth().fromAPIKey(api_key!='' ? api_key : GEN_AI_API_KEY),
    });
  }

  async generateText({topic,platform}:{topic:string,platform:string}): Promise<string> {
    

    const content_ai:any = await this.client.generateText({
        model:'models/text-bison-001',
        prompt:{
            text: this._getPrompt(topic,platform)
        },
    });

    const generatedText = content_ai[0]?.candidates[0]?.output || 'Failed to generate text.';

    console.log(generatedText);    

    return generatedText;
  }


  private _getPrompt(topic:string,platform:string){
    const p = platform.toLowerCase();
    if(p == 'twitter'){
        return `Write an informative Twitter post on the topic ${topic}. Also include relevant hashtags, NO MORE THAN 150 words`
    }
    else if (p == 'facebook'){
        return `Write an engaging post related to the topic ${topic} for posting in a Facebook Group, NO MORE THAN 250 words`;
    }
    else if (p=='linkedin'){
        return `Write a post related to the topic ${topic} for LinkedIn, NO MORE THAN 350 words. keep it interesting and story-like`;
    }
    else if( p == 'youtube'){
        return `Write a script for a YouTube video on the topic ${topic}. NO MORE THAN 1000 words, NO LISTING. keep it interesting and story-like`;
    }
    else{
        return  `You are a post content creator. write a short ${platform} content about  "${topic}" and make it at least 200 words long. use plain text only. follow the instructions below: - no more than 200 words, - be creative`;
    }
    
  }
}