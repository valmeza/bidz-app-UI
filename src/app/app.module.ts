import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemsComponent } from './pages/items/items.component';
import { ItemComponent } from './pages/item/item.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

@NgModule({
	declarations: [
		AppComponent,
		ItemsComponent,
		ItemComponent,
		ItemDetailsComponent
	],
	imports: [BrowserModule, AppRoutingModule, HttpClientModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
