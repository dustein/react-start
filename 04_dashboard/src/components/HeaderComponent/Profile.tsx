import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

export function Profile() {
  return (
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
  );
}