import RoomTransactionDatasource from "../RoomTransactionDatasource.ts";
import {RoomTransaction} from "../../../domain/model/RoomTransaction.ts";
import axios from "axios";
import {RoomTransactionAPIEntity} from "./Entity/RoomTransactionAPIEntity.ts";

const BASE_URL = "http://localhost:8080/api/room-transactions/";

export default class RoomTransactionAPIDatasourceImpl implements RoomTransactionDatasource {
    async getRoomTransactions(): Promise<RoomTransaction[]> {
        try {
            const response = await axios.get(BASE_URL);
            return response.data.map((item: RoomTransactionAPIEntity) => ({
                id: item.id,
                BorrowerUsername: item.borrowerUsername,
                BorrowerDivision: item.borrowerDivision,
                ReturnerUsername: item.returnerUsername,
                ReturnerDivision: item.returnerDivision,
                RoomNumber: item.roomNumber,
                RoomIn: new Date(item.roomIn),
                RoomOut: new Date(item.roomOut)
            }))
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

}