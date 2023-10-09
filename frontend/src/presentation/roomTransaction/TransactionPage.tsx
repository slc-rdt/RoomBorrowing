import ParticleBG from "./ParticleBG.tsx";
import {Select} from "@chakra-ui/react";
import {Stack} from "@chakra-ui/layout";
import {Input} from "@chakra-ui/input";
import React, {FC, useEffect, useState} from "react";
import './TransactionPage.css'

interface ModalPlaceholder {
    username: string,
    division: string,
    roomNumber: string,
}

const borrowPlaceholder: ModalPlaceholder = {
    username: "Borrower's Username",
    division: "Borrower's Division",
    roomNumber: "Room Number",
}

const returnerPlaceholder: ModalPlaceholder = {
    username: "Returner's Username",
    division: "Returner's Division",
    roomNumber: "Room Number",
}

interface TransactionPageProps {

}
const TransactionPage: FC<TransactionPageProps> = () => {
    const [borrow, setBorrow] = useState<boolean>(true)
    const [placeholder, setPlaceholder] = useState<ModalPlaceholder>(borrowPlaceholder)

    useEffect(() => {
        if (borrow) setPlaceholder(borrowPlaceholder)
        else setPlaceholder(returnerPlaceholder)

    }, [borrow])

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const val = e.currentTarget.value;
        setBorrow(val === 'borrow');
    }
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center gradient'>
            <ParticleBG />
            <div className='w-[30%] h-[50%]'>
                <Select size='lg' bg={'white'} onChange={handleSelectChange}>
                    <option value='borrow'>Borrow</option>
                    <option value='return'>Return</option>
                </Select>
                <div className='h-4'></div>
                <Stack spacing={3} className='w-full h-full bg-white rounded-lg px-8 py-10'>
                    <Input placeholder={placeholder.username} size='lg' />
                    <Input placeholder={placeholder.division} size='lg' />
                </Stack>
            </div>
        </div>
    );
};

export default TransactionPage;