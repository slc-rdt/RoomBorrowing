import RoomDatasource from "../RoomDatasource.ts";
import {Room} from "../../../domain/model/Room.ts";
import axios from "axios";
import {RoomAPIEntity} from "./Entity/RoomAPIEntity.ts";

const BASE_URL = "http://localhost:8080/api/rooms";

export default class RoomAPIDatasourceImpl implements RoomDatasource {
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
                    const transformedResponse = resp.data.data.map((item: RoomAPIEntity): Room => ({
                        number: item.roomNumber
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

    async getRooms(): Promise<Room[]> {
        try {
            const response = await this.axiosInstance.get(BASE_URL);
            return response.data;
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

    async getRoomsActive(roomNumberPrefix?: string): Promise<Room[]> {
        try {
            const response = await axios.get(BASE_URL);
            return response.data.map((item: RoomAPIEntity): Room => ({
                number: item.roomNumber
            }));
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

    getRoomsInactive(roomNumberPrefix?: string): Promise<Room[]> {
        return Promise.resolve([]);
    }
    createRoom(roomNumber: string): Promise<Room> {
        return Promise.resolve(undefined);
    }

    removeRoom(roomNumber: string): Promise<Room> {
        return Promise.resolve(undefined);
    }

}