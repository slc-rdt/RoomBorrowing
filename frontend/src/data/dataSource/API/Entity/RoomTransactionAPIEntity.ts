export interface RoomTransactionAPIEntity {
    id: string;
    borrowerUsername: string;
    borrowerDivision: string;
    returnerUsername: string;
    returnerDivision: string;
    roomNumber: string;
    roomIn: Date;
    roomOut: Date;
}