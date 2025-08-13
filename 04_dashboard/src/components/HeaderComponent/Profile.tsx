import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">

      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Eduardo Stein</Text>
          <Text color="gray.300" fontSize="small">eduardo@stein.go</Text>
        </Box>
      )}

      <Avatar.Root shape="full" size={["sm", "md"]}>
        <Avatar.Fallback name="Eduardo Stein" />
        <Avatar.Image src="https://avatars.githubusercontent.com/u/68870425?v=4&size=64" />
      </Avatar.Root>

    </Flex>
  );
}