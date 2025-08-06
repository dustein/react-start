import { HeaderComponent } from "@/components/HeaderComponent";
import { SidebarComponent } from "@/components/SidebarComponent";
import { Box, Button, ButtonGroup, Checkbox, Flex, Heading, Icon, IconButton, Pagination, Stack, Table, Text } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { system } from '../../styles/theme';
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { PaginationComponent } from '../../components/PaginationComponent/index';

export default function UserList() {
  return (
    <Box>
      <HeaderComponent />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SidebarComponent />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" alignContent="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Button as="a" size="sm" fontSize="small" colorPalette="pink"><Icon as={RiAddLine} />Criar Novo</Button>

          </Flex>
          <Stack width="full" gap="5">

            <Table.Root colorPalette='pink' interactive>
              <Table.Caption />

              <Table.Header>
                <Table.Row bg="transparent" color="gray.300">
                  <Table.ColumnHeader px="4" width="4">
                    <Checkbox.Root colorPalette="pink">
                      <Checkbox.HiddenInput />
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      <Checkbox.Label />
                    </Checkbox.Root>
                  </Table.ColumnHeader>
                  <Table.ColumnHeader color="gray.300">Usuário</Table.ColumnHeader>
                  <Table.ColumnHeader color="gray.300">Data de Cadastro</Table.ColumnHeader>
                  <Table.ColumnHeader w="8"></Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              
              <Table.Body>
                <Table.Row bg="transparent">
                  <Table.Cell px="4"><Checkbox.Root colorPalette="pink">
                      <Checkbox.HiddenInput />
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      <Checkbox.Label />
                    </Checkbox.Root>
                  </Table.Cell>
                  <Table.Cell>
                    <Box>
                      <Text fontWeight="bold">Eduardo Stein</Text>
                      <Text fontSize="sm" color="gray.300">eduardo@stein.up</Text>
                    </Box>
                  </Table.Cell>
                  <Table.Cell>05 de Agosto, 2025</Table.Cell>
                  <Table.Cell><Button as="a" size="sm" fontSize="small" colorPalette="cyan"><Icon as={RiPencilLine} />Editar</Button></Table.Cell>
                </Table.Row>
                <Table.Row bg="transparent">
                  <Table.Cell px="4"><Checkbox.Root colorPalette="pink">
                      <Checkbox.HiddenInput />
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      <Checkbox.Label />
                    </Checkbox.Root>
                  </Table.Cell>
                  <Table.Cell>
                    <Box>
                      <Text fontWeight="bold">Eduardo Stein</Text>
                      <Text fontSize="sm" color="gray.300">eduardo@stein.up</Text>
                    </Box>
                  </Table.Cell>
                  <Table.Cell>05 de Agosto, 2025</Table.Cell>
                  <Table.Cell><Button as="a" size="sm" fontSize="small" colorPalette="cyan"><Icon as={RiPencilLine} />Editar</Button></Table.Cell>
                </Table.Row>
                <Table.Row bg="transparent">
                  <Table.Cell px="4"><Checkbox.Root colorPalette="pink">
                      <Checkbox.HiddenInput />
                      <Checkbox.Control>
                        <Checkbox.Indicator />
                      </Checkbox.Control>
                      <Checkbox.Label />
                    </Checkbox.Root>
                  </Table.Cell>
                  <Table.Cell>
                    <Box>
                      <Text fontWeight="bold">Eduardo Stein</Text>
                      <Text fontSize="sm" color="gray.300">eduardo@stein.up</Text>
                    </Box>
                  </Table.Cell>
                  <Table.Cell>05 de Agosto, 2025</Table.Cell>
                  <Table.Cell><Button as="a" size="sm" fontSize="small" colorPalette="cyan"><Icon as={RiPencilLine} />Editar</Button></Table.Cell>
                </Table.Row>
              </Table.Body>
              
              <Table.Footer>
                <Table.Row>
                  <Table.Cell />
                </Table.Row>
              </Table.Footer>
            
            </Table.Root>

            <Pagination.Root colorPalette="pink" count={5} pageSize={5} page={1}>
              <ButtonGroup variant="subtle" size="sm" wrap="wrap">
                <Pagination.PrevTrigger asChild>
                  <IconButton>
                    <LuChevronLeft />
                  </IconButton>
                </Pagination.PrevTrigger>

                <Pagination.Items
                  render={(page) => (
                    <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                      {page.value}
                    </IconButton>
                  )}
                />

                <Pagination.NextTrigger asChild>
                  <IconButton>
                    <LuChevronRight />
                  </IconButton>
                </Pagination.NextTrigger>
              </ButtonGroup>
            </Pagination.Root>

            <PaginationComponent />

          </Stack>
        </Box>

      </Flex>
      
    </Box>
  )
}
