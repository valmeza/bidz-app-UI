import { ItemService } from 'src/app/services/item.service';
import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item;
  id: string;

  constructor(private itemService : ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getItem();
  }

  getItem() {
    this.itemService.getItemById(+this.id).subscribe((result) => {
      this.item = result;
      console.log(result);
    });
  }

}
