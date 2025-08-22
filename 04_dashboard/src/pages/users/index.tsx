import { HeaderComponent } from "@/components/HeaderComponent";
import { SidebarComponent } from "@/components/SidebarComponent";
import { Box, Button, ButtonGroup, Checkbox, Flex, Heading, Icon, IconButton, Pagination, Spinner, Stack, Table, Text, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { PaginationComponent } from '../../components/PaginationComponent/index';
import Link from "next/link";
import { useEffect } from "react";
import { useQueryClient , useQuery } from "@tanstack/react-query";
import { api } from "@/services/api";

interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export default function UserList() {

  const { data, isLoading, error, isFetching } = useQuery({ queryKey: ['users'], queryFn: async () => {
    
    const { data } = await api.get('users')
        
    const users = data.users.map((user: User )=> {
      return {
        id: user.id,
        name: user.name,
        email: user.email,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })
      }

    })
    
    return users

  }, staleTime: 1000 * 5

 })

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  useEffect(() => {
    fetch('http://localhost:3000/api/users').then(response => response.json()).then(data => console.log(data))
  }, [])

  return (
    <Box>
      <HeaderComponent />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SidebarComponent />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" alignContent="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
              { !isLoading && isFetching && <Spinner color="gray.500" ml="4"/> }
            </Heading>

            <Link href="users/create" passHref><Button size="sm" fontSize="small" colorPalette="pink"><Icon as={RiAddLine} />Criar Novo</Button></Link>

          </Flex>
          <Stack width="full" gap="5">

          { isLoading ? (
            <Flex justify='center'>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify='center'>
              <Text>Falha ao carregar lista de usuários</Text>
            </Flex>
          ) : (
            <>
              {/* // tabela */}
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
                    <Table.ColumnHeader color="gray.300">
                      Usuário                   
                    </Table.ColumnHeader>
                    <Table.ColumnHeader color="gray.300">
                      Data de Cadastro
                    </Table.ColumnHeader>
                    <Table.ColumnHeader w="8"></Table.ColumnHeader>
                  </Table.Row>
                </Table.Header>
                
                <Table.Body>
                  { data.map((user: User) => { 
                    return (
                      <Table.Row bg="transparent" key={user.id}>
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
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="sm" color="gray.300">{user.email}</Text>
                          </Box>
                        </Table.Cell>
                        <Table.Cell><Text fontSize='smaller'>{user.createdAt }</Text></Table.Cell>
                        <Table.Cell><Button as="a" size="sm" fontSize="small" colorPalette="cyan"><Icon as={RiPencilLine} />Editar</Button></Table.Cell>
                      </Table.Row>
                    )
                  }) }
                  
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

              {/* fim da tabela?  */}
            </>
          )}



            

          </Stack>
        </Box>

      </Flex>
      
    </Box>
  )
}
