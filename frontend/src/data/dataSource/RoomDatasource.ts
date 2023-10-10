import {Room} from "../../domain/model/Room.ts";

export default interface RoomDatasource {
    getRooms(roomNumberPrefix?: string): Promise<Room[]>;
    getRoomsActive(roomNumberPrefix?: string): Promise<Room[]>;
    getRoomsInactive(roomNumberPrefix?: string): Promise<Room[]>;
    createRoom(roomNumber: string): Promise<Room>;
    removeRoom(roomNumber: string): Promise<Room>;
}