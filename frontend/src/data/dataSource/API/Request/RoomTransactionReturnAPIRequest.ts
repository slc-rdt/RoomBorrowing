export interface RoomTransactionReturnAPIRequest {
    returnerUsername: string;
    returnerDivision: string;
    roomNumber: string;
}

export function createRoomTransactionReturnAPIRequest(
    returnerUsername: string,
    returnerDivision: string,
    roomNumber: string
): RoomTransactionReturnAPIRequest {
    return {
        returnerUsername,
        returnerDivision,
        roomNumber
    };
}