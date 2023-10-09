import { ChakraProvider } from '@chakra-ui/react'
import TransactionPage from "./presentation/roomTransaction/TransactionPage.tsx";

function App() {

  return (
    <ChakraProvider>
      <TransactionPage />
    </ChakraProvider>
  )
}

export default App
