import React from 'react';
import { Button, Link, Heading, HStack, Spacer, VStack, Box, Text, Divider } from '@chakra-ui/react';

export const Styling: React.FC = ({ children }) => {
  return (
    <VStack alignItems="stretch" paddingTop={8} w="100%" maxW="75%" marginX="auto">
    <Divider /> <Divider />
      <HStack>
        <Link href="/">
          <Text p={2}>Homepage</Text> 
        </Link>
        <Link href="/random">
          <Text p={2}>Random</Text>
        </Link>
        <Link href="/app/aboutMe">
          <Text p={2}>About Me</Text>
        </Link>            
      </HStack>
      <Divider />
      <Divider />
        <VStack alignItems="stretch" p={2}>
            {children}
        </VStack>
    </VStack>
  );
};

export default Styling
