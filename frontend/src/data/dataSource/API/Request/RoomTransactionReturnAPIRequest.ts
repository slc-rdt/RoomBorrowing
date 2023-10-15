export interface RoomTransactionReturnAPIRequest {
    id: string;
    returnerUsername: string;
    returnerDivision: string;
    roomNumber: string;
}

export function createReturnAPIRequest(
    id: string,
    returnerUsername: string,
    returnerDivision: string,
    roomNumber: string
): RoomTransactionReturnAPIRequest {
    return {
        id,
        returnerUsername,
        returnerDivision,
        roomNumber
    };
}