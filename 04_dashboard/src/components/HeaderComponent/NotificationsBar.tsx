import { HStack, Icon } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

export function NotificationsBar() {
  return (
    <HStack gap={4} mx="8" pr="8" color="gray.300" borderRightWidth ={2} borderColor="gray.600">

      <Icon as={RiNotificationLine} boxSize={6} />
      <Icon as={RiUserAddLine} boxSize={6} />
    </HStack>
  );
}