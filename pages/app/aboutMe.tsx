import type { NextPage } from 'next'
import { Styling } from '../Layout/Styling'
import { Text, VStack } from '@chakra-ui/react'

const aboutMe: NextPage = () => {
  return (
    <>
    <VStack>
      <Text>
        Something here
      </Text>
      <Styling>
        <Text>Hit the about me!</Text>
      </Styling>
    </VStack>
    </>
  )
}

export default aboutMe
