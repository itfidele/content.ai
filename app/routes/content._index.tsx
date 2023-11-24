import {
  type ActionFunctionArgs,
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { AIServer } from "~/services/ai.server";
import ReactMarkdown from "react-markdown";
import { Input, Button, Flex,Alert,AlertDescription, Text,Spinner,Box,Image } from "@chakra-ui/react";
import { useState } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Content AI" },
    {
      name: "description",
      content: "Hang tight as we create your content idea to life!",
    },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  // console.log(data)
  return json({ message: "Hello world" });
}

const social_medias = [
  {
    name:"Facebook",
    icon:""
  },
  {
    name:"Twitter",
    icon:"",
  },
  {
    name:"Linkedin",
    icon:""
  },
  {
    name:"Youtube",
    icon:""
  }
];

interface ActionResponse {
  generatedText: string;
  topic: string;
  platform: string;
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData.entries()) as {
    api_key: string;
    topic: string;
    platform: string;
  };

  const api_key = data.api_key||"";

  console.log(data)
  const server = new AIServer(api_key);
  const generated_text =
    (await server.generateText({
      topic: data.topic,
      platform: data.platform,
    })) || "No text generated";

  const response: ActionResponse = {
    generatedText: generated_text,
    topic: data.topic,
    platform: data.platform,
  };

  return json(response);
}

export default function ContentCreator() {
  const actionData = useActionData<typeof action>();
  const transition = useNavigation();
  const [platform,setPlatform] = useState<string>("");
  const loading = transition.state == "submitting" || transition.state == "loading";
  const content = actionData?.generatedText || "";

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(content); // Replace "Text to be copied" with the actual text you want to copy
      console.log("Text copied successfully!");
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <Flex h={"100vh"} bg={"#DBE8F4"}>
      
      
      <Flex as={Form}  method="post"
        h={"100vh"}
        gap={4}
        direction={"column"}
        bg={"gray.50"}
        p={2}
        w={"300px"}
      >
        <Flex flex={1} direction={"column"} gap={2} >
          <Image src="./logo1.png" width="80px" alignSelf={"center"}/>
          <br />
          <Text fontWeight={"bold"}>YOUR API KEY</Text>
          <Alert status="info" title="Generate your API KEY from this link" fontSize={"sm"}>
            <AlertDescription>
              <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noreferrer">Generate your FREE API KEY</a>
            </AlertDescription>
          </Alert>
          <Input
            type="text"
            name="api_key"
            rounded={"md"}
            border={"1px"} borderColor={"black"}
            required
            placeContent={"ENter your api key here"}
            w={"full"}
            id="topic"
            size={"sm"}
          />
         
          <Flex w={"full"}>
            <Input
              rounded={"md"}
              border={"1px"} borderColor={"black"}

                  required
              name="topic"
              bg={"gray.50"}
              placeholder="I did my 1000 push ups today"
            />
          </Flex>
          <Flex direction={"column"}>
            <Text fontSize={20}>Platform</Text>
            <Flex
             flexWrap={"wrap"}
              gap={2}
              bg={"gray.50"}
              rounded={"md"}
            >
              <input type="hidden" name="platform" value={platform} />
              {social_medias.map((social_media, index) => (
                <Flex
                  cursor={"pointer"}
                  _hover={{ bg: "black", color: "gray.50" }}
                  transition={"all 300ms"}
                  key={index}
                  bg={platform==social_media.name? "black":""}
                  color={platform==social_media.name? "gray.50":""}
                  minW={"100px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  rounded={"md"}
                  onClick={()=>setPlatform(social_media.name)}
                  border={"2px"}
                  borderColor={"gray.500"}
                >
                  {social_media.name}
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>

        <Flex>
          <Button w={"full"} type="submit" isLoading={loading} variant={"solid"} bg={"black"} color={"gray.50"} _hover={{color:"gray.50",bg:"gray.800"}}>Generate</Button>
        </Flex>
      </Flex>

      <Flex gap={4} flex={1} direction={"column"} p={4}>
        <Flex
          flex={1}
          border={"2px"}
          borderColor={"gray.800"}
          rounded={"md"}
          bg={"gray.50"}
          p={4}
          alignItems={actionData == undefined ?"center":""}
          direction={"column"}
          fontSize={"sm"}
          justifyContent={actionData == undefined ? "center":""}
        > 
          <Box position={"absolute"} bottom={"28px"} right={"30px"}>
            <Button onClick={copyText} variant={"solid"} bg={"black"} color={"white"}>Copy</Button>
          </Box>
          {actionData == undefined && !loading ? <Text>No Data found yet</Text> : loading ? <Spinner speed="0.85s" outlineColor={"black"} size={"xl"}/> : (
            <Box p={4}><ReactMarkdown>{actionData?.generatedText}</ReactMarkdown></Box>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}


export function ErrorCoundary(){
  return <>
  Error here 
  </>
}
