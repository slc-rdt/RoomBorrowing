import {RoomTransaction} from "../../domain/model/RoomTransaction.ts";

export default interface RoomTransactionDatasource {
    getRoomTransactions(): Promise<RoomTransaction[]>;
}