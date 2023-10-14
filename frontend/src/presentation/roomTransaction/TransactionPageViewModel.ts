import {useEffect, useState} from "react";
import {Room} from "../../domain/model/Room.ts";
import RoomAPIDatasourceImpl from "../../data/dataSource/API/RoomAPIDatasourceImpl.ts";
import {RoomRepositoryImpl} from "../../data/repository/RoomRepositoryImpl.ts";
import {GetRooms} from "../../domain/useCase/room/GetRooms.ts";

export default function TransactionPageViewModel() {
    const [opts, setOpts] = useState<{ value: string; label: string; }[]>([])
    const [rooms, setRooms] = useState<Room[]>([]);
    const [room, setRoom] = useState<Room>();

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

    return {
        opts,
        rooms,
        room,
        setRoom,
        getRooms,
    }
}