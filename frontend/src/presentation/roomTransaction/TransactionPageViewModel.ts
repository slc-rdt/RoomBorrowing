import {useState} from "react";
import {Room} from "../../domain/model/Room.ts";
import RoomAPIDatasourceImpl from "../../data/dataSource/API/RoomAPIDatasourceImpl.ts";
import {RoomRepositoryImpl} from "../../data/repository/RoomRepositoryImpl.ts";
import {GetRooms} from "../../domain/useCase/room/GetRooms.ts";

export default function TransactionPageViewModel() {
    const [rooms, setRooms] = useState<Room[]>([]);
    const [room, setRoom] = useState<Room>();

    const roomsDataSourceImpl = new RoomAPIDatasourceImpl();
    const roomsRepositoryImpl = new RoomRepositoryImpl(roomsDataSourceImpl);

    const getRoomsUseCase = new GetRooms(roomsRepositoryImpl);

    async function getRooms(roomNumberPrefix?: string) {
        setRooms(await getRoomsUseCase.invoke(roomNumberPrefix));
    }

    return {
        rooms,
        room,
        setRoom,
        getRooms
    }
}