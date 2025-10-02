import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  // Este método nós já tínhamos, vamos mantê-lo
  getAllCountries(): Observable<any> {
    const url = `${this.apiUrl}/all?fields=name,capital,flags`; 
    return this.http.get(url);
  }

  /**
   * NOVO: Método para buscar um país pelo nome exato.
   * A API pode retornar mais de um resultado, por isso o tipo é um array (any[]).
   */
  getCountryByName(name: string): Observable<any[]> {
    // Pedimos apenas os campos que vamos usar para otimizar
    const url = `${this.apiUrl}/name/${name}?fields=name,capital,flags`;
    return this.http.get<any[]>(url);
  }
}