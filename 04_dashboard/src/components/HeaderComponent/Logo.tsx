import { Text } from '@chakra-ui/react';

export function Logo() {
  return (
    <Text fontSize={["xl", "2xl"]} fontWeight="bold" letterSpacing="tight" w="64">
      dash<Text color="pink.500" as="span">-</Text>board
    </Text>    
  );

}