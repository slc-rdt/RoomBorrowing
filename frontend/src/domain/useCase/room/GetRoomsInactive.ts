import {Room} from "../../model/Room.ts";
import {RoomRepository} from "../../repository/RoomRepository.ts";

export interface GetRoomsInactiveUseCase {
    invoke: (val?: string) => Promise<Room[]>;
}

export class GetRoomsInactive implements GetRoomsInactiveUseCase {
    private roomRepo: RoomRepository;

    constructor(_roomrepo: RoomRepository) {
        this.roomRepo = _roomrepo;
    }

    invoke(val?: string): Promise<Room[]> {
        return this.roomRepo.getRoomsInactive(val);
    }

}