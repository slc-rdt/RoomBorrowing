export interface RoomTransaction {
    id: string;
    borrowerCode: string;
    borrowerUsername: string;
    borrowerDivision: string;
    returnerCode: string;
    returnerUsername: string;
    returnerDivision: string;
    roomNumber: string;
    roomIn: Date;
    roomOut: Date;
}