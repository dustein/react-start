import { Box, Drawer, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { SidebarNav } from "./SideBarNav";
import { useEffect, useState } from "react";

export function SidebarComponent() {
  // const { open, setOpen } = useSidebarDrawer();
  const [open, setOpen] = useState(false);

  const isDrawerSidebar = useBreakpointValue({
    base: true,
    md: false,
  });

  // Sempre que o breakpoint mudar, ajusta o open
  useEffect(() => {
    if (isDrawerSidebar) {
      setOpen(true);  // Abre no mobile automaticamente
    } else {
      setOpen(false); // Fecha no desktop
    }
  }, [isDrawerSidebar]);

  if (isDrawerSidebar) {
    return (
      // <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)} placement="start" size="xs">
      //   <Drawer.Backdrop />
      //   <Drawer.Content bg="gray.800" p="4">
      //     <Drawer.CloseTrigger mt="6" />
      //     <Drawer.Header>Navegação</Drawer.Header>

      //     <Drawer.Body>
      //       <SidebarNav />
      //     </Drawer.Body>
      //   </Drawer.Content>
      // </Drawer.Root>
      <></>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <h1>Olaaaaa</h1>
      <SidebarNav />
    </Box>
  );
}
