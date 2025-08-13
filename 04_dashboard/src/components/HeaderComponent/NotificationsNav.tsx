import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsBar() {
  return (
    <HStack gap={["2", "4"]} mx={["4", "6", "8"]} pr={["4", "6", "8"]} color="gray.300" borderRightWidth ={2} borderColor="gray.600">

      <Icon as={RiNotificationLine} boxSize={[4, 6]} />
      <Icon as={RiUserAddLine} boxSize={[4, 6]} />
    </HStack>
  );
}