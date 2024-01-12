import ParticleBG from "./ParticleBG.tsx";
import {Button, Select} from "@chakra-ui/react";
import {Stack} from "@chakra-ui/layout";
import {Input} from "@chakra-ui/input";
import RSelect from 'react-select';
import {FC} from "react";
import useViewModel from "./TransactionPageViewModel.ts";
import {GradientBG} from "../gradientBackground/GradientBG.tsx";

interface TransactionPageProps {

}
const TransactionPage: FC<TransactionPageProps> = () => {
    const {
        opts,
        placeholder,
        disabled,
        selectRef,
        unameRef,
        divRef,
        handleSelectChange,
        onSelectChange,
        handleSubmit,
    } = useViewModel()



    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
            <GradientBG />
            <ParticleBG />
            <div className='flex flex-row w-full h-full'>
                <div className='flex flex-col w-1/2 justify-center items-center'>
                    <div className='w-[30%] h-[50%] z-10'>
                        <Select size='lg' bg={'white'} onChange={handleSelectChange}>
                            <option value='borrow'>Borrow</option>
                            <option value='return'>Return</option>
                        </Select>
                        <div className='h-4'></div>
                        <Stack spacing={5} className='w-full bg-white rounded-lg px-8 py-10 z-20'>
                            <RSelect
                                name="room"
                                className="basic-single"
                                classNamePrefix="select"
                                isClearable={true}
                                isSearchable={true}
                                options={opts}
                                isDisabled={disabled}
                                onChange={onSelectChange}
                                ref={selectRef}
                            />
                            <Input placeholder={placeholder.username} size='lg' disabled={disabled} ref={unameRef}/>
                            <Input placeholder={placeholder.division} size='lg' disabled={disabled} ref={divRef}/>
                            <Button
                                colorScheme='green'
                                size='lg'
                                isDisabled={disabled}
                                onClick={handleSubmit}
                            >
                                {placeholder.type}
                            </Button>
                        </Stack>
                    </div>
                </div>
                <div className='flex flex-col w-1/2 justify-center items-center'>
                    <div className='w-[30%] h-[50%] z-10'>
                        <Select size='lg' bg={'white'} onChange={handleSelectChange}>
                            <option value='borrow'>Borrow</option>
                            <option value='return'>Return</option>
                        </Select>
                        <div className='h-4'></div>
                        <Stack spacing={5} className='w-full bg-white rounded-lg px-8 py-10 z-20'>
                            <RSelect
                                name="room"
                                className="basic-single"
                                classNamePrefix="select"
                                isClearable={true}
                                isSearchable={true}
                                options={opts}
                                isDisabled={disabled}
                                onChange={onSelectChange}
                                ref={selectRef}
                            />
                            <Input placeholder={placeholder.username} size='lg' disabled={disabled} ref={unameRef}/>
                            <Input placeholder={placeholder.division} size='lg' disabled={disabled} ref={divRef}/>
                            <Button
                                colorScheme='green'
                                size='lg'
                                isDisabled={disabled}
                                onClick={handleSubmit}
                            >
                                {placeholder.type}
                            </Button>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TransactionPage;