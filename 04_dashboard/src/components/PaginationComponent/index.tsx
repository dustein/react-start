import { Stack, Button, Box } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function PaginationComponent() {
  return (
    <Stack
      direction="row"
      gap="6"
      mt="8"
      justify="space-between"
      align="center"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong> Atenção.... Esta é uma pagination fake...
      </Box>
      <Stack direction="row" gap="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
        <PaginationItem number={4} />
        <PaginationItem number={5} />
        <PaginationItem number={6} />
      </Stack>
    </Stack>
  );
}