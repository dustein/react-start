import { Flex, Text, Input, Icon } from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";

export function HeaderComponent() {
  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" px="6" align="center">
          
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dash <Text color="pink.500" as="span">-</Text> board
      </Text>
    
      <Flex as="label" flex="1" py="4" px="8" ml="6" maxWidth={400} alignSelf="center" color="gray.200" position="relative" bg="gray.800" borderRadius="full">
        <Input color="gray.500" variant="outline" px="4" mr="4" placeholder="Buscar na plataforma" _placeholder={{color: "gray.400"}}></Input>
        <Icon alignSelf="center" as={RiSearch2Line} boxSize={6} />
      </Flex>

    </Flex>

  );
}