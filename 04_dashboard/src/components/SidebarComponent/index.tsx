// // import { Box, Stack } from "@chakra-ui/react";
// // import { NavSection } from "./NavSection";
// // import { NavLink } from "./NavLink";
// // import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
// // import { SidebarDrawerProvider } from './SidebarDrawerContext';

// // export function SidebarComponent() {
// //   return (
// //     <Box as="aside" w="64" mr="8">
// //       <Stack gap={12} align="flex-start">

// //         <NavSection title="GERAL">
// //           <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
// //           <NavLink icon={RiContactsLine}>Usuários</NavLink>
// //         </NavSection>

// //         <NavSection title="AUTOMAÇÃO">
// //           <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
// //           <NavLink icon={RiGitMergeLine}>Automação</NavLink>
// //         </NavSection>

// //       </Stack>
// //     </Box>
// //   )
// // }



// import {
//   Box,
//   Drawer,
//   DrawerBody,
//   DrawerCloseButton,
//   DrawerContent,
//   DrawerHeader,
//   DrawerOverlay,
//   useBreakpointValue
// } from "@chakra-ui/react";
// import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
// import { SidebarNav } from "./SideBarNav";

// export function SidebarComponent() {
//   const { isOpen, onClose } = useSidebarDrawer()

//   const isDrawerSidebar = useBreakpointValue({
//     base: true,
//     lg: false
//   })

//   if (isDrawerSidebar) {
//     return (
//       <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
//         <DrawerOverlay>
//           <DrawerContent bg="gray.800" p="4">
//             <DrawerCloseButton mt="6" />
//             <DrawerHeader>Navegação</DrawerHeader>

//             <DrawerBody>
//               <SidebarNav />
//             </DrawerBody>
//           </DrawerContent>
//         </DrawerOverlay>
//       </Drawer>
//     )
//   }

//   return (
//     <Box as="aside" w="64" mr="8">
//       <SidebarNav />
//     </Box>
//   )
// }





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
