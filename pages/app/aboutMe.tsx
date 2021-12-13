import type { NextPage } from 'next'
import { Styling } from '../Layout/Styling'
import { Text, VStack, Box, Grid, Spacer } from '@chakra-ui/react'

const aboutMe: NextPage = () => {
  return (
    <>
    <VStack>

      <Text p={1} align="center" fontSize='6xl'>
        About Me
      </Text>

      <Styling>

      <Grid templateColumns='repeat(2, 1fr)' gap={2}>
      <Box w='100%' h='140' bg='blue.500' color='white' p={2}> 
      <Text fontSize='xl'>Question: Where did you get your degree from?</Text>
      <Text fontSize='xl'>Answer: The University of Texas at Dallas</Text>
      </Box>

      <Box w='100%' h='140' bg='blue.500' color='white' p={2}> 
      <Text fontSize='xl'>Question: What is your favorite Tech Stack? </Text>
      <Spacer />
      <Text fontSize='xl'>Answer: Curerently it is NodeJS, React, Typescript, and Chakra-UI </Text>
      </Box>

      <Box w='100%' h='140' bg='blue.500' color='white' p={2}>
      <Text fontSize='xl'>Question: What was your favorite project? </Text>
      <Text fontSize='xl'>Answer: Working with American Airlines on my senior project has to be my favorite project to date. It can be found in my github under &rdquo;Project-X&rdquo;.</Text>
      </Box>

      <Box w='100%' h='140' bg='blue.500' color='white' p={2}>
      <Text fontSize='xl'>Question: What is this website made from?</Text>
      <Text fontSize='xl'>Answer: This website uses Next.js, Chakra-UI, Typescript, and React.</Text>
      </Box>
      </Grid>

      </Styling>

    </VStack>
    </>
  )
}

export default aboutMe
