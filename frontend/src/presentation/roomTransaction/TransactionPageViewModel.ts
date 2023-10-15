import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {Room} from "../../domain/model/Room.ts";
import RoomAPIDatasourceImpl from "../../data/dataSource/API/RoomAPIDatasourceImpl.ts";
import {RoomRepositoryImpl} from "../../data/repository/RoomRepositoryImpl.ts";
import {GetRooms} from "../../domain/useCase/room/GetRooms.ts";
import {GetRoomsActive} from "../../domain/useCase/room/GetRoomsActive.ts";
import {GetRoomsInactive} from "../../domain/useCase/room/GetRoomsInactive.ts";
import RoomTransactionAPIDatasourceImpl from "../../data/dataSource/API/RoomTransactionAPIDatasourceImpl.ts";
import {RoomTransactionRepositoryImpl} from "../../data/repository/RoomTransactionRepositoryImpl.ts";
import {BorrowRoom} from "../../domain/useCase/roomTransaction/BorrowRoom.ts";
import {
    createRoomTransactionBorrowAPIRequest
} from "../../data/dataSource/API/Request/RoomTransactionBorrowAPIRequest.ts";
import {ReturnRoom} from "../../domain/useCase/roomTransaction/ReturnRoom.ts";
import {
    createRoomTransactionReturnAPIRequest
} from "../../data/dataSource/API/Request/RoomTransactionReturnAPIRequest.ts";
import {ActionMeta, SelectInstance} from "react-select";
import {useToast} from "@chakra-ui/react";

interface ModalPlaceholder {
    username: string,
    division: string,
    type: string,
    roomNumber: string,
}

const borrowPlaceholder: ModalPlaceholder = {
    username: "Borrower's Username",
    division: "Borrower's Division",
    type: "Borrow",
    roomNumber: "Room Number",
}

const returnerPlaceholder: ModalPlaceholder = {
    username: "Returner's Username",
    division: "Returner's Division",
    type: "Return",
    roomNumber: "Room Number",
}

interface Option {
    value: string,
    label: string,
}

export default function TransactionPageViewModel() {
    const [opts, setOpts] = useState<Option[]>([])
    const [rooms, setRooms] = useState<Room[]>([]);
    const [room, setRoom] = useState<Room>();
    const [borrow, setBorrow] = useState<boolean>(true)
    const [disabled, setDisabled] = useState<boolean>(true);
    const [placeholder, setPlaceholder] = useState<ModalPlaceholder>(borrowPlaceholder)
    const toast = useToast()

    const [roomNumber, setRoomNumber] = useState<string>()
    const selectRef = useRef<SelectInstance<Option> | null>(null);
    const unameRef = useRef<HTMLInputElement | null>(null);
    const divRef = useRef<HTMLInputElement | null>(null);

    const roomsDataSourceImpl = useMemo(() => new RoomAPIDatasourceImpl(), [])
    const roomTransactionsDataSourceImpl = useMemo(() => new RoomTransactionAPIDatasourceImpl(), [])
    const roomsRepositoryImpl = useMemo(() => new RoomRepositoryImpl(roomsDataSourceImpl), [roomsDataSourceImpl])
    const roomTransactionsRepositoryImpl = useMemo(() => new RoomTransactionRepositoryImpl(roomTransactionsDataSourceImpl), [roomTransactionsDataSourceImpl])

    const getRoomsUseCase = new GetRooms(roomsRepositoryImpl);
    const getRoomsActiveUseCase = useMemo(() => new GetRoomsActive(roomsRepositoryImpl), [roomsRepositoryImpl])
    const getRoomsInactiveUseCase = useMemo(() => new GetRoomsInactive(roomsRepositoryImpl), [roomsRepositoryImpl])
    const borrowRoomUseCase = useMemo(() => new BorrowRoom(roomTransactionsRepositoryImpl), [roomTransactionsRepositoryImpl])
    const returnRoomUseCase = useMemo(() => new ReturnRoom(roomTransactionsRepositoryImpl), [roomTransactionsRepositoryImpl])

    async function getRooms(roomNumberPrefix?: string) {
        const res = await getRoomsUseCase.invoke(roomNumberPrefix);
        setRooms(res);
    }

    const getRoomsActive = useCallback(async (val?: string) => {
        const res = await getRoomsActiveUseCase.invoke(val);
        setRooms(res);
    }, [getRoomsActiveUseCase])

    const getRoomsInactive = useCallback(async (val?: string) => {
        const res = await getRoomsInactiveUseCase.invoke(val);
        setRooms(res);
    }, [getRoomsInactiveUseCase])

    const borrowRoom = useCallback(async (uname: string, div: string, num: string) => {
        const data = createRoomTransactionBorrowAPIRequest(uname, div, num);
        return await borrowRoomUseCase.invoke(data);
    }, [borrowRoomUseCase])

    const returnRoom = useCallback(async (uname: string, div: string, num: string) => {
        const data = createRoomTransactionReturnAPIRequest(uname, div, num);
        return await returnRoomUseCase.invoke(data);
    }, [returnRoomUseCase])

    useEffect(()=>{
        if(!rooms || rooms.length == 0) {
            setDisabled(true)
        } else {
            setDisabled(false)
            setOpts(rooms.map(room => ({
                value: room.number,
                label: `Room ${room.number}`
            })));
        }

    }, [rooms])

    useEffect(() => {
        if (borrow) {
            getRoomsInactive()
            setPlaceholder(borrowPlaceholder)
        }
        else {
            getRoomsActive()
            setPlaceholder(returnerPlaceholder)
        }

    }, [borrow, getRoomsActive, getRoomsInactive])

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const val = e.currentTarget.value;
        setBorrow(val === 'borrow');
    }

    function onSelectChange(opt: Option | null, actionMeta: ActionMeta<Option>) {
        setRoomNumber(opt?.value)
        console.log(actionMeta);
    }

    async function handleSubmit() {
        if(!unameRef.current || !divRef.current || roomNumber == undefined) return;
        const uname: string = unameRef.current['value'];
        const div: string = divRef.current['value'];

        if(borrow) {
            await borrowRoom(uname, div, roomNumber);
            successToast("Successfully borrowed room!");
            getRoomsInactive();

        } else {
            await returnRoom(uname, div, roomNumber);
            successToast("Successfully returned room!");
            getRoomsActive();
        }

        selectRef.current?.clearValue();
        unameRef.current['value'] = '';
        divRef.current['value'] = '';
    }

    function successToast(str: string) {
        toast({
            title: `${str}`,
            position: "top-right",
            isClosable: true,
            duration: 2000,
            status: "success",
            variant: "left-accent"
        })
    }

    return {
        opts,
        rooms,
        room,
        placeholder,
        disabled,
        selectRef,
        unameRef,
        divRef,
        setRoom,
        getRooms,
        getRoomsActive,
        getRoomsInactive,
        borrowRoom,
        handleSelectChange,
        onSelectChange,
        handleSubmit,
    }
}