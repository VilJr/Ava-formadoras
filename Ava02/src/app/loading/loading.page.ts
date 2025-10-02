import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html', // <-- Esta linha estava faltando
  styleUrls: ['./loading.page.scss'],   // <-- Esta linha estava faltando
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class LoadingPage {

  constructor(private router: Router) { }

  irParaApp() {
    console.log('Função irParaApp foi chamada!'); // Linha de teste que adicionamos
    this.router.navigate(['tabs']);
  }

}