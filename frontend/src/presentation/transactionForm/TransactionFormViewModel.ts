import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {SelectInstance} from "react-select";
import {
    ReactSelectOption,
    successToast,
    TransactionType,
    TransactionTypeBorrow,
    TransactionTypeReturn
} from "../../core/lib/Lib.ts";
import {useToast} from "@chakra-ui/react";
import RoomTransactionAPIDatasourceImpl from "../../data/dataSource/API/RoomTransactionAPIDatasourceImpl.ts";
import {RoomTransactionRepositoryImpl} from "../../data/repository/RoomTransactionRepositoryImpl.ts";
import {BorrowRoom} from "../../domain/useCase/roomTransaction/BorrowRoom.ts";
import {ReturnRoom} from "../../domain/useCase/roomTransaction/ReturnRoom.ts";
import {
    createRoomTransactionBorrowAPIRequest
} from "../../data/dataSource/API/Request/RoomTransactionBorrowAPIRequest.ts";
import {
    createRoomTransactionReturnAPIRequest
} from "../../data/dataSource/API/Request/RoomTransactionReturnAPIRequest.ts";

export default function TransactionFormViewModel(type: TransactionType, opts: ReactSelectOption[], transactionCallback: () => void) {
    const [disabled, setDisabled] = useState<boolean>(true);

    const [roomNumber, setRoomNumber] = useState<string>();
    const selectRef = useRef<SelectInstance<ReactSelectOption> | null>(null);
    const unameRef = useRef<HTMLInputElement | null>(null);
    const divRef = useRef<HTMLInputElement | null>(null);

    const toast = useToast();

    const roomTransactionsDataSourceImpl = useMemo(() => new RoomTransactionAPIDatasourceImpl(), [])
    const roomTransactionsRepositoryImpl = useMemo(() => new RoomTransactionRepositoryImpl(roomTransactionsDataSourceImpl), [roomTransactionsDataSourceImpl])

    const borrowRoomUseCase = useMemo(() => new BorrowRoom(roomTransactionsRepositoryImpl), [roomTransactionsRepositoryImpl])
    const returnRoomUseCase = useMemo(() => new ReturnRoom(roomTransactionsRepositoryImpl), [roomTransactionsRepositoryImpl])

    const borrowRoom = useCallback(async (uname: string, div: string, num: string) => {
        const data = createRoomTransactionBorrowAPIRequest(uname, div, num);
        return await borrowRoomUseCase.invoke(data);
    }, [borrowRoomUseCase])

    const returnRoom = useCallback(async (uname: string, div: string, num: string) => {
        const data = createRoomTransactionReturnAPIRequest(uname, div, num);
        return await returnRoomUseCase.invoke(data);
    }, [returnRoomUseCase])

    useEffect(()=>{
        if(!opts || opts.length == 0) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }

    }, [opts])

    function onSelectChange(opt: ReactSelectOption | null) {
        setRoomNumber(opt?.value)
    }

    async function handleSubmit() {
        if(!unameRef.current || !divRef.current || roomNumber == undefined) return;
        const uname: string = unameRef.current['value'];
        const div: string = divRef.current['value'];

        if(type.type === TransactionTypeBorrow.type) {
            await borrowRoom(uname, div, roomNumber);
            successToast("Successfully borrowed room!", toast);
            transactionCallback()
        } else if(type.type === TransactionTypeReturn.type){
            await returnRoom(uname, div, roomNumber);
            successToast("Successfully returned room!", toast);
            transactionCallback()
        }

        selectRef.current?.clearValue();
        unameRef.current['value'] = '';
        divRef.current['value'] = '';
    }

    return {
        disabled,
        selectRef,
        unameRef,
        divRef,
        onSelectChange,
        handleSubmit,
    }
}