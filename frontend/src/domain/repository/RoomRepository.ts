import {Room} from "../model/Room.ts";

export interface RoomRepository {
    getRooms(): Promise<Room[]>;
}