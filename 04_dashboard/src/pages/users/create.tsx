import { HeaderComponent } from "@/components/HeaderComponent";
import { SidebarComponent } from "@/components/SidebarComponent";
import { Box, Button, ButtonGroup, Checkbox, Flex, Heading, Icon, IconButton, Pagination, Stack, Table, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { system } from '../../styles/theme';
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function UserList() {
  return (
    <Box>
      <HeaderComponent />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SidebarComponent />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          
        </Box>

      </Flex>
      
    </Box>
  )
}
