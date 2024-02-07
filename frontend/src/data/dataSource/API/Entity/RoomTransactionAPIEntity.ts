export interface RoomTransactionAPIEntity {
    id: string;
    borrowerIdentityCode: string;
    borrowerUsername: string;
    borrowerDivision: string;
    returnerIdentityCode: string;
    returnerUsername: string;
    returnerDivision: string;
    roomNumber: string;
    roomIn: Date;
    roomOut: Date;
}