import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ItemsComponent } from './components/items/items.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';


import {ItemService} from './services/item.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavbarComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'fsp1'),
    AngularFirestoreModule,
    FormsModule,
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
