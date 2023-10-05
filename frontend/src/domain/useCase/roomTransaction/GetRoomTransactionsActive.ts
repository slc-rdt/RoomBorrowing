import {RoomTransaction} from "../../model/RoomTransaction.ts";
import {RoomTransactionRepository} from "../../repository/RoomTransactionRepository.ts";

export interface GetRoomTransactionsActiveUseCase {
    invoke: (val?: string) => Promise<RoomTransaction[]>;
}

export class GetRoomTransactionsActive implements GetRoomTransactionsActiveUseCase {
    private roomTransactionRepo: RoomTransactionRepository;

    constructor(_roomtransactionrepo: RoomTransactionRepository) {
        this.roomTransactionRepo = _roomtransactionrepo;
    }

    invoke(val: string | undefined): Promise<RoomTransaction[]> {
        return this.roomTransactionRepo.getRoomTransactionsActive(val);
    }


}