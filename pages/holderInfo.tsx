import type { NextPage } from 'next'
import { Styling } from './Layout/Styling'
import Head from 'next/head'
import { Spacer, Text, Button } from '@chakra-ui/react'

const holderInfo: NextPage = () => {
  return (
    <>
    <Head>
        <title>Welcome to the Homepage!</title>
    </Head>

    <Text p={1} align="center" fontSize='6xl'>
        Homepage
    </Text>

    <Styling>
        
   <Text align='center' fontSize='4xl'>Welcome to my personal website!</Text>
   <Text align='center' fontSize='2xl'>This is currently a work in progress. This sections that are complete can be found on the naviagation bar above.</Text>
   <Spacer/>
   <Text align='center' fontSize='2xl'>If you have any questions for me, please click on the button below to send me an email.</Text>
   <Spacer/>
   <Button as="a" size="lg" colorScheme="gray">Email</Button>
   <Text align='center' fontSize='2xl'>Also, if you want to check out my GitHub account, click the button below!</Text>
   <Button as="a" size="lg" colorScheme="gray" href="https://github.com/ntxnick" target="_blank" >Nick&#39;s GitHub</Button>
    </Styling>
    </>
  )
}

export default holderInfo
