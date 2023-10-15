import RoomTransactionDatasource from "../RoomTransactionDatasource.ts";
import {RoomTransaction} from "../../../domain/model/RoomTransaction.ts";
import axios from "axios";
import {RoomTransactionAPIEntity} from "./Entity/RoomTransactionAPIEntity.ts";
import {RoomTransactionBorrowAPIRequest} from "./Request/RoomTransactionBorrowAPIRequest.ts";
import {RoomTransactionReturnAPIRequest} from "./Request/RoomTransactionReturnAPIRequest.ts";

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
                if (resp.data) {
                    return resp.data.map((item: RoomTransactionAPIEntity): RoomTransaction => ({
                        id: item.id,
                        borrowerUsername: item.borrowerUsername,
                        borrowerDivision: item.borrowerDivision,
                        returnerUsername: item.returnerUsername,
                        returnerDivision: item.returnerDivision,
                        roomNumber: item.roomNumber,
                        roomIn: new Date(item.roomIn),
                        roomOut: new Date(item.roomOut)
                    }));
                }
                return resp.data
            } else {
                throw Error(`[requestClient] Request failed with reason -  ${response}`)
            }
        }],
    })

    async getRoomTransactions(): Promise<RoomTransaction[]> {
        try {
            const response = await this.axiosInstance({
                method: "get",
                url: "/"
            });
            return response.data;
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

    async getRoomTransactionsActive(roomNumber?:string): Promise<RoomTransaction[]> {
        try {
            const response = await this.axiosInstance({
                method: "get",
                url: "/active",
                params: roomNumber
            });
            return response.data;
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

    async roomTransactionBorrow(data: RoomTransactionBorrowAPIRequest): Promise<RoomTransaction> {
        try {
            const response = await this.axiosInstance({
                method: "post",
                url: "/borrow",
                data: data
            });
            return response.data;
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

    async roomTransactionReturn(data: RoomTransactionReturnAPIRequest): Promise<RoomTransaction> {
        try {
            const response = await this.axiosInstance({
                method: "post",
                url: "/return",
                data: data
            });
            return response.data;
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }
}