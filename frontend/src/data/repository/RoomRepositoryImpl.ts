import {RoomRepository} from "../../domain/repository/RoomRepository.ts";
import RoomDatasource from "../dataSource/RoomDatasource.ts";
import {Room} from "../../domain/model/Room.ts";

export class RoomRepositoryImpl implements RoomRepository {
    dataSource: RoomDatasource;

    constructor(_datasource: RoomDatasource) {
        this.dataSource = _datasource;
    }

    async getRooms(): Promise<Room[]> {
        return this.dataSource.getRooms();
    }

}