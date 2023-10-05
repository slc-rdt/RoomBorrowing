import RoomTransactionDatasource from "../RoomTransactionDatasource.ts";
import {RoomTransaction} from "../../../domain/model/RoomTransaction.ts";
import axios from "axios";
import {RoomTransactionAPIEntity} from "./Entity/RoomTransactionAPIEntity.ts";

const BASE_URL = "http://localhost:8080/api/room-transactions/";

export default class RoomTransactionAPIDatasourceImpl implements RoomTransactionDatasource {
    async getRoomTransactions(): Promise<RoomTransaction[]> {
        try {
            const response = await axios.get(BASE_URL);
            return response.data.map((item: RoomTransactionAPIEntity): RoomTransaction => ({
                id: item.id,
                borrowerUsername: item.borrowerUsername,
                borrowerDivision: item.borrowerDivision,
                returnerUsername: item.returnerUsername,
                returnerDivision: item.returnerDivision,
                roomNumber: item.roomNumber,
                roomIn: new Date(item.roomIn),
                roomOut: new Date(item.roomOut)
            }))
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

}