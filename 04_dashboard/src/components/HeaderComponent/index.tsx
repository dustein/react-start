import { Flex, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from './Profile'
import { NotificationsBar } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";

export function HeaderComponent() {

  const isWideScreen = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" px="6" align="center">
          
      <Logo />
    
      <SearchBox />

      <Flex align="center" ml="auto">

        <NotificationsBar />

        <Profile showProfileData={isWideScreen}/>

      </Flex>

    </Flex>

  );
}