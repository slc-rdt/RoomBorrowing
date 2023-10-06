import React, {useEffect, useState} from "react";
// import RoomAPIDatasourceImpl from "../../data/dataSource/API/RoomAPIDatasourceImpl.ts";
// import {RoomRepositoryImpl} from "../../data/repository/RoomRepositoryImpl.ts";
// import {GetRooms} from "../../domain/useCase/room/GetRooms.ts";

export interface ModalPlaceholder {
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

export function TransactionPageViewModel() {
    const [borrow, setBorrow] = useState<boolean>(true)
    const [placeholder, setPlaceholder] = useState<ModalPlaceholder>(borrowPlaceholder)

    // const roomDataSourceImpl = new RoomAPIDatasourceImpl();
    // const roomsRepositoryImpl = new RoomRepositoryImpl(roomDataSourceImpl);
    // const getRoomsUseCase = new GetRooms(roomsRepositoryImpl);
    // console.log(getRoomsUseCase.invoke().then((resp) => console.log(resp)))

    useEffect(() => {
        if (borrow) setPlaceholder(borrowPlaceholder)
        else setPlaceholder(returnerPlaceholder)

    }, [borrow])

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const val = e.currentTarget.value;
        setBorrow(val === 'borrow');
    }

    return {
        placeholder,
        handleSelectChange
    }
}