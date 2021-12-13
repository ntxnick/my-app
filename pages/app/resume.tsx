import type { NextPage } from 'next'
import { Styling } from '../Layout/Styling'
import Head from 'next/head'
import { Spacer, Text, HStack, UnorderedList, ListItem } from '@chakra-ui/react'

const resume: NextPage = () => {
  return (
    <>
    <Head>
        <title>My Resume</title>
    </Head>
    
    <Text p={1} align="center" fontSize='6xl'>
        Nick&#39;s Resume
    </Text>

    <Styling>
        <Text align='center' fontSize='3xl' fontWeight={'bold'}> Nicholas F. Vitale</Text>
        
        <HStack>
        <Text>509 Marlow Dr</Text>
        <Spacer />
        <Text>972-800-0772</Text>
        </HStack>

        <HStack>
        <Text>Flower Mound TX, 75028</Text>
        <Spacer />
        <Text>Email goes here</Text>
        </HStack>

        <Spacer />

        <Text fontSize='2xl' fontWeight={'bold'}>Objective</Text>
        <Text>An entry level position in computer science to help solve business problems and develop my skills.</Text>

        <Spacer />

        <Text fontSize='2xl' fontWeight={'bold'}>Education</Text>

        <HStack>
            <Text>University of Texas at Dallas</Text>
            <Spacer />
            <Text>Richardson, TX</Text>
            <Spacer />
            <Text>2018-Dec 2021</Text>
        </HStack>

        <HStack>
            <Text>BS Computer Science</Text>
        </HStack>

        <Spacer />
        <Spacer />
        <Spacer />

        <HStack>
            <Text>North Central Texas College</Text>
            <Spacer />
            <Text>Flower Mound/Corinth Campus</Text>
            <Spacer />
            <Text>2016-2019</Text>
        </HStack>

        <Text fontSize='2xl' fontWeight={'bold'}>Work Experience</Text>

        <HStack>
        <Text fontSize='xl' fontWeight={'bold'}>Bahama Bucks</Text>
        <Spacer />
        <Text>Lewisville, Tx</Text>
        <Spacer />
        <Text>2015-2021</Text>
        </HStack>
        <UnorderedList>
        <ListItem>Shift Lead from 2016-Present</ListItem>
        <ListItem>Manage and assign daily tasks to the team to ensure the shift runs efficiently</ListItem>
        <ListItem>Accountable for financial reconciliations for day-to-day operations of the business</ListItem>
        <ListItem>Optimize customer satisfaction by going above and beyond to exceed expectations</ListItem>
        </UnorderedList>

        <HStack>
        <Text fontSize='xl' fontWeight={'bold'}>Famous Footwear</Text>
        <Spacer />
        <Text>Flower Mound, TX</Text>
        <Spacer />
        <Text>2014-2015</Text>
        </HStack>
        <UnorderedList>
        <ListItem>Merchandising to increase capture rate and increase sell through</ListItem>
        <ListItem>Maximize customer satisfaction throughout product selection and checkout</ListItem>
        </UnorderedList>

        <Text fontSize='2xl' fontWeight={'bold'}>Key Achievements</Text>
        <UnorderedList>
        <ListItem>Created a full stack application using MySQL, Django, HTML, and CSS to assist with day to day, check-in checkout operations of a library database.</ListItem>
        <ListItem>Created a chatbot utilizing java to source Google Translate and OpenWeatherMap APIs to convert text or retrieve the weather for the user when asked to.</ListItem>
        <ListItem>Design and built my own custom computer</ListItem>
        </UnorderedList>

        <Text fontSize='2xl' fontWeight={'bold'}>Key Achievements</Text>
        <Text>MySQL, Java, C++, HTML, CSS, Django, Unix (Bash), Node.js, React, Typescript</Text>

        <Text fontSize='2xl' fontWeight={'bold'}>Key Courses</Text>
        <UnorderedList>
        <ListItem>Database Systems</ListItem>
        <ListItem>Data Structures and Algorithms Analysis</ListItem>
        <ListItem>Special Topics in Computer Science</ListItem>
        <ListItem>Intro to Machine Learning</ListItem>
        </UnorderedList>

    </Styling>
    </>
  )
}

export default resume
