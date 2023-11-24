import { Flex,Button,Image } from "@chakra-ui/react";
export default function Index(){
    return <Flex h={"100vh"} w={"full"} alignItems={"center"} direction={"column"} gap={10} justifyContent={"center"}>
        <Image src={"./logo1.png"} alt={"logo"} w={"full"} maxW={"100px"} />
        <Button onClick={()=>window.location.href='/content'} size={"lg"} variant={"solid"} bg={"blue.500"} color={"gray.50"} _hover={{bg:"blue.400",color:"gray.50"}} rounded={"full"}>Get Started</Button>
    </Flex>
}