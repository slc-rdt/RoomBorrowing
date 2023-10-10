import {Room} from "../../model/Room.ts";
import {RoomRepository} from "../../repository/RoomRepository.ts";

export interface GetRoomsUseCase {
    invoke: (roomNumberPrefix?: string) => Promise<Room[]>;
}

export class GetRooms implements GetRoomsUseCase {
    private roomRepo: RoomRepository;

    constructor(_roomrepo: RoomRepository) {
        this.roomRepo = _roomrepo;
    }

    async invoke(): Promise<Room[]> {
        return this.roomRepo.getRooms();
    }
}