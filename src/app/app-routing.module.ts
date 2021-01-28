import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './pages/item/item.component';
import { ItemsComponent } from './pages/items/items.component';

const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'item/:id', component: ItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
