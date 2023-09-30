import { ChakraProvider } from '@chakra-ui/react'
import HomePage from './pages/homePage/HomePage'

function App() {

  return (
    <ChakraProvider>
      <HomePage />
    </ChakraProvider>
  )
}

export default App
