import {Room} from "../../model/Room.ts";
import {RoomRepository} from "../../repository/RoomRepository.ts";

export interface GetRoomsActiveUseCase {
    invoke: (val?: string) => Promise<Room[]>;
}

export class GetRoomsActive implements GetRoomsActiveUseCase {
    private roomRepo: RoomRepository;

    constructor(_roomrepo: RoomRepository) {
        this.roomRepo = _roomrepo;
    }

    invoke(val?: string): Promise<Room[]> {
        return this.roomRepo.getRoomsActive(val);
    }

}