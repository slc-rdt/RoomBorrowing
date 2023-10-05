import RoomTransactionDatasource from "../RoomTransactionDatasource.ts";
import {RoomTransaction} from "../../../domain/model/RoomTransaction.ts";

const BASE_URL = "http://localhost:8080/api/room-transactions/";

export default class RoomTransactionAPIDatasourceImpl implements RoomTransactionDatasource {
    async getRoomTransactions(): Promise<RoomTransaction[]> {
        return Promise.resolve([]);
    }

}