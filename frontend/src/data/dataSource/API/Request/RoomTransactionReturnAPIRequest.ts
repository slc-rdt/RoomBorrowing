export interface RoomTransactionReturnAPIRequest {
    returnerIdentityCode: string;
    returnerUsername: string;
    returnerDivision: string;
    roomNumber: string;
}

export function createRoomTransactionReturnAPIRequest(
    returnerIdentityCode: string,
    returnerUsername: string,
    returnerDivision: string,
    roomNumber: string
): RoomTransactionReturnAPIRequest {
    return {
        returnerIdentityCode,
        returnerUsername,
        returnerDivision,
        roomNumber
    };
}