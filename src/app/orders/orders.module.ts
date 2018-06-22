import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { RouterModule } from '@angular/router';

const routes=[
  {path:'orders', component:OrdersComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OrdersComponent]
})
export class OrdersModule { }
