import {RoomTransactionBorrowAPIRequest} from "../../../data/dataSource/API/Request/RoomTransactionBorrowAPIRequest.ts";
import {RoomTransaction} from "../../model/RoomTransaction.ts";
import {RoomTransactionRepository} from "../../repository/RoomTransactionRepository.ts";

export interface BorrowRoomUseCase {
    invoke: (data: RoomTransactionBorrowAPIRequest) => Promise<RoomTransaction>;
}

export class BorrowRoom implements BorrowRoomUseCase {
    private roomTransactionRepo: RoomTransactionRepository;

    constructor(_roomtransactionrepo: RoomTransactionRepository) {
        this.roomTransactionRepo = _roomtransactionrepo;
    }
    invoke(data: RoomTransactionBorrowAPIRequest): Promise<RoomTransaction> {
        return this.roomTransactionRepo.borrowRoom(data);
    }

}