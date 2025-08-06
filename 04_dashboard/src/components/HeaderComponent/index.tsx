import { Flex } from "@chakra-ui/react";
import { Profile } from './Profile'
import { NotificationsBar } from "./NotificationsBar";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";

export function HeaderComponent() {
  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" px="6" align="center">
          
      <Logo />
    
      <SearchBox />

      <Flex align="center" ml="auto">

        <NotificationsBar />

        <Profile />

      </Flex>

    </Flex>

  );
}