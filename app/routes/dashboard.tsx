import { Image, Flex,Text, SimpleGrid, Input,Box } from "@chakra-ui/react";
import { Link } from "@remix-run/react";



export default function Dashboard(){
    const content_templates = [
        {
            logo:"",
            title:"Facebook Ads",
            description:"Create high converting Facebook Ads with ease."
        },
        {
            logo:"",
            title:"Blog Posts",
            description:"Create high converting Blog Posts with ease."
        },
        {
            logo:"",
            title:"Emails",
            description:"Create high converting Emails with ease."
        },
        {
            logo:"",
            title:"Social Media Posts",
            description:"Create high converting Social Media Posts with ease."
        },
        {
            logo:"",
            title:"Product Descriptions",
            description:"Create high converting Product Descriptions with ease."
        },
        {
            logo:"",
            title:"Google Ads",
            description:"Create high converting Google Ads with ease."
        },
        {
            logo:"",
            title:"Youtube Videos",
            description:"Create high converting Youtube Videos with ease."
        },
        {
            logo:"",
            title:"Landing Pages",
            description:"Create high converting Landing Pages with ease."
        },
        {
            logo:"",
            title:"Instagram Posts",
            description:"Create high converting Instagram Posts with ease."
        },
        {
            logo:"",
            title:"Tiktok Videos",
            description:"Create high converting Tiktok Videos with ease."
        },
        {
            logo:"",
            title:"Twitter Posts",
            description:"Create high converting Twitter Posts with ease."
        },
        {
            logo:"",
            title:"LinkedIn Posts",
            description:"Create high converting LinkedIn Posts with ease."
        },
        {
            logo:"",
            title:"Pinterest Pins",
            description:"Create high converting Pinterest Pins with ease."
        },
        {
            logo:"",
            title:"Snapchat Ads",
            description:"Create high converting Snapchat Ads with ease."
        },
        {
            logo:"",
            title:"Amazon Product Descriptions",
            description:"Create high converting Amazon Product Descriptions with ease."
        },
        {
            logo:"",
            title:"Google My Business Posts",
            description:"Create high converting Google My Business Posts with ease."
        },
        {
            logo:"",
            title:"Google Play Store Descriptions",
            description:"Create high converting Google Play Store Descriptions with ease."
        },
        {
            logo:"",
            title:"App Store Descriptions",
            description:"Create high converting App Store Descriptions with ease."
        },
        {
            logo:"",
            title:"Kickstarter Campaigns",
            description:"Create high converting Kickstarter Campaigns with ease."
        },
        {
            logo:"",
            title:"Indiegogo Campaigns",
            description:"Create high converting Indiegogo Campaigns with ease."
        },
        {
            logo:"",
            title:"Product Hunt Posts",
            description:"Create high converting Product Hunt Posts with ease."
        },
        {
            logo:"",
            title:"Quora Answers",
            description:"Create high converting Quora Answers with ease."
        },
        {
            logo:"",
            title:"Medium Articles",
            description:"Create high converting Medium Articles with ease."
        },
        {
            logo:"",
            title:"Reddit Posts",
            description:"Create high converting Reddit Posts with ease."
        },
        {
            logo:"",
            title:"Discord Messages",
            description:"Create high converting Discord Messages with ease."
        }
    ];
    return <Flex h={"100vh"}>
        <Flex w={"300px"} fontSize={20} p={2} bg={"#F8FAFB"} direction={"column"}>
            <Flex gap={4} alignItems={"center"}>
                <Image src="./logo1.png" w={30}/>
                <Text>Content.AI</Text>
            </Flex>
            <Flex direction={"column"} flex={1}>
                <Box as={Link} _hover={{textDecoration:"underline"}} p={4} to={''}>Request Feature</Box>
                <Box as={Link} _hover={{textDecoration:"underline"}} p={4} to={''}>Guides</Box>
                <Box as={Link} _hover={{textDecoration:"underline"}} p={4} to={''}>Settings</Box>
            </Flex>
            <Flex>
                <Text>Logout</Text>
            </Flex>
        </Flex>
        <Flex bg={"#DBE8F4"} direction={"column"}  pb={2} flex={1}>
            <Flex p={2} gap={4}>
                <Input rounded={"full"} placeholder="What do you want to create?" bg={"gray.50"} size={"lg"}/>
                <Flex alignItems={"center"} justifyContent={"center"}>
                    <Image src="./logo1.png" w={"50px"} rounded={"full"}/>
                </Flex>
            </Flex>
            <SimpleGrid columns={3} overflow={"scroll"} gap={4} p={4} w={"full"}>
                {content_templates.map((template,index)=>{
                    return <Flex bg={"white"} key={index} p={4} direction={"column"} rounded={"lg"} h={"200px"}>
                        <Text fontWeight={"bold"} fontSize={20}>{template.title}</Text>
                        <Text color={"gray.400"}>{template.description}</Text>
                    </Flex>
                })}
            </SimpleGrid>
        </Flex>
    </Flex>
}