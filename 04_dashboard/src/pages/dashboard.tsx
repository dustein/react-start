import { HeaderComponent } from "@/components/HeaderComponent";
import { SidebarComponent } from "@/components/SidebarComponent";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
// import Chart from "react-apexcharts";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const options = {
  chart: {
    toolbar: { show: false },
    zoom: { enabled: false },
    foreColor: { theme.tokens.colors.gray[500]}
  },
  grid: {
    show: false
  }
};

const series = [
  { name: 'serie1', data: [31, 120, 90, 128, 77, 89, 100]}
];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <HeaderComponent />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SidebarComponent />

        <SimpleGrid flex="1" gap="4" minChildWidth={320} alignItems="flex-start">
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text>Inscritos da Semana</Text>
            <Chart options={options} series={series} type="area" height={160}/>
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text>Taxa de Abertura</Text>
          </Box>

        </SimpleGrid>

      </Flex>
    </Flex>
  )
}