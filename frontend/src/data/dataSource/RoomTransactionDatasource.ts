import {RoomTransaction} from "../../domain/model/RoomTransaction.ts";
import {RoomTransactionBorrowAPIRequest} from "./API/Request/RoomTransactionBorrowAPIRequest.ts";
import {RoomTransactionReturnAPIRequest} from "./API/Request/RoomTransactionReturnAPIRequest.ts";

export default interface RoomTransactionDatasource {
    getRoomTransactions(): Promise<RoomTransaction[]>;
    getRoomTransactionsActive(roomNumber?: string): Promise<RoomTransaction[]>;
    roomTransactionBorrow(data: RoomTransactionBorrowAPIRequest): Promise<RoomTransaction>;
    roomTransactionReturn(data: RoomTransactionReturnAPIRequest): Promise<RoomTransaction>;
}