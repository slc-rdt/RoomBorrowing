import RoomTransactionDatasource from "../RoomTransactionDatasource.ts";
import {RoomTransaction} from "../../../domain/model/RoomTransaction.ts";
import axios from "axios";
import {RoomTransactionAPIEntity} from "./Entity/RoomTransactionAPIEntity.ts";

const BASE_URL = "http://localhost:8080/api/room-transactions/";

export default class RoomTransactionAPIDatasourceImpl implements RoomTransactionDatasource {
    async getRoomTransactions(): Promise<RoomTransaction[]> {
        try {
            const response = await axios.get(BASE_URL);
            return response.data.map((item: RoomTransactionAPIEntity) => {
                item.id
                item.borrowerUsername
                item.borrowerDivision
                item.returnerUsername
                item.returnerDivision
                item.roomNumber
                item.roomIn
                item.roomOut
            })
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

}