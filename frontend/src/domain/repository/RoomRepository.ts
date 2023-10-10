import {Room} from "../model/Room.ts";

export interface RoomRepository {
    getRooms(roomNumberPrefix?: string): Promise<Room[]>;
    getRoomsActive(roomNumberPrefix?: string): Promise<Room[]>;
    getRoomsInactive(roomNumberPrefix?: string): Promise<Room[]>;
    createRoom(roomNumber: string): Promise<Room>;
    removeRoom(roomNumber: string): Promise<Room>;
}