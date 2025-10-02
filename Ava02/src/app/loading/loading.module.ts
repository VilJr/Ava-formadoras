import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingPageRoutingModule } from './loading-routing.module';

// A classe LoadingPage não precisa ser importada aqui
// import { LoadingPage } from './loading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingPageRoutingModule
  ],
  declarations: [] // <-- O array deve estar vazio
})
export class LoadingPageModule {}