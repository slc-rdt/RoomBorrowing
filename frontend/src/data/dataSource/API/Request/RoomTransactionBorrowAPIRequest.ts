export interface RoomTransactionBorrowAPIRequest {
    borrowerUsername: string;
    borrowerDivision: string;
    roomNumber: string;
}

export function createRoomTransactionBorrowAPIRequest(
    borrowerUsername: string,
    borrowerDivision: string,
    roomNumber: string
): RoomTransactionBorrowAPIRequest {
    return {
        borrowerUsername,
        borrowerDivision,
        roomNumber
    };
}
