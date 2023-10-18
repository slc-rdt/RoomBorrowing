import {RoomTransactionRepository} from "../../domain/repository/RoomTransactionRepository.ts";
import RoomTransactionDatasource from "../dataSource/RoomTransactionDatasource.ts";
import {RoomTransaction} from "../../domain/model/RoomTransaction.ts";
import {RoomTransactionBorrowAPIRequest} from "../dataSource/API/Request/RoomTransactionBorrowAPIRequest.ts";
import {RoomTransactionReturnAPIRequest} from "../dataSource/API/Request/RoomTransactionReturnAPIRequest.ts";

export class RoomTransactionRepositoryImpl implements RoomTransactionRepository {
    private dataSource: RoomTransactionDatasource;

    constructor(_datasource: RoomTransactionDatasource) {
        this.dataSource = _datasource;
    }
    getRoomTransactions(roomPrefix?: string, date?: string): Promise<RoomTransaction[]> {
        return this.dataSource.getRoomTransactions(roomPrefix, date);
    }

    getRoomTransactionsActive(roomNumber?: string): Promise<RoomTransaction[]> {
        return this.dataSource.getRoomTransactionsActive(roomNumber);
    }

    borrowRoom(data: RoomTransactionBorrowAPIRequest): Promise<RoomTransaction> {
        return this.dataSource.roomTransactionBorrow(data);
    }

    returnRoom(data: RoomTransactionReturnAPIRequest): Promise<RoomTransaction> {
        return this.dataSource.roomTransactionReturn(data);
    }

}