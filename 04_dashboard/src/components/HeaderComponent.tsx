import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import { PiBank } from "react-icons/pi";
import { RiNotificationLine, RiSearch2Line, RiUserAddLine } from "react-icons/ri";

export function HeaderComponent() {
  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" px="6" align="center">
          
      <Text fontSize="3xl" fontWeight="bold" letterSpacing="tight" w="64">
        dash <Text color="pink.500" as="span">-</Text> board
      </Text>
    
      <Flex as="label" flex="1" px="4" ml="6" maxWidth={400} alignSelf="center" color="gray.200" position="relative" bg="gray.800" borderRadius="full">
        <Input color="gray.50" mr="4" placeholder="Buscar na plataforma" _placeholder={{color: "gray.400"}} bg="transparent" border="none" variant={"unstyled" as any} _focus={{ boxShadow: "none" }} />
        <Icon alignSelf="center" as={RiSearch2Line} boxSize={6} />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack gap={4} mx="8" pr="8" color="gray.300" borderRightWidth ={2} borderColor="gray.600">

          <Icon as={RiNotificationLine} boxSize={6} />
          <Icon as={RiUserAddLine} boxSize={6} />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Eduardo Stein</Text>
            <Text color="gray.300" fontSize="small">eduardo@stein.go</Text>
          </Box>

          <Avatar.Root shape="full" size="md">
            <Avatar.Fallback name="Eduardo Stein" />
            <Avatar.Image src="https://avatars.githubusercontent.com/u/68870425?v=4&size=64" />
          </Avatar.Root>

        </Flex>
      </Flex>

    </Flex>

  );
}