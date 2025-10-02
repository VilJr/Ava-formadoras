import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Adicione esta linha
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';   // <-- Adicione esta linha

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule] // <-- Adicione IonicModule e CommonModule aqui
})
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}