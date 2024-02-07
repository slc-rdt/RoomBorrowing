export interface RoomTransactionBorrowAPIRequest {
    borrowerIdentityCode: string;
    borrowerUsername: string;
    borrowerDivision: string;
    roomNumber: string;
}

export function createRoomTransactionBorrowAPIRequest(
    borrowerIdentityCode: string,
    borrowerUsername: string,
    borrowerDivision: string,
    roomNumber: string
): RoomTransactionBorrowAPIRequest {
    return {
        borrowerIdentityCode,
        borrowerUsername,
        borrowerDivision,
        roomNumber
    };
}
