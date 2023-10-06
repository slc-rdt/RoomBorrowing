import {RoomTransactionReturnAPIRequest} from "../../../data/dataSource/API/Request/RoomTransactionReturnAPIRequest.ts";
import {RoomTransaction} from "../../model/RoomTransaction.ts";
import {RoomTransactionRepository} from "../../repository/RoomTransactionRepository.ts";

export interface ReturnRoomUseCase {
    invoke: (data: RoomTransactionReturnAPIRequest) => Promise<RoomTransaction>;
}

export class ReturnRoom implements ReturnRoomUseCase {
    private roomTransactionRepo: RoomTransactionRepository;

    constructor(_roomtransactionrepo: RoomTransactionRepository) {
        this.roomTransactionRepo = _roomtransactionrepo;
    }
    invoke(data: RoomTransactionReturnAPIRequest): Promise<RoomTransaction> {
        return this.roomTransactionRepo.returnRoom(data);
    }

}