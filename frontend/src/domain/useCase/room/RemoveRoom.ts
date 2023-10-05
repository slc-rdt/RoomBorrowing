import {Room} from "../../model/Room.ts";
import {RoomRepository} from "../../repository/RoomRepository.ts";

export interface RemoveRoomUseCase {
    invoke: (val: string) => Promise<Room>;
}

export class RemoveRoom implements RemoveRoomUseCase {
    private roomRepo: RoomRepository;

    constructor(_roomrepo: RoomRepository) {
        this.roomRepo = _roomrepo;
    }

    invoke(val: string): Promise<Room> {
        return this.roomRepo.removeRoom(val);
    }

}