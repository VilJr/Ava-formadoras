import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // <-- 1. IMPORTAR O FormsModule
import { CountriesService } from '../services/countries';

@Component({
  selector: 'app-api',
  templateUrl: 'api.page.html',
  styleUrls: ['api.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule], // <-- 2. ADICIONAR FormsModule AQUI
})
export class ApiPage {

  // Variáveis para controlar a interface
  searchTerm: string = '';
  foundCountry: any = null; // Armazena o país encontrado
  isLoading: boolean = false;
  countryNotFound: boolean = false;

  constructor(private countriesService: CountriesService) {}

  // Função chamada pelo botão de busca
  searchCountry() {
    // Ignora a busca se o campo estiver vazio
    if (!this.searchTerm.trim()) {
      return;
    }

    // Reseta os estados antes de uma nova busca
    this.isLoading = true;
    this.foundCountry = null;
    this.countryNotFound = false;

    this.countriesService.getCountryByName(this.searchTerm).subscribe(
      (data) => {
        // Sucesso! A API retorna um array, então pegamos o primeiro item.
        this.foundCountry = data[0];
        this.isLoading = false;
      },
      (error) => {
        // Erro! O país não foi encontrado (erro 404) ou outro problema.
        console.error('Erro ao buscar país:', error);
        this.countryNotFound = true;
        this.isLoading = false;
      }
    );
  }
}