import useViewModel from './OngoingPageViewModel.ts'
import {GradientBG} from "../gradientBackground/GradientBG.tsx";
import {Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
export const OngoingPage = () => {
    const {
        roomTransactions
    } = useViewModel()

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center relative'>
            <GradientBG />

            <TableContainer className='z-10 bg-white rounded-lg shadow-2xl !overflow-y-visible !overflow-x-visible'>
                <Table >
                    <TableCaption>Ongoing Room Transactions</TableCaption>
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
                            roomTransactions?.map((x, i) =>
                                <Tr
                                    key={i}
                                >
                                    <Td>{x.roomNumber}</Td>
                                    <Td>{x.borrowerUsername}</Td>
                                    <Td>{x.borrowerDivision}</Td>
                                    <Td>{x.returnerUsername == null ? "-" : x.returnerUsername}</Td>
                                    <Td>{x.returnerDivision == null ? "-" : x.returnerDivision}</Td>
                                    <Td>{x.roomIn.toLocaleString()}</Td>
                                    <Td>{x.roomOut == null ? "-" : x.roomOut.toLocaleString()}</Td>
                                </Tr>
                            )
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
};