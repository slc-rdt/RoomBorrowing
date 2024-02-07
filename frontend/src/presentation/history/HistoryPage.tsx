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
import {formatDateToYYYYMMDD} from "../../core/lib/Lib.ts";

export const HistoryPage = () => {
    const {
        roomTransactions
    } = useViewModel()

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center relative'>
            <GradientBG />

            <TableContainer className='z-10 bg-white rounded-lg shadow-2xl'>
                <Table size='sm'>
                    <TableCaption>Room Transactions for {formatDateToYYYYMMDD(new Date())}</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>Room Number</Th>
                            <Th>Borrower Code</Th>
                            <Th>Borrower</Th>
                            <Th>Borrower Division</Th>
                            <Th>Returner Code</Th>
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
                                    bgColor={x.returnerUsername == null ? "red.200" : "teal.200"}
                                >
                                    <Td>{x.roomNumber}</Td>
                                    <Td>{x.borrowerIdentityCode}</Td>
                                    <Td>{x.borrowerUsername}</Td>
                                    <Td>{x.borrowerDivision}</Td>
                                    <Td>{x.returnerIdentityCode == null ? "-" : x.returnerIdentityCode}</Td>
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