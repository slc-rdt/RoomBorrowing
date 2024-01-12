import {Button} from "@chakra-ui/react";
import {Stack} from "@chakra-ui/layout";
import RSelect from "react-select";
import {Input} from "@chakra-ui/input";
import {FC} from "react";
import {ReactSelectOption, TransactionType} from "../../core/lib/Lib.ts";
import useViewModel from "./TransactionFormViewModel.ts"

interface TransactionFormProps {
    transactionType: TransactionType,
    opts: ReactSelectOption[],
    transactionCallback: () => void,
}

export const TransactionForm: FC<TransactionFormProps> = (p) => {
    const {
        disabled,
        selectRef,
        unameRef,
        divRef,
        onSelectChange,
        handleSubmit,
    } = useViewModel(p.transactionType, p.opts, p.transactionCallback);

    return (
        <div className='w-[60%] h-[50%] z-10'>
            <div className='w-full text-2xl font-bold rounded-lg bg-white px-8 py-4'>
                {p.transactionType.type}
            </div>
            <div className='h-4'></div>
            <Stack spacing={5} className='w-full bg-white rounded-lg px-8 py-10 z-20'>
                <RSelect
                    name="room"
                    className="basic-single"
                    classNamePrefix="select"
                    isClearable={true}
                    isSearchable={true}
                    options={p.opts}
                    isDisabled={disabled}
                    onChange={onSelectChange}
                    ref={selectRef}
                />
                <Input placeholder={p.transactionType.username} size='lg' disabled={disabled} ref={unameRef}/>
                <Input placeholder={p.transactionType.division} size='lg' disabled={disabled} ref={divRef}/>
                <Button
                    colorScheme='green'
                    size='lg'
                    isDisabled={disabled}
                    onClick={handleSubmit}
                >
                    {p.transactionType.type}
                </Button>
            </Stack>
        </div>
    );
};