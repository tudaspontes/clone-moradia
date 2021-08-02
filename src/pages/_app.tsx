import { ChakraProvider } from '@chakra-ui/react'

import { AppProps } from 'next/app'

import { PreNav } from '../components/Navigation/PreNav'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

import { SidebarDrawerProvider } from "../hook/useSidebarDrawer"

import { theme } from '../styles/theme'
import { PosFooterLogo } from '../components/Footer/PosFooterLogo'
import { NewsLetter } from '../components/NewsLetter'
import { useRouter } from 'next/dist/client/router'
import { QuizNav } from '../components/Quiz/QuizNav'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const isQuizPath = router.asPath === '/quiz';

  return (
    <ChakraProvider resetCSS theme={theme}>
      <SidebarDrawerProvider>
      <PreNav />
        {!isQuizPath ? <Navigation /> : <QuizNav />}
      <Component {...pageProps} />
      <NewsLetter />
      <Footer />
      <PosFooterLogo />
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
