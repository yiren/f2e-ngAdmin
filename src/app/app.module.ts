import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuModule } from '@progress/kendo-angular-menu';
import { NgModule } from '@angular/core';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

const routes:Routes=[
  {path:'', component:HomeComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    OrdersModule,
    ProductsModule,
    
    RouterModule.forRoot(routes),
    
    MenuModule,
    
    BrowserAnimationsModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
