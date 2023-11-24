import { type ActionFunctionArgs, json, type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { AIServer } from "~/services/ai.server";
import ReactMarkdown from 'react-markdown';


export const meta: MetaFunction = () => {
  return [
    { title: "Content AI" },
    { name: "description", content: "Hang tight as we create your content idea to life!" },
  ];
};


export async function loader({request}:LoaderFunctionArgs){
  
  // console.log(data)
  return json({message: "Hello world"})
}


interface ActionResponse{
  generatedText:string,
  topic:string,
  platform:string
}

export async function action({request}:ActionFunctionArgs){
  const formData = await request.formData();
  const data = Object.fromEntries(formData.entries()) as {topic:string,platform:string};
  const server = new AIServer()
  const generated_text = await server.generateText({topic: data.topic, platform: data.platform}) || "No text generated";

  const response:ActionResponse = {
    generatedText: generated_text,
    topic: data.topic,
    platform: data.platform
  };

  return json(response);
}


export default function Index() {
  const actionData = useActionData<typeof action>();
  const transition = useNavigation();

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      
      
      <Form method="post">
        <label htmlFor="topic">Topic</label>
        <input type="text" name="topic" id="topic" />
        <label htmlFor="platform">Platform</label>
        <input type="text" name="platform" id="platform" />
        <button type="submit">Submit</button>
      </Form>

      { transition.state == "submitting" || transition.state == "loading" ? <div>Generating...</div> : <ReactMarkdown>{actionData?.generatedText}</ReactMarkdown> }
    </div>
  );
}
