import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
	selector: 'app-items',
	templateUrl: './items.component.html',
	styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
	// fields/properties
	@Input() items: Array<Item>;
	constructor(private itemService: ItemService) {}

	ngOnInit(): void {
		this.getItems();
	}

	getItems(): Array<Item> {
		this.itemService.getAllItems().subscribe((response) => {
			console.log(response);
			this.items = response;
		});
		return this.items;
	}
}
