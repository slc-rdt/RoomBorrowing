import { ChakraProvider } from '@chakra-ui/react'
import {ApplicationRouter} from "./core/router/ApplicationRouter.tsx";

function App() {

  return (
    <ChakraProvider>
      <ApplicationRouter />
    </ChakraProvider>
  )
}

export default App
