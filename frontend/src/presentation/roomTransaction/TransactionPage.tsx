import ParticleBG from "./ParticleBG.tsx";
import {Button} from "@chakra-ui/react";
// import {Button, Select} from "@chakra-ui/react";
import {Stack} from "@chakra-ui/layout";
import {Input} from "@chakra-ui/input";
import Select from 'react-select';
import React, {FC, useEffect, useState} from "react";
import useViewModel from "./TransactionPageViewModel.ts";
import './TransactionPage.css'
import AsyncSelect from "react-select/async";
import {Room} from "../../domain/model/Room.ts";

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
    const {
        opts,
        getRooms,
    } = useViewModel()
    const [borrow, setBorrow] = useState<boolean>(true)
    const [placeholder, setPlaceholder] = useState<ModalPlaceholder>(borrowPlaceholder)

    useEffect(() => {
        getRooms()

    }, [])

    useEffect(() => {
        console.log(opts);
    }, [opts])

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
                {/*<Select size='lg' bg={'white'} onChange={handleSelectChange}>*/}
                {/*    <option value='borrow'>Borrow</option>*/}
                {/*    <option value='return'>Return</option>*/}
                {/*</Select>*/}
                {/*<Select*/}
                {/*    name="room"*/}
                {/*    className="basic-single"*/}
                {/*    classNamePrefix="select"*/}
                {/*    isClearable={true}*/}
                {/*    isSearchable={true}*/}
                {/*    options={rooms}*/}
                {/*/>*/}
                {
                    !opts ?
                        <div className='w-full h-full bg-white rounded-lg px-8 py-10'>
                            Loading...
                        </div>
                        :
                        <div>
                            {/*<AsyncSelect*/}
                            {/*    options={opts}*/}
                            {/*    cacheOptions*/}
                            {/*    loadOptions={getRoomOptions}*/}
                            {/*    defaultOptions={opts}*/}
                            {/*/>*/}
                            <Select
                                name="room"
                                className="basic-single"
                                classNamePrefix="select"
                                isClearable={true}
                                isSearchable={true}
                                options={opts}
                            />
                            <div className='h-4'></div>
                            <Stack spacing={3} className='w-full h-full bg-white rounded-lg px-8 py-10'>
                                <Input placeholder={placeholder.username} size='lg' />
                                <Input placeholder={placeholder.division} size='lg' />
                                <Button colorScheme='gray' size='lg'>Transaction</Button>
                                <Button colorScheme='green' size='lg'>Borrow</Button>
                                <Button colorScheme='blue' size='lg'>Return</Button>
                            </Stack>
                        </div>
                }
            </div>
        </div>
    );
};

export default TransactionPage;