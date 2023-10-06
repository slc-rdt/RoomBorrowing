import {useState} from "react";
import {Room} from "../../domain/model/Room.ts";
import RoomAPIDatasourceImpl from "../../data/dataSource/API/RoomAPIDatasourceImpl.ts";
import {RoomRepositoryImpl} from "../../data/repository/RoomRepositoryImpl.ts";
import {GetRooms} from "../../domain/useCase/room/GetRooms.ts";

export function TransactionPageViewModel() {
    const [rooms, setRooms] = useState<Room[]>([]);

    const roomsDataSourceImpl = new RoomAPIDatasourceImpl();
    const roomsRepositoryImpl = new RoomRepositoryImpl(roomsDataSourceImpl);

    const getRoomsUseCase = new GetRooms(roomsRepositoryImpl);

    async function getRooms() {
        setRooms(await getRoomsUseCase.invoke());
    }

    return {
        rooms,
        getRooms
    }
}