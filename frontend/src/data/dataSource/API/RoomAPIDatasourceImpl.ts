import RoomDatasource from "../RoomDatasource.ts";
import {Room} from "../../../domain/model/Room.ts";
import axios from "axios";
import {RoomAPIEntity} from "./Entity/RoomAPIEntity.ts";

const BASE_URL = "http://localhost:8080/api/rooms";

export default class RoomAPIDatasourceImpl implements RoomDatasource {
    async getRooms(): Promise<Room[]> {
        try {
            const response = await axios.get(BASE_URL);
            return response.data.map((item: RoomAPIEntity): void => {
                item.roomNumber
            });
        } catch (e) {
            console.log(e);
            throw(e);
        }
    }

}