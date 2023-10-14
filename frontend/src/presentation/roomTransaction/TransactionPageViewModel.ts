import React, {useCallback, useEffect, useMemo, useState} from "react";
import {Room} from "../../domain/model/Room.ts";
import RoomAPIDatasourceImpl from "../../data/dataSource/API/RoomAPIDatasourceImpl.ts";
import {RoomRepositoryImpl} from "../../data/repository/RoomRepositoryImpl.ts";
import {GetRooms} from "../../domain/useCase/room/GetRooms.ts";
import {GetRoomsActive} from "../../domain/useCase/room/GetRoomsActive.ts";
import {GetRoomsInactive} from "../../domain/useCase/room/GetRoomsInactive.ts";

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

export default function TransactionPageViewModel() {
    const [opts, setOpts] = useState<{ value: string; label: string; }[]>([])
    const [rooms, setRooms] = useState<Room[]>([]);
    const [room, setRoom] = useState<Room>();
    const [borrow, setBorrow] = useState<boolean>(true)
    const [disabled, setDisabled] = useState<boolean>(true);
    const [placeholder, setPlaceholder] = useState<ModalPlaceholder>(borrowPlaceholder)

    const roomsDataSourceImpl = useMemo(() => new RoomAPIDatasourceImpl(), [])
    const roomsRepositoryImpl = useMemo(() => new RoomRepositoryImpl(roomsDataSourceImpl), [roomsDataSourceImpl])

    const getRoomsUseCase = new GetRooms(roomsRepositoryImpl);
    const getRoomsActiveUseCase = useMemo(() => new GetRoomsActive(roomsRepositoryImpl), [roomsRepositoryImpl])
    const getRoomsInactiveUseCase = useMemo(() => new GetRoomsInactive(roomsRepositoryImpl), [roomsRepositoryImpl])

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

    useEffect(()=>{
        setOpts(rooms.map(room => ({
            value: room.number,
            label: `Room ${room.number}`
        })));

        if(rooms.length == 0) {
            setDisabled(true)
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

    return {
        opts,
        rooms,
        room,
        placeholder,
        disabled,
        setRoom,
        getRooms,
        getRoomsActive,
        getRoomsInactive,
        handleSelectChange,
    }
}