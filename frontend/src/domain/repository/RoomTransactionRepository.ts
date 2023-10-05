import {RoomTransaction} from "../model/RoomTransaction.ts";

export interface RoomTransactionRepository {
    getRoomTransactions(): Promise<RoomTransaction[]>;
}