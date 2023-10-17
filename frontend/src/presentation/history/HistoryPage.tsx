import {GradientBG} from "../gradientBackground/GradientBG.tsx";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import useViewModel from "./HistoryPageViewModel.ts";

export const HistoryPage = () => {
    const {
        roomTransactions
    } = useViewModel()

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center relative'>
            <GradientBG />

            <TableContainer className='z-10 bg-white rounded-lg shadow-2xl'>
                <Table variant='striped' colorScheme='teal'>
                    <TableCaption>Imperial to metric conversion factors</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Room Number</Th>
                            <Th>Borrower</Th>
                            <Th>Borrower Division</Th>
                            <Th>Returner</Th>
                            <Th>Returner Division</Th>
                            <Th>Borrow Date</Th>
                            <Th>Return Date</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            roomTransactions?.map(x => <Tr>
                                <Td>{x.roomNumber}</Td>
                                <Td>{x.borrowerUsername}</Td>
                                <Td>{x.borrowerDivision}</Td>
                                <Td>{x.returnerUsername}</Td>
                                <Td>{x.returnerDivision}</Td>
                                <Td>{x.roomIn.toLocaleString()}</Td>
                                <Td>{x.roomOut.toLocaleString()}</Td>
                            </Tr>)
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};