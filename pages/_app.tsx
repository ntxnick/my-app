import '../styles/globals.css'
import { AppProps }  from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
}

const theme = extendTheme({ config })

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}

export default MyApp
