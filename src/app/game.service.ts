import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './models/game.model';


@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl = 'http://localhost:8000/games/';
  constructor(private http: HttpClient) {}
  getGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl)
  }

  createGame(newGame: FormData): Observable<Game> {
    return this.http.post<Game>(this.apiUrl, newGame);
  }
}
