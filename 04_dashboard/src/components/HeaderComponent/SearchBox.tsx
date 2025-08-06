import { Flex, Input, Icon } from "@chakra-ui/react";
import { RiSearch2Line } from "react-icons/ri";

export function  SearchBox() {
  return(
    <Flex as="label" flex="1" px="4" ml="6" maxWidth={400} alignSelf="center" color="gray.200" position="relative" bg="gray.800" borderRadius="full">
      <Input color="gray.50" mr="4" placeholder="Buscar na plataforma" _placeholder={{color: "gray.400"}} bg="transparent" border="none" variant={"unstyled" as any} _focus={{ boxShadow: "none" }} />
      <Icon alignSelf="center" as={RiSearch2Line} boxSize={6} />
    </Flex>
  );
}