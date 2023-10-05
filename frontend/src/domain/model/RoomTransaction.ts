export interface RoomTransaction {
    id: string;
    BorrowerUsername: string;
    BorrowerDivision: string;
    ReturnerUsername: string;
    ReturnerDivision: string;
    RoomNumber: string;
    RoomIn: Date;
    RoomOut: Date;
}