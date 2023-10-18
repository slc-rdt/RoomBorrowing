import {RoomTransaction} from "../model/RoomTransaction.ts";
import {RoomTransactionBorrowAPIRequest} from "../../data/dataSource/API/Request/RoomTransactionBorrowAPIRequest.ts";
import {RoomTransactionReturnAPIRequest} from "../../data/dataSource/API/Request/RoomTransactionReturnAPIRequest.ts";

export interface RoomTransactionRepository {
    getRoomTransactions(roomPrefix?: string, date?: string): Promise<RoomTransaction[]>;
    getRoomTransactionsActive(roomNumber?: string): Promise<RoomTransaction[]>;
    borrowRoom(data: RoomTransactionBorrowAPIRequest): Promise<RoomTransaction>;
    returnRoom(data: RoomTransactionReturnAPIRequest): Promise<RoomTransaction>;
}