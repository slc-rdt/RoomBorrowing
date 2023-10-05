import RoomDatasource from "../RoomDatasource.ts";
import {Room} from "../../../domain/model/Room.ts";
import axios from "axios";
import {RoomAPIEntity} from "./Entity/RoomAPIEntity.ts";

const BASE_URL = "http://localhost:8080/api/rooms";

export default class RoomAPIDatasourceImpl implements RoomDatasource {
     private axiosInstance = axios.create({
        baseURL: BASE_URL,
        transformResponse: [function (response) {
            if (response.data && response.data.data) {
                const transformedResponse = response.data.data.map((item: RoomAPIEntity): Room => ({
                    number: item.roomNumber
                }));
                return {
                    ...response,
                    data: transformedResponse
                };
            }
            return response;
        }],
    })

    async getRooms(): Promise<Room[]> {
        try {
            const response = await this.axiosInstance.get(BASE_URL);
            // return response.data.map((item: RoomAPIEntity): Room => ({
            //     number: item.roomNumber
            // }));
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