import RoomTransactionDatasource from "../RoomTransactionDatasource.ts";
import {RoomTransaction} from "../../../domain/model/RoomTransaction.ts";
import axios from "axios";
import {RoomTransactionAPIEntity} from "./Entity/RoomTransactionAPIEntity.ts";

const BASE_URL = "http://localhost:8080/api/room-transactions/";

export default class RoomTransactionAPIDatasourceImpl implements RoomTransactionDatasource {
    private axiosInstance = axios.create({
        baseURL: BASE_URL,
        transformResponse: [function (response) {
            let resp

            try {
                resp = JSON.parse(response)
            } catch (error) {
                throw Error(`[requestClient] Error parsing response JSON data - ${JSON.stringify(error)}`)
            }

            if (resp.status === 'OK') {
                if (resp.data && resp.data.data) {
                    const transformedResponse = resp.data.data.map((item: RoomTransactionAPIEntity): RoomTransaction => ({
                        id: item.id,
                        borrowerUsername: item.borrowerUsername,
                        borrowerDivision: item.borrowerDivision,
                        returnerUsername: item.returnerUsername,
                        returnerDivision: item.returnerDivision,
                        roomNumber: item.roomNumber,
                        roomIn: new Date(item.roomIn),
                        roomOut: new Date(item.roomOut)
                    }));
                    console.log(response);
                    return {
                        ...response,
                        data: transformedResponse
                    };
                }
                return resp.data
            } else {
                throw Error(`[requestClient] Request failed with reason -  ${response}`)
            }
        }],
    })

    async getRoomTransactions(): Promise<RoomTransaction[]> {
        try {
            return await this.axiosInstance({
                method: "get",
                url: "/"
            });
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

}