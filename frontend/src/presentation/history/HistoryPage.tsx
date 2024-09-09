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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const HistoryPage = () => {
    const {
        startDate,
        setStartDate,
        roomTransactions
    } = useViewModel()

    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center relative'>
            <GradientBG/>

            <TableContainer
                className='z-10 bg-white rounded-lg shadow-2xl relative !overflow-y-scroll !overflow-x-scroll'>
                <div className='absolute -top-6 right-0 z-30 font-bold text-white'></div>
                <Table size='sm'>
                    <TableCaption>
                        Room Transactions FM-BINUS-AA-FPT-92/R5
                    </TableCaption>
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

            <div className="h-4"/>

            <div className="z-30 bg-white rounded-md px-4 py-2">
                Room Transactions for
                <DatePicker
                    className="text-center cursor-pointer border-2 border-blue-900 rounded-md ml-2 bg-blue-400 text-white font-bold hover:bg-blue-500 active:bg-blue-500"
                    selected={startDate} onChange={(date: Date) => setStartDate(date)}/>
            </div>
        </div>
    );
};