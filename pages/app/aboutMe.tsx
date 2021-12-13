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

      <Box w='100%' h='170' bg='gray.700' color='white' fontSize='xl' p={2}> 
      I graduated From UT Dallas on December 17th, 2021 with a Bachelors in Computer Science. I am currently looking for a full time software enginering job. This is just a side project I built in the mean
      time. This is helping me explore front end developement and built out the front-end of a website. In the future i will be adding APIs to this website to perform various tasks. 
      I have been into personal finance recently so the next step on this website will to be to create a calculator that uses an API to retrieve past stock information.
      Then be able to enter that information to the calculator on here to get the &rdquo;FairValue&rdquo; of a stock.
      </Box>

      <Grid templateColumns='repeat(2, 1fr)' gap={2}>
      <Box w='100%' h='140' bg='#999999' color='black' p={2}> 
      <Text fontSize='xl'>Question: Where did you get your degree from?</Text>
      <Text fontSize='xl'>Answer: The University of Texas at Dallas</Text>
      </Box>

      <Box w='100%' h='140' bg='#e6e6e6' color='black' p={2}> 
      <Text fontSize='xl'>Question: What is your favorite Tech Stack? </Text>
      <Spacer />
      <Text fontSize='xl'>Answer: Curerently it is NextJS, React, Typescript, and Chakra-UI </Text>
      </Box>

      <Box w='100%' h='140' bg='#e6e6e6' color='black' p={2}>
      <Text fontSize='xl'>Question: What was your favorite project? </Text>
      <Text fontSize='xl'>Answer: Working with American Airlines on my senior project has to be my favorite project to date. It can be found in my GitHub under &rdquo;Project-X&rdquo;.</Text>
      </Box>

      <Box w='100%' h='140' bg='#999999' color='black' p={2}>
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
