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

	Item(
		id: number,
		name: string,
		description: string,
		ownerId: string,
		bidderId: string,
		photo: string,
		bidStartDateTime: Date,
		bidEndDateTime: Date,
		bidMinimumAmount: number,
		bidIncrement: number,
		bidAmount: number
	) {
		this.id = id;
		this.name = name;
		this.description = description;
		this.ownerId = ownerId;
		this.bidderId = bidderId;
		this.photo = photo;
		this.bidStartDateTime = bidStartDateTime;
		this.bidEndDateTime = bidEndDateTime;
		this.bidMinimumAmount = bidMinimumAmount;
		this.bidIncrement = bidIncrement;
		this.bidAmount = bidAmount;
	}
}
