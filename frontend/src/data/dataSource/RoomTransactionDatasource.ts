import {RoomTransaction} from "../../domain/model/RoomTransaction.ts";

export default interface RoomTransactionDatasource {
    getRoomTransactions(): Promise<RoomTransaction[]>;
    getRoomTransactionsActive(roomNumber?: string): Promise<RoomTransaction[]>;
}