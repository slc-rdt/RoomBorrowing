import React, {useEffect, useState} from "react";
import {Room} from "../../domain/model/Room.ts";
import RoomAPIDatasourceImpl from "../../data/dataSource/API/RoomAPIDatasourceImpl.ts";
import {RoomRepositoryImpl} from "../../data/repository/RoomRepositoryImpl.ts";
import {GetRooms} from "../../domain/useCase/room/GetRooms.ts";

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
    const [placeholder, setPlaceholder] = useState<ModalPlaceholder>(borrowPlaceholder)

    const roomsDataSourceImpl = new RoomAPIDatasourceImpl();
    const roomsRepositoryImpl = new RoomRepositoryImpl(roomsDataSourceImpl);

    const getRoomsUseCase = new GetRooms(roomsRepositoryImpl);

    async function getRooms(roomNumberPrefix?: string) {
        const res = await getRoomsUseCase.invoke(roomNumberPrefix);
        setRooms(res);
    }

    useEffect(()=>{
        setOpts(rooms.map(room => ({
            value: room.number,
            label: `Room ${room.number}`
        })));
    }, [rooms])

    useEffect(() => {
        if (borrow) setPlaceholder(borrowPlaceholder)
        else setPlaceholder(returnerPlaceholder)

    }, [borrow])

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const val = e.currentTarget.value;
        setBorrow(val === 'borrow');
    }

    return {
        opts,
        rooms,
        room,
        placeholder,
        setRoom,
        getRooms,
        handleSelectChange,
    }
}