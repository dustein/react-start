import { Flex, IconButton, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import { Profile } from './Profile'
import { NotificationsBar } from "./NotificationsNav";
import { SearchBox } from "./SearchBox";
import { Logo } from "./Logo";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function HeaderComponent() {

  const { open, onOpen, onClose } = useSidebarDrawer();

  const isWideScreen = useBreakpointValue({
    base: false,
    md: true
  })

  return (
    <Flex as="header" w="100%" maxWidth={1480} h="20" mx="auto" px="6" align="center">
      
      {/* Botão de menu visible só em mobile */}
      {!isWideScreen && (
        <>
        <IconButton
          fontSize="24"
          variant="solid"
          aria-label="Abrir menu de navegação"
          mr="2"
          onClick={useSidebarDrawer} // Ou useSidebarDrawer().onOpen
        ><RiMenuLine /></IconButton>
        <Logo />
        </>
      )}

      {/* Remove o SearchBox para telas menores que "md"     */}
      { isWideScreen && (
        <>
        {/* <IconButton
          fontSize="24"
          variant="solid"
          aria-label="Abrir menu de navegação"
          mr="2"
          onClick={useSidebarDrawer} // Ou useSidebarDrawer().onOpen
        ><RiMenuLine /></IconButton> */}
        <Logo />
        < SearchBox /> 
        </>
        
        )  }
      
      <Flex align="center" ml="auto">

        <NotificationsBar />

        <Profile showProfileData={isWideScreen}/>

      </Flex>

    </Flex>

  );
}