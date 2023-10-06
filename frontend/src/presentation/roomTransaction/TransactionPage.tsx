import React, {FC} from "react";
import ParticleBG from "../../pages/homePage/ParticleBG.tsx";
import {Select} from "@chakra-ui/react";
import {Stack} from "@chakra-ui/layout";
import {Input} from "@chakra-ui/input";
import {ModalPlaceholder} from "./TransactionPageViewModel.ts";

interface TransactionPageProps {
    placeholder: ModalPlaceholder;
    handleSelectChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
const TransactionPage: FC<TransactionPageProps> = ({placeholder, handleSelectChange}) => {
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