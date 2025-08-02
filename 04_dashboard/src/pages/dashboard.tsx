import { HeaderComponent } from "@/components/HeaderComponent";
import { SidebarComponent } from "@/components/SidebarComponent";
import { Flex } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <HeaderComponent />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SidebarComponent />
      </Flex>
    </Flex>
  )
}