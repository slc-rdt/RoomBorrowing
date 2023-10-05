import {Room} from "../../domain/model/Room.ts";

export default interface RoomDatasource {
    getRooms(): Promise<Room[]>;
}