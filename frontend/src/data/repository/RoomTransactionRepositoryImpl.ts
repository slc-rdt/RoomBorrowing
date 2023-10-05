import {RoomTransactionRepository} from "../../domain/repository/RoomTransactionRepository.ts";
import RoomTransactionDatasource from "../dataSource/RoomTransactionDatasource.ts";
import {RoomTransaction} from "../../domain/model/RoomTransaction.ts";

export class RoomTransactionRepositoryImpl implements RoomTransactionRepository {
    private dataSource: RoomTransactionDatasource;

    constructor(_datasource: RoomTransactionDatasource) {
        this.dataSource = _datasource;
    }
    getRoomTransactions(): Promise<RoomTransaction[]> {
        return this.dataSource.getRoomTransactions();
    }

}