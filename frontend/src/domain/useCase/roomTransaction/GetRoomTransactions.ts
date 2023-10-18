import {RoomTransaction} from "../../model/RoomTransaction.ts";
import {RoomTransactionRepository} from "../../repository/RoomTransactionRepository.ts";
import {formatDateToYYYYMMDD} from "../../../core/lib/Lib.ts";

export interface GetRoomTransactionsUseCase {
    invoke: (roomPrefix?: string, date?: Date) => Promise<RoomTransaction[]>;
}

export class GetRoomTransactions implements GetRoomTransactionsUseCase {
    private roomRepo: RoomTransactionRepository;

    constructor(_roomrepo: RoomTransactionRepository) {
        this.roomRepo = _roomrepo;
    }

    invoke(roomPrefix?: string, date?: Date): Promise<RoomTransaction[]> {
        return this.roomRepo.getRoomTransactions(roomPrefix, date === undefined ? date : formatDateToYYYYMMDD(date!));
    }

}