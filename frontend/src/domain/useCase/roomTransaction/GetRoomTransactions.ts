import {RoomTransaction} from "../../model/RoomTransaction.ts";
import {RoomTransactionRepository} from "../../repository/RoomTransactionRepository.ts";

export interface GetRoomTransactionsUseCase {
    invoke: () => Promise<RoomTransaction[]>;
}

export class GetRoomTransactions implements GetRoomTransactionsUseCase {
    private roomRepo: RoomTransactionRepository;

    constructor(_roomrepo: RoomTransactionRepository) {
        this.roomRepo = _roomrepo;
    }

    invoke(): Promise<RoomTransaction[]> {
        return this.roomRepo.getRoomTransactions();
    }

}