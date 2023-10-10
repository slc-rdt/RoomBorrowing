import {RoomRepository} from "../../domain/repository/RoomRepository.ts";
import RoomDatasource from "../dataSource/RoomDatasource.ts";
import {Room} from "../../domain/model/Room.ts";

export class RoomRepositoryImpl implements RoomRepository {
    dataSource: RoomDatasource;

    constructor(_datasource: RoomDatasource) {
        this.dataSource = _datasource;
    }

    async getRooms(roomNumberPrefix?: string): Promise<Room[]> {
        return this.dataSource.getRooms(roomNumberPrefix);
    }

    getRoomsActive(roomNumberPrefix?: string): Promise<Room[]> {
        return this.dataSource.getRoomsActive(roomNumberPrefix);
    }

    getRoomsInactive(roomNumberPrefix?: string): Promise<Room[]> {
        return this.dataSource.getRoomsInactive(roomNumberPrefix);
    }

    createRoom(roomNumber: string): Promise<Room> {
        return this.dataSource.createRoom(roomNumber);
    }

    removeRoom(roomNumber: string): Promise<Room> {
        return this.dataSource.removeRoom(roomNumber);
    }

}