import { Flex,Button,Image,Text, Container } from "@chakra-ui/react";
import { Link, useNavigation } from "@remix-run/react";
export default function Index(){
    const transition = useNavigation();
    const loading = transition.state === "loading" || transition.state === "submitting";

    return <Flex h={"100vh"} px={6} bg={"#000000"} w={"full"} direction={"column"} gap={10} >
            <Flex alignItems={"center"} justifyContent={"center"} p={4}>
                <Flex gap={4} alignItems={"center"} flex={1}>
                    <Image width={50} src={"./logo1.png"} alt={"logo"} maxW={"100px"} />
                    <Text color={"gray.50"} fontWeight={"bold"} fontSize={30}>Content.AI</Text>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"center"}>
                    <Button isLoading={loading} disabled={loading} as={Link} to={'/content'}  _hover={{bg:"blue.600",color:"gray.50"}} bg={"#2770FF"} color={"white"}>Get Started</Button>
                </Flex>
            </Flex>
        <Container as={Flex} direction={"column"} gap={10} alignItems={"center"} justifyContent={"center"} minW={"7xl"} h={"70vh"}>
            <Flex p={6} direction={"column"}>
                <Text textAlign={"center"} fontSize={52} fontWeight={"bold"} color={"gray.50"}>Unlock the Power of AI Writing <br /> for Exceptional Content Creator Tool.</Text>
                <Text textAlign={"center"} fontSize={20} color={"gray.400"}>Revolutionize your content creation with advanced AI. Create exceptional content quickly and easily, and gain a leading edge in your industry.</Text>
            </Flex>
            <Button as={Link} isLoading={loading} disabled={loading} to={'/content'}  bg={"#2770FF"} color={"white"} size={"md"} _hover={{bg:"blue.600",color:"gray.50"}} rounded={"lg"}>Try It for Free</Button>
        </Container>
    </Flex>
}