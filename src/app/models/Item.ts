export class Item {
    id: number;
    name: string;
    description: string;
    ownerId: string;
    bidderId: string;
    photo: string;
    bidStartDateTime: Date;
    bidEndDateTime: Date;
    bidMinimumAmount: number;
    bidIncrement: number;
    bidAmount: number;
}